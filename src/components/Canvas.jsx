import { useRef } from "react";

export function Canvas() {
  const canvasRef = useRef();

  if (canvasRef.current) {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "green";
    ctx.fillRect(10, 10, 150, 100);
  }
  return <canvas ref={canvasRef} width="200" height="200" />;
}
