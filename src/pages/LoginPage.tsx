export default function LoginPage() {
  return (
    <div className="self-center gap-4 grid w-full max-w-72">
      <h2 className="font-bold text-xl pointer-events-none select-none">
        Login
      </h2>

      <form
        className="gap-2 grid"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="gap-1 grid">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="text"
            placeholder="example@mail.com"
            required
          />
        </div>

        <div className="gap-1 grid">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="********"
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
