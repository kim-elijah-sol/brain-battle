import React from "react";

const colors = [
  "#618fba",
  "#9555e8",
  "#295be6",
  "#5f32dc",
  "#484da2",
  "#576bc2",
] as const;

function GradientBg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <defs>
        <linearGradient
          id="a"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="0"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor={colors[0]}>
            <animate
              attributeName="stopColor"
              values={colors.join(";") + ";" + colors[0]}
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset=".5" stopColor={colors[1]}>
            <animate
              attributeName="stopColor"
              values={
                colors.slice(1).join(";") + ";" + colors[0] + ";" + colors[1]
              }
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stopColor={colors[3]}>
            <animate
              attributeName="stopColor"
              values={
                colors.slice(2).join(";") +
                ";" +
                colors[0] +
                ";" +
                colors[1] +
                ";" +
                colors[2]
              }
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            from="0 .5 .5"
            to="360 .5 .5"
            dur="20s"
            repeatCount="indefinite"
          />
        </linearGradient>
        <linearGradient
          id="b"
          gradientUnits="objectBoundingBox"
          x1="0"
          y1="1"
          x2="1"
          y2="1"
        >
          <stop offset="0" stopColor={colors[0]}>
            <animate
              attributeName="stopColor"
              values={colors.join(";") + ";" + colors[0]}
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <stop offset="1" stopColor={colors[1]} stopOpacity="0">
            <animate
              attributeName="stopColor"
              values={
                colors.slice(1).join(";") + ";" + colors[0] + ";" + colors[1]
              }
              dur="20s"
              repeatCount="indefinite"
            ></animate>
          </stop>
          <animateTransform
            attributeName="gradientTransform"
            type="rotate"
            values="360 .5 .5;0 .5 .5"
            dur="10s"
            repeatCount="indefinite"
          />
        </linearGradient>
      </defs>
      <rect fill="url(#a)" width="100%" height="100%" />
      <rect fill="url(#b)" width="100%" height="100%" />
    </svg>
  );
}

export default React.memo(GradientBg);
