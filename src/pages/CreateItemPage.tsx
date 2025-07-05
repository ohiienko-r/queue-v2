import { useState } from "react";
import { Button, Modal, CheckItem } from "../components";

import PlusIcon from "../icons/PlusIcon";

export default function CreateItemPage() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center bg-background-secondary p-4 rounded-xl">
        <h2 className="font-semibold text-3xl">Create Items</h2>

        <Button onClick={() => setModalVisible(true)}>
          <PlusIcon /> Add new CI
        </Button>
      </header>

      <section className="flex flex-col gap-3 bg-background-secondary p-4 rounded-xl size-full overflow-y-auto">
        <CheckItem />
        <CheckItem className="self-end" />
        <CheckItem />
        <CheckItem />
        <CheckItem />
        <CheckItem />
        <CheckItem />
      </section>

      <Modal isOpen={modalVisible} onClose={() => setModalVisible(false)}>
        Hi! I am modal
      </Modal>
    </>
  );
}
