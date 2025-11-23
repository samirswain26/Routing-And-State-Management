import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/Products")({
  component: a,
});

function a() {
  return (
    <div>
        <div>-----------------------------------------------------</div>
      Hello "/Products"!
      <div>
      <Link to="/product/1">Go to product 1.</Link>
      <br />
      <Link to="/product/2">Go to product 2.</Link>
      <br />
      <Link to="/product/3">Go to product 3.</Link>

      </div>
    </div>
  );
}
