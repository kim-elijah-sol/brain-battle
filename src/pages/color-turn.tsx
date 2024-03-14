import rootRoute from "@/route/rootRoute";
import { createRoute, useRouter } from "@tanstack/react-router";

function ColorTurnPage() {
  const router = useRouter();

  return (
    <main>
      <h1>color-turn</h1>

      <button onClick={() => router.history.back()}>go Back</button>
    </main>
  );
}

const colorTurnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/color-turn",
  component: ColorTurnPage,
});

export default colorTurnRoute;
