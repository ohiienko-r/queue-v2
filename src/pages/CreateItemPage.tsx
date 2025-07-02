import { Button } from "../components";

import PlusIcon from "../icons/PlusIcon";

export default function CreateItemPage() {
  return (
    <>
      <header className="flex justify-between items-center bg-background-secondary p-4 rounded-xl">
        <h2 className="font-semibold text-3xl">Create Items</h2>

        <Button>
          <PlusIcon /> Add new CI
        </Button>
      </header>

      <section className="bg-background-secondary p-4 rounded-xl h-full"></section>
    </>
  );
}
