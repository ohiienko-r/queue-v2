import { BrowserRouter } from "react-router";
import { UserRoutes } from "./routes";

export default function Router() {
  return (
    <BrowserRouter>
      <UserRoutes />
    </BrowserRouter>
  );
}
