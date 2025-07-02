import { type IconProps } from "../types/app";

export default function PlusIcon({
  className = "",
  width = 20,
  height = 20,
  color = "currentColor",
  style = {},
  ...props
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      {...props}
    >
      <path
        d="M9.99984 4.1665V15.8332M4.1665 9.99984H15.8332"
        stroke={color}
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
