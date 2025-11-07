"use client";
import Image from "next/image";
import { useState } from "react";

function AppIcon({
  icon,
  alt,
  name,
}: {
  icon: string;
  alt: string;
  name?: string;
}) {
  const [appWidth, setAppWidth] = useState("0");
  const [appHeight, setAppHeight] = useState("0");
  const [appZIndex, setAppZIndex] = useState(10);
  const [appTop, setAppTop] = useState("0");
  const [appLeft, setAppLeft] = useState("0");
  const [appTransform, setAppTransform] = useState("translate(0, 0)");
  const [fatherPosition, setFatherPosition] = useState<
    "absolute" | "relative" | "fixed" | "sticky" | "static" | undefined
  >("static");
  const [fatherWidth, setFatherWidth] = useState("70px");
  const [fatherHeight, setFatherHeight] = useState("70px");

  function handleClick() {
    setAppZIndex(50);
    setAppTransform("-50% -50%");
    setFatherPosition("absolute");
    setAppTop("50%");
    setAppLeft("50%");
    setAppWidth("100%");
    setAppHeight("100%");
    setFatherWidth("100%");
    setFatherHeight("100%");
  }

  return (
    <div
      className="left-0 top-0 z-10"
      style={{
        position: fatherPosition,
        width: fatherWidth,
        height: fatherHeight,
        display: "flex",
        zIndex: appZIndex,
      }}
    >
      <button
        onClick={handleClick}
        className="w-fit transition-all duration-300"
        style={{
          position: fatherPosition,
          left: appLeft,
          top: appTop,
          translate: appTransform,
        }}
      >
        <Image
          src={icon}
          alt={alt}
          width={70}
          height={70}
          className="rounded-xl"
        />
        {name && <p className="text-white mt-1 text-sm text-center">{name}</p>}
      </button>
      <div
        className="bg-slate-700 transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          position: fatherPosition,
          width: appWidth,
          height: appHeight,
          top: appTop,
          left: appLeft,
          translate: appTransform,
          borderRadius: "0.75rem",
        }}
      ></div>
    </div>
  );
}

export default AppIcon;
