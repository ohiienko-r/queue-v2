import clsx from "clsx";

import LinkIcon from "../icons/LinkIcon";
import EditIcon from "../icons/EditIcon";
import TrashIcon from "../icons/TrashIcon";

interface CheckItemProps {
  className?: string;
}

export default function CheckItem({ className = "" }: CheckItemProps) {
  return (
    <div
      className={clsx(
        "group grid grid-cols-[auto_15px] bg-secondary/10 rounded-lg w-full max-w-md overflow-hidden shrink-0",
        className
      )}
    >
      <div className="flex flex-col">
        <header className="items-center grid grid-cols-3 px-3 py-2 border-primary/60 border-b">
          <h2 className="font-semibold">Libra Industries</h2>

          <div className="flex items-center gap-1">
            <LinkIcon className="size-3" />
            <a href="/" className="font-semibold text-red-600">
              Q148897
            </a>
          </div>

          <p className="justify-self-end opacity-60 text-sm">Gogi Mockman</p>
        </header>

        <main className="px-3 py-2 text-sm">
          This is a mock of a potential message title orany additional comment
          so I am trying to add as much plain text here instead of lorem ipsum
          This is a mock of a potential message title orany additional comment
          so I am trying to add as much plain text here instead of lorem ipsum
        </main>

        <footer className="items-center grid grid-cols-3 px-3 py-2">
          <span>Status: badge</span>

          <p className="opacity-60 text-sm">
            {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
          </p>

          <div className="flex justify-self-end items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="hover:text-primary transition-colors cursor-pointer">
              <EditIcon className="size-4" />
            </button>

            <button className="hover:text-red-600 transition-colors cursor-pointer">
              <TrashIcon className="size-4" />
            </button>
          </div>
        </footer>
      </div>

      <div className="bg-red-600"></div>
    </div>
  );
}
