import { useNavigate } from "react-router";

import { ROUTES_NAMES } from "../router/data";

import { Button } from "../components";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col justify-center items-center gap-4 size-full">
      <div className="flex flex-col items-center gap-2 font-semibold">
        <h1 className="text-accent text-5xl">404</h1>
        <p className="text-3xl">Not Found</p>
      </div>

      <Button onClick={() => navigate(ROUTES_NAMES.ROOT)}>Take me home</Button>
    </section>
  );
}
