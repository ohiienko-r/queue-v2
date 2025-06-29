import { useState, useEffect } from "react";

export default function useSidebarState() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    const saved = localStorage.getItem("sidebar-state");
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("sidebar-state", JSON.stringify(sidebarCollapsed));
  }, [sidebarCollapsed]);

  return { sidebarCollapsed, setSidebarCollapsed };
}
