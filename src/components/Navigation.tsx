import clsx from "clsx";

import { ROUTES_NAMES } from "../router/data";

import NavigationLink from "./NavigationLink";

import StackIcon from "../icons/StackIcon";
import CoinsIcon from "../icons/CoinsIcon";

export interface NavigationProps {
  collapsed?: boolean;
}

export default function Navigation({ collapsed = false }: NavigationProps) {
  return (
    <nav className="flex flex-col gap-2">
      <NavigationLink to={ROUTES_NAMES.CI} collapsed={collapsed}>
        <StackIcon className="text-accent" />

        <span className={clsx(collapsed && "hidden")}>Create Items</span>
      </NavigationLink>

      <NavigationLink to={ROUTES_NAMES.RFQ} collapsed={collapsed}>
        <CoinsIcon className="text-accent" />

        <span className={clsx(collapsed && "hidden")}>RFQ</span>
      </NavigationLink>
    </nav>
  );
}
