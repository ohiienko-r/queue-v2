import { useState, useEffect } from "react";
import { Outlet } from "react-router";
import clsx from "clsx";

import ChevronLeftIcon from "../icons/ChevronLeftIcon";

export default function RootLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebar-state");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-state", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  return (
    <main className="flex gap-2 p-2 h-full">
      <aside
        className={clsx(
          "items-start gap-y-4 grid bg-background-secondary p-4 rounded-xl h-full transition-[width]",
          sidebarCollapsed ? "w-16 justify-center" : "w-2xs"
        )}
      >
        <header className="flex justify-between items-center">
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
      </aside>

      <section className="bg-background-secondary p-4 rounded-xl w-full">
        <Outlet />
      </section>
    </main>
  );
}
