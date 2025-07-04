import clsx from "clsx";
import { useSidebarState } from "../hooks";

import Navigation from "./Navigation";
import LogOutButtonWithModal from "./LogoutButtonWithModal";

import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import UserIcon from "../icons/UserIcon";

export default function Sidebar() {
  const { sidebarCollapsed, setSidebarCollapsed } = useSidebarState();

  return (
    <aside
      className={clsx(
        "flex flex-col gap-4 bg-background-secondary p-4 rounded-xl h-full transition-[width]",
        sidebarCollapsed ? "w-16 justify-center" : "w-72"
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

        <footer className="items-center gap-x-2 grid grid-cols-[40px_1fr_auto]">
          <span
            className={clsx(
              "flex justify-center items-center bg-secondary/30 rounded-full size-10",
              sidebarCollapsed && "hidden"
            )}
          >
            <UserIcon className="text-accent" />
          </span>

          <div
            className={clsx(
              "overflow-ellipsis whitespace-nowrap",
              sidebarCollapsed && "hidden"
            )}
          >
            <h2 className="font-semibold">Gogi Mockman</h2>

            <p className="opacity-60 text-sm">mock@mail.com</p>
          </div>

          <LogOutButtonWithModal collapsed={sidebarCollapsed} />
        </footer>
      </div>
    </aside>
  );
}
