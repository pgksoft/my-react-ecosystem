import { useCallback, useRef } from 'react';

type TUseInfiniteScrollProps = {
  enabled?: boolean;
  hasMore: boolean;
  loading: boolean;
  threshold?: number;
  onLoadMore: () => void;
};

type TUseInfiniteScrollResult = {
  onScroll: (event: React.UIEvent<HTMLElement>) => void;
  saveScrollPosition: () => void;
  restoreScrollPosition: () => void;
  setListboxRef: (node: HTMLElement | null) => void;
};

export const useInfiniteScroll = ({
  enabled = true,
  hasMore,
  loading,
  threshold = 300,
  onLoadMore
}: TUseInfiniteScrollProps): TUseInfiniteScrollResult => {
  const listboxRef = useRef<HTMLElement | null>(null);
  const scrollPosRef = useRef(0);

  const saveScrollPosition = useCallback(() => {
    if (!listboxRef.current) return;

    scrollPosRef.current = listboxRef.current.scrollTop;
  }, []);

  const restoreScrollPosition = useCallback(() => {
    if (!listboxRef.current) return;

    listboxRef.current.scrollTop = scrollPosRef.current;
  }, []);

  const setListboxRef = useCallback((node: HTMLElement | null) => {
    listboxRef.current = node;
  }, []);

  const onScroll = useCallback(
    (event: React.UIEvent<HTMLElement>) => {
      if (!enabled) return;

      const node = event.currentTarget;

      setListboxRef(node);

      const nearBottom =
        node.scrollHeight - node.scrollTop <= node.clientHeight + threshold;

      if (nearBottom && hasMore && !loading) {
        saveScrollPosition();
        onLoadMore();
      }
    },
    [
      enabled,
      hasMore,
      loading,
      onLoadMore,
      saveScrollPosition,
      setListboxRef,
      threshold
    ]
  );

  return {
    onScroll,
    saveScrollPosition,
    restoreScrollPosition,
    setListboxRef
  };
};
