import { useState, type ReactNode } from "react";
import { NavLink } from "react-router";
import clsx from "clsx";

import { type NavigationProps } from "./Navigation";

interface NavigationLinkProps extends NavigationProps {
  to: string;
  tooltipTitle?: string;
  children?: ReactNode;
}

export default function NavigationLink({
  to,
  collapsed = false,
  children,
  tooltipTitle,
}: NavigationLinkProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        clsx(
          "flex items-center gap-4 hover:bg-secondary/30 hover:opacity-100 rounded-4xl whitespace-nowrap transition-colors",
          isActive ? "opacity-100 bg-secondary/30" : "opacity-60",
          collapsed ? "size-8 flex items-center justify-center" : "px-4 py-3"
        )
      }
    >
      {children}
    </NavLink>
  );
}
