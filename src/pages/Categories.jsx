import { Link } from "react-router-dom";
import { useData } from "../App";

export default function Categories() {
  const data = useData();
  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <h2 className="text-lg font-semibold mb-3">Kategoriler</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/c/${cat.id}`}
            className="group rounded-2xl border bg-white shadow-sm overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition"
          >
            {cat.items[0]?.image && (
              <img
                src={cat.items[0].image}
                alt={cat.name}
                className="h-44 w-full object-cover group-hover:opacity-95"
              />
            )}
            <div className="p-4">
              <div className="font-semibold text-slate-800">{cat.name}</div>
              <div className="text-sm text-slate-500 mt-1">
                {cat.items.length} ürün
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
