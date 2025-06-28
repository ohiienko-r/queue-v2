import { Outlet } from "react-router";

import { Sidebar } from "../components";

export default function RootLayout() {
  return (
    <main className="flex gap-2 p-2 h-full">
      <Sidebar />

      <section className="flex-auto bg-background-secondary p-4 rounded-xl">
        <Outlet />
      </section>
    </main>
  );
}
