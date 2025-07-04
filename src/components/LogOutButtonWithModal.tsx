import { useState } from "react";
import clsx from "clsx";

import Modal from "./Modal";
import Button from "./Button";

import LogOutIcon from "../icons/LogOutIcon";

interface LogOutButtonWithModalProps {
  collapsed?: boolean;
}

export default function LogOutButtonWithModal({
  collapsed = false,
}: LogOutButtonWithModalProps) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <button
        className={clsx(
          "hover:text-accent transition-colors cursor-pointer",
          collapsed && "size-8 flex items-center justify-center"
        )}
        onClick={() => setModalVisible(true)}
      >
        <LogOutIcon />
      </button>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        className="flex flex-col gap-6"
      >
        <h2 className="font-semibold text-2xl">Log out</h2>

        <p className="opacity-60">
          Are you sure you want to log out? This action can not be undone
        </p>

        <div className="flex items-center gap-2">
          <Button className="w-full" onClick={() => setModalVisible(false)}>
            Cancel
          </Button>

          <Button variant={"destructive"} className="w-full">
            Log Out
          </Button>
        </div>
      </Modal>
    </>
  );
}
