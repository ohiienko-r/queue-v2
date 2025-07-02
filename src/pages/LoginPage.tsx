import { Input, Button } from "../components";

export default function LoginPage() {
  return (
    <div className="self-center gap-4 grid w-full max-w-72">
      <h2 className="font-bold text-3xl">Login</h2>

      <form
        className="gap-3 grid"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="gap-1 grid">
          <label htmlFor="email">Email</label>

          <Input
            id="email"
            type="text"
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="gap-1 grid">
          <label htmlFor="password">Password</label>

          <Input
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <Button type="submit">Login</Button>
      </form>
    </div>
  );
}
