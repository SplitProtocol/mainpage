import { useEffect } from "react";

export const useOutsideAlerter = (ref, onClose) => {
  useEffect(() => {
    const onClick = (event) => {
      const target = event.target;

      if (ref.current && !ref.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [onClose, ref]);
};
