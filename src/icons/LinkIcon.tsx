import { type IconProps } from "../types/app";

export default function LinkIcon({
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
        d="M10.0002 13C10.4297 13.5742 10.9776 14.0492 11.6067 14.393C12.2359 14.7367 12.9317 14.9411 13.6468 14.9924C14.362 15.0436 15.0798 14.9404 15.7515 14.6898C16.4233 14.4392 17.0333 14.0471 17.5402 13.54L20.5402 10.54C21.451 9.59702 21.955 8.334 21.9436 7.02302C21.9322 5.71204 21.4063 4.45797 20.4793 3.53093C19.5523 2.60389 18.2982 2.07805 16.9872 2.06666C15.6762 2.05526 14.4132 2.55924 13.4702 3.47003L11.7502 5.18003M14.0002 11C13.5707 10.4259 13.0228 9.95084 12.3936 9.60709C11.7645 9.26333 11.0687 9.05891 10.3535 9.00769C9.63841 8.95648 8.92061 9.05966 8.24885 9.31025C7.5771 9.56083 6.96709 9.95296 6.4602 10.46L3.4602 13.46C2.54941 14.403 2.04544 15.666 2.05683 16.977C2.06822 18.288 2.59407 19.5421 3.52111 20.4691C4.44815 21.3962 5.70221 21.922 7.01319 21.9334C8.32418 21.9448 9.58719 21.4408 10.5302 20.53L12.2402 18.82"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
