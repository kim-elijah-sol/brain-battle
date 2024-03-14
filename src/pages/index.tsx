import rootRoute from "@/route/rootRoute";
import { Link, createRoute, useRouter } from "@tanstack/react-router";

function IndexPage() {
  const router = useRouter();

  return (
    <main>
      <h1>index</h1>

      <div>
        <Link to="/color-turn">color-turn</Link>
      </div>

      <button onClick={() => router.history.push("/jungle-maze")}>
        jungle-maze
      </button>
    </main>
  );
}

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: IndexPage,
});

export default indexRoute;
