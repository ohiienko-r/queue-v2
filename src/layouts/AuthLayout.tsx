import { Outlet } from "react-router";

import heroImage from "../assets/login-hero.jpg";

export default function AuthLayout() {
  return (
    <main className="p-2 h-full">
      <div className="grid grid-cols-2 bg-background-secondary rounded-xl size-full overflow-hidden">
        <section className="flex flex-col justify-between p-4">
          <header>
            <h1 className="font-bold text-2xl pointer-events-none select-none">
              <span className="text-accent">Q</span>ueue
            </h1>
          </header>

          <Outlet />

          <footer className="opacity-60 text-sm">© 2025 Queue Inc.</footer>
        </section>

        <section>
          <img src={heroImage} alt="Hero" className="size-full object-cover" />
        </section>
      </div>
    </main>
  );
}
