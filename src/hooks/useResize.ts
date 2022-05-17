import { useEffect, useState } from "react";

export const useResize = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  }); //estado inicial de las dimensiones de la pantalla

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  }; //establece el cambio de dimensiones de la pantalla a la variable de estado

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]); //detecta el cambio

  return { windowDimenion };
};
