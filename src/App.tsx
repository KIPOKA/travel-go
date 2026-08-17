import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";

/** Root layout: persistent header/footer, routed page content in between. */
export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
