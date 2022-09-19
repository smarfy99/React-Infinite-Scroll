import React, { useEffect, useState, useCallback } from "react";
import MockAPI from "../API/MockAPI";

//useFetch라는 커스텀 훅 생성

const IntersectionObserverAPI = (
  onIntersect: () => void,
  options?: IntersectionObserverInit
) => {
  const [target, setTarget] = useState<Element | null>(null);

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        onIntersect();
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, options);
    target && observer.observe(target);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersect, target, options]);
  return [setTarget];
};

export default IntersectionObserverAPI;
