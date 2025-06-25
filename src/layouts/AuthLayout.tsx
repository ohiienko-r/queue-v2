import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main className="p-2 h-full">
      <section className="flex flex-col justify-between bg-background-secondary p-4 rounded-xl size-full">
        <header>
          <h1 className="font-bold text-2xl pointer-events-none select-none">
            <span className="text-accent">Q</span>ueue
          </h1>
        </header>

        <Outlet />

        <footer className="opacity-60 text-sm">© 2025 Queue Inc.</footer>
      </section>
    </main>
  );
}
