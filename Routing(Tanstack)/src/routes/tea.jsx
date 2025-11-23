import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tea')({
  component: RouteComponent,
    defaultPreload: "Intent"

})

function RouteComponent() {
  return <div>Hello "/tea"!</div>
}
