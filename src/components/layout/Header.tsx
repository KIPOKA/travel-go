import { Link, NavLink } from "react-router-dom";
import { ROUTES } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", to: ROUTES.home },
  { label: "Destinations", to: ROUTES.search },
  { label: "Deals", to: "#deals" },
  { label: "About", to: "#about" },
];

export function Header() {
  return (
    <header className="border-b border-slate-100 bg-primary">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to={ROUTES.home} className="text-2xl font-bold tracking-tight">
          <span className="text-white">Ro</span>
          <span className="text-orange-500">am</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-500"
                  : "text-slate-600 hover:text-slate-900"
              }
              end={link.to === ROUTES.home}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="#signup"
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
