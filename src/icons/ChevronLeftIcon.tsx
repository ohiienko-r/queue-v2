import { type IconProps } from "../types/app";

export default function ChevronLeftIcon({
  className = "",
  width = 24,
  height = 24,
  color = "currentColor",
  style = {},
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <path
        d="M11 17L6 12L11 7M18 17L13 12L18 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
