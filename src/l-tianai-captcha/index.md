---
title: LTianaiCaptcha
toc: content
---

## LTianaiCaptcha

基于 [tianai-captcha](https://gitee.com/dromara/tianai-captcha) Java 后端高级验证实现的 React 滑块拼图组件

配合 [tianai-captcha](https://gitee.com/dromara/tianai-captcha) Java 或 Springboot 可无缝集成到 React 项目中

支持 PC 移动端 触摸笔 手写板

## 代码演示

### 基础用法

<code src="./demos/demo2.tsx" ></code>

### 在弹窗使用

<code src="./demos/Demo1.tsx" ></code>

## API

### LTianaiCaptchaProps 属性

| 属性                  | 说明                                 | 类型                                                                                                                                                                                                      | 默认值                        | 版本 |
| --------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---- |
| className             | 自定义类名                           | string                                                                                                                                                                                                    | -                             | -    |
| style                 | 自定义样式                           | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| requestImg            | 获取验证码图片的请求函数             | () => Promise&lt;{ id: string; backgroundImage: string; templateImage: string; backgroundImageWidth: number; backgroundImageHeight: number; templateImageWidth: number; templateImageHeight: number }&gt; | -                             | -    |
| requestCheck          | 验证滑块结果的请求函数               | (params: any) => Promise&lt;{ data?: any; success?: boolean; code: number; msg?: string }&gt;                                                                                                             | -                             | -    |
| backgroundImageWidth  | 背景图片宽度                         | number                                                                                                                                                                                                    | 310                           | -    |
| backgroundImageHeight | 背景图片高度                         | number                                                                                                                                                                                                    | 180                           | -    |
| sliderImageWidth      | 滑块图片宽度                         | number                                                                                                                                                                                                    | 56                            | -    |
| actionRef             | 组件引用，可用于刷新验证码           | React.RefObject&lt;LTianaiCaptchaActionRef \| undefined&gt;                                                                                                                                               | -                             | -    |
| requestCheckBefore    | 验证前的回调函数，可用于修改提交参数 | (params: any) => any                                                                                                                                                                                      | -                             | -    |
| styleContent          | 内容区域样式                         | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| styleContentTips      | 提示信息区域样式                     | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| styleTrack            | 轨道区域样式                         | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| styleTrackShadow      | 轨道阴影样式                         | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| styleTrackMark        | 轨道标记样式                         | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| styleTrackMove        | 滑块样式                             | React.CSSProperties                                                                                                                                                                                       | -                             | -    |
| moveIcon              | 滑块图标                             | React.ReactNode                                                                                                                                                                                           | &lt;DoubleRightOutlined /&gt; | -    |
| loadingIcon           | 加载图标                             | React.ReactNode                                                                                                                                                                                           | &lt;LoadingOutlined /&gt;     | -    |
| onFail                | 验证失败回调                         | () => void                                                                                                                                                                                                | -                             | -    |
| onSuccess             | 验证成功回调                         | (data: any) => void                                                                                                                                                                                       | -                             | -    |
| onFinally             | 验证完成回调（无论成功或失败）       | () => void                                                                                                                                                                                                | -                             | -    |
| render                | 自定义渲染函数                       | (elements: React.ReactNode, status: { imgLoading: boolean; imgData: any; checkLoading: boolean; checkData: any; isSuccess: boolean }, props: LTianaiCaptchaProps) => React.ReactNode                      | -                             | -    |

### LTianaiCaptchaActionRef 方法

通过 [actionRef](file:///Users/lilanqing/Desktop/web/kaiyuan/lighting-design/src/l-tianai-captcha/interface.ts#L60-L60) 可以调用组件的以下方法：

| 方法名  | 说明           | 类型                      | 版本 |
| ------- | -------------- | ------------------------- | ---- |
| reset   | 重置验证码状态 | () => void                | -    |
| refresh | 刷新验证码     | () => Promise&lt;void&gt; | -    |

### requestCheck 返回的 code 状态码

| 状态码 | 说明         |
| ------ | ------------ |
| 4000   | 验证码已失效 |
| 4001   | 验证失败     |
| 200    | 验证成功     |
