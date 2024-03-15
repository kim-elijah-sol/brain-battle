import GradientBg from "@/lib/components/GradientBg";
import rootRoute from "@/route/rootRoute";
import { createRoute } from "@tanstack/react-router";

function IndexPage() {
  return (
    <main>
      <GradientBg />
    </main>
  );
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

export default indexRoute;
