import { useState, useEffect } from "react";
import clsx from "clsx";

import { ROUTES_NAMES } from "../router/data";

import Navigation from "./Navigation";
import NavigationLink from "./NavigationLink";

import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import LogOutIcon from "../icons/LogOutIcon";

export default function Sidebar() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebar-state");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-state", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  return (
    <aside
      className={clsx(
        "flex flex-col gap-4 bg-background-secondary p-4 rounded-xl h-full transition-[width]",
        sidebarCollapsed ? "w-16 justify-center" : "w-60"
      )}
    >
      <header
        className={clsx(
          "flex justify-between items-center",
          sidebarCollapsed && "justify-center"
        )}
      >
        <h1
          className={clsx(
            "font-bold text-2xl pointer-events-none select-none",
            sidebarCollapsed && "hidden"
          )}
        >
          <span className="text-accent">Q</span>ueue
        </h1>

        <button
          className="cursor-pointer"
          onClick={() => setSidebarCollapsed((prev) => !prev)}
        >
          <ChevronLeftIcon
            className={clsx(
              "size-5 hover:text-accent transition-all",
              sidebarCollapsed && "rotate-180"
            )}
          />
        </button>
      </header>

      <div className="flex flex-col flex-auto justify-between">
        <Navigation collapsed={sidebarCollapsed} />

        <footer>
          <NavigationLink to={ROUTES_NAMES.LOGIN} collapsed={sidebarCollapsed}>
            <LogOutIcon className="text-accent" />

            <span className={clsx(sidebarCollapsed && "hidden")}>Log Out</span>
          </NavigationLink>
        </footer>
      </div>
    </aside>
  );
}
