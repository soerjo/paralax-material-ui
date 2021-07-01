import { useLayoutEffect, useState } from "react";

export default function useWindowPosition(id) {
  const [animate, setanimate] = useState(false);

  useLayoutEffect(() => {
    function updatePosition() {
      const offSetHeight = window.document.getElementById(id).offsetHeight;
      console.log("hasil offsetheight", offSetHeight, window.pageYOffset);
      if (window.pageYOffset > offSetHeight * 0.7) {
        setanimate(true);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [id]);
  return animate;
}
