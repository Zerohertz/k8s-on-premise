"use client";

import { useWindowSize } from "react-use";

import { useClientEffect } from "@/hooks";

const WindowSizeHandler: React.FC = () => {
  const { height } = useWindowSize();

  useClientEffect(() => {
    if (CSS.supports("height: 100dvh")) return;
    const $content = document.getElementById("layout-content");

    if ($content) $content.style.minHeight = `${height}px`;
  }, [height]);

  return null;
};

export default WindowSizeHandler;
