import { type ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";

import CloseIcon from "../icons/CloseIcon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
  className?: string;
}

export default function Modal({
  isOpen,
  onClose,
  children,
  className = "",
}: ModalProps) {
  const handleModalClose = () => {
    setTimeout(onClose, 150);
  };

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  //TODO: reimplement
  if (!isOpen) return null;

  return createPortal(
    <div
      className={clsx(
        "top-0 right-0 bottom-0 left-0 z-10 fixed inset-0 flex justify-center items-center bg-black/20 backdrop-blur-md smooth-appear",
        isOpen ? "smooth-appear" : "smooth-exit"
      )}
      onClick={handleModalClose}
    >
      <div
        className={clsx(
          "relative bg-background-secondary p-4 border border-primary/20 rounded-xl w-full max-w-md",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="top-2 right-2 absolute m-0 p-0 hover:text-primary transition-colors cursor-pointer"
          aria-label="Close"
        >
          <CloseIcon className="size-5" />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
