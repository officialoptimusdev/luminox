
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
      <Link
        to="/"
        className="flex items-center gap-1 text-sky-600 hover:underline"
      >
        <Home size={16} />
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-gray-400">/</span>
          {item.href ? (
            <Link
              to={item.href}
              className="text-sky-600 hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-800">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
