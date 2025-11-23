import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/about"}>About</Link>
        </div>
        <div>
          <a href="/game">Game (it's a "a" tag) </a>{" "}
          {/*  Here the "a" tag remount the DOM */}
        </div>
        <div>
          <Link to={"/tea"}>Tea</Link>
        </div>
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  );
}
