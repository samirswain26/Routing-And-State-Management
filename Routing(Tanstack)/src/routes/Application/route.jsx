import { createFileRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/Application")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Application layout....
      <h2>Routes</h2>
      <li>
      <Link to="/Application/Dashboard">/Application/Dashboard</Link>
      </li>
      <Outlet />
    </div>
  );
}
