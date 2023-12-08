import { useEffect, useRef } from "react";

export function useOutsideClick(hanlder, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          hanlder();
        }
      }

      document.addEventListener("click", handleClick, listenCapturing, true);

      return () =>
        document.removeEventListener(
          "click",
          handleClick,
          listenCapturing,
          true
        );
    },
    [hanlder, listenCapturing]
  );

  return ref;
}
