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
  const [appWidth, setAppWidth] = useState("70px");
  const [appHeight, setAppHeight] = useState("70px");
  const [appZIndex, setAppZIndex] = useState(-1);
  const [appTop, setAppTop] = useState(0);
  const [appLeft, setAppLeft] = useState(0);
  const [appTransform, setAppTransform] = useState("translate(0, 0)");
  const [fatherPosition, setFatherPosition] = useState<
    "absolute" | "relative" | "fixed" | "sticky" | "static" | undefined
  >("relative");

  function handleClick() {
    setAppZIndex(10);
    setAppTransform("translate(50%, 50%)");
    setFatherPosition("absolute");
    setAppTop(-153);
    setAppLeft(-115);
    setAppWidth("100%");
    setAppHeight("100%");
  }

  return (
    <div
      className=" bg-blue-500 left-0 top-0 z-10"
      style={{
        position: fatherPosition,
        width: appWidth,
        height: appHeight,
      }}
    >
      <button onClick={handleClick} className="w-fit">
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
        className="absolute bg-slate-700 transition-all duration-300 ease-in-out"
        style={{
          width: appWidth,
          height: appHeight,
          top: appTop,
          left: appLeft,
          transform: appTransform,
          borderRadius: "0.75rem",
          zIndex: appZIndex,
        }}
      ></div>
    </div>
  );
}

export default AppIcon;

