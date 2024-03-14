import rootRoute from "@/route/rootRoute";
import { Link, createRoute, useNavigate } from "@tanstack/react-router";

function IndexPage() {
  const navigate = useNavigate();

  return (
    <main>
      <h1>index</h1>

      <div>
        <Link to="/color-turn">color-turn</Link>
      </div>

      <button
        onClick={() =>
          navigate({
            to: "/jungle-maze",
          })
        }
      >
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
