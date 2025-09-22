/**
 * iframe通信库
 * 提供父子页面间的安全通信功能
 */

export type IframeMessageData<T = any> = {
  type: string;
  payload?: T;
  id?: string;
};

export type IframeMessageCallback<T = any> = (data: T, origin: string) => void;

/**
 * Iframe通信管理器
 */
export class IframeMessenger {
  private static instance: IframeMessenger;
  private callbacks: Map<string, IframeMessageCallback>;
  private pendingRequests: Map<string, { resolve: Function; reject: Function }>;

  private constructor() {
    this.callbacks = new Map();
    this.pendingRequests = new Map();
    this.init();
  }

  /**
   * 获取单例实例
   */
  public static getInstance(): IframeMessenger {
    if (!IframeMessenger.instance) {
      IframeMessenger.instance = new IframeMessenger();
    }
    return IframeMessenger.instance;
  }

  /**
   * 初始化消息监听器
   */
  private init(): void {
    window.addEventListener('message', this.handleMessage.bind(this));
  }

  /**
   * 处理接收到的消息
   */
  private handleMessage(event: MessageEvent): void {
    const { data, origin } = event;

    // 检查是否为期望的消息格式
    if (!data || typeof data !== 'object' || !data.type) {
      return;
    }

    const messageData: IframeMessageData = data;

    // 处理响应消息
    if (messageData.id && this.pendingRequests.has(messageData.id)) {
      const request = this.pendingRequests.get(messageData.id)!;
      this.pendingRequests.delete(messageData.id);

      if (messageData.type.endsWith('_SUCCESS')) {
        request.resolve(messageData.payload);
      } else if (messageData.type.endsWith('_ERROR')) {
        request.reject(messageData.payload);
      }
      return;
    }

    // 处理普通消息
    const callback = this.callbacks.get(messageData.type);
    if (callback) {
      callback(messageData.payload, origin);
    }
  }

  /**
   * 发送消息到指定窗口
   * @param target 目标窗口
   * @param message 消息数据
   * @param targetOrigin 目标源
   */
  public sendMessage(target: Window, message: IframeMessageData, targetOrigin: string): void {
    target.postMessage(message, targetOrigin);
  }

  /**
   * 发送请求并等待响应
   * @param target 目标窗口
   * @param message 消息数据
   * @param targetOrigin 目标源
   * @returns Promise
   */
  public sendRequest(target: Window, message: IframeMessageData, targetOrigin: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const id = `${message.type}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      message.id = id;

      this.pendingRequests.set(id, { resolve, reject });
      this.sendMessage(target, message, targetOrigin);

      // 设置超时
      setTimeout(() => {
        if (this.pendingRequests.has(id)) {
          this.pendingRequests.delete(id);
          reject(new Error('Request timeout'));
        }
      }, 10000);
    });
  }

  /**
   * 注册消息监听器
   * @param type 消息类型
   * @param callback 回调函数
   */
  public on(type: string, callback: IframeMessageCallback): void {
    this.callbacks.set(type, callback);
  }

  /**
   * 移除消息监听器
   * @param type 消息类型
   */
  public off(type: string): void {
    this.callbacks.delete(type);
  }

  /**
   * 发送响应消息
   * @param target 目标窗口
   * @param originalMessage 原始消息
   * @param targetOrigin 目标源
   * @param payload 响应数据
   * @param isError 是否为错误响应
   */
  public sendResponse(
    target: Window,
    originalMessage: IframeMessageData,
    targetOrigin: string,
    payload?: any,
    isError: boolean = false,
  ): void {
    if (!originalMessage.id) return;

    const responseMessage: IframeMessageData = {
      type: isError ? `${originalMessage.type}_ERROR` : `${originalMessage.type}_SUCCESS`,
      payload,
      id: originalMessage.id,
    };

    this.sendMessage(target, responseMessage, targetOrigin);
  }
}

/**
 * 简化的iframe通信hook
 */
export const useIframeMessenger = () => {
  return IframeMessenger.getInstance();
};

/**
 * 父页面通信工具
 */
export class ParentMessenger {
  /**
   * 发送消息给父页面
   * @param message 消息数据
   * @param targetOrigin 目标源，默认为*
   */
  public static send(message: IframeMessageData, targetOrigin: string = '*'): void {
    if (window.parent !== window) {
      IframeMessenger.getInstance().sendMessage(window.parent, message, targetOrigin);
    }
  }

  /**
   * 发送请求给父页面并等待响应
   * @param message 消息数据
   * @param targetOrigin 目标源，默认为*
   */
  public static request(message: IframeMessageData, targetOrigin: string = '*'): Promise<any> {
    if (window.parent !== window) {
      return IframeMessenger.getInstance().sendRequest(window.parent, message, targetOrigin);
    }
    return Promise.reject(new Error('Not in iframe'));
  }
}

/**
 * 子页面通信工具
 */
export class ChildMessenger {
  /**
   * 发送消息给指定iframe
   * @param iframe iframe元素
   * @param message 消息数据
   * @param targetOrigin 目标源
   */
  public static send(iframe: HTMLIFrameElement, message: IframeMessageData, targetOrigin: string): void {
    IframeMessenger.getInstance().sendMessage(iframe.contentWindow!, message, targetOrigin);
  }

  /**
   * 发送请求给指定iframe并等待响应
   * @param iframe iframe元素
   * @param message 消息数据
   * @param targetOrigin 目标源
   */
  public static request(iframe: HTMLIFrameElement, message: IframeMessageData, targetOrigin: string): Promise<any> {
    return IframeMessenger.getInstance().sendRequest(iframe.contentWindow!, message, targetOrigin);
  }
}
