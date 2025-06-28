import { Routes, Route, Navigate } from "react-router";
import { ROUTES_NAMES } from "./data";

import { AuthLayout, RootLayout } from "../layouts";

import { LoginPage, CreateItemPage, NotFoundPage } from "../pages";

export function UserRoutes() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Navigate to={ROUTES_NAMES.CI} />} />
        <Route path={ROUTES_NAMES.CI} element={<CreateItemPage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route index element={<Navigate to={ROUTES_NAMES.LOGIN} />} />
        <Route path={ROUTES_NAMES.LOGIN} element={<LoginPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export function AdminRoutes() {
  return <Routes></Routes>;
}
