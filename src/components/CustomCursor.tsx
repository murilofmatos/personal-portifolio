"use client";
import { useState, useEffect } from "react";

function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(30); // tamanho dinâmico

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      setSize(24);
    };
    window.addEventListener("mousedown", handleMouseDown);
    return () => window.removeEventListener("mousedown", handleMouseDown);
  }, []);

  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      setSize(30);
    };
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, []);

  return (
    <div
      style={{
        left: pos.x,
        top: pos.y,
        width: size,
        height: size,
      }}
      className="fixed z-99 rounded-full bg-white/30 backdrop-blur pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-all duration-100 ease-out shadow-[0_0_10px_2px_rgba(0,0,0,0.5)]"
    />
  );
}

export default CustomCursor;

