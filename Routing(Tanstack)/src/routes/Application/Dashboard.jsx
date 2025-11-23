import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Application/Dashboard')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/Application/Dashboard"!</div>
}
