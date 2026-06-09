"use client";

import { useEffect, useState } from "react";
import Preloader from "./Preloader";

export default function PreloaderWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let hasLoaded = false;
    let timerComplete = false;

    const timer = setTimeout(() => {
      timerComplete = true;
      if (hasLoaded) {
        setIsLoading(false);
      }
    }, 1000);

    const handleLoad = () => {
      hasLoaded = true;
      if (timerComplete) {
        setIsLoading(false);
      }
    };

    if (document.readyState === "complete") {
      hasLoaded = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return isLoading && <Preloader />;
}
