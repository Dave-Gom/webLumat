import React, { useEffect, useRef, useState } from "react";
import { useResize } from "./useResize";

interface selectedPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export const useSelected = () => {
  const [selected, setSelected] = useState("dashboard");
  const [selPos, setSelPos] = useState<selectedPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const { windowDimenion } = useResize();

  // refs
  const selectedRef = useRef(null);
  const unselectedRef = useRef(null);
  //

  useEffect(() => {
    mueveSelector();
  }, []);

  useEffect(() => {
    mueveSelector();
  }, [selected, windowDimenion]);

  const mueveSelector = () => {
    let e: HTMLElement = selectedRef.current;
    let pos = {
      top: e.offsetTop,
      left: e.offsetLeft,
      width: e.offsetWidth,
      height: e.offsetHeight,
    };
    setSelPos(pos);
  };

  return { selected, selPos, selectedRef, unselectedRef, setSelected };
};
