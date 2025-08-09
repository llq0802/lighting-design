const style = {
  maxHeight: 'none',
};

// indicator={<LoadingOutlined spin style={{ fontSize: loadingProps?.style?.fontSize || 36 }} />}

/**
 * 合并请求loading和外部loading配置
 */
export function useMergeLoading(requestLoading: boolean, outLoading: Record<string, any> | undefined | boolean) {
  if (outLoading === void 0) {
    return { spinning: requestLoading, style };
  }
  if (typeof outLoading === 'boolean') {
    return { spinning: outLoading, style };
  }
  return {
    spinning: requestLoading,
    ...outLoading,
    style: { ...style, ...outLoading.style },
  };
}
