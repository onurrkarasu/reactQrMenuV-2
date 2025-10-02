import { useParams, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useData } from "../App";

function ProductCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="h-44 w-full object-cover"
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold text-slate-800">{item.name}</div>
        {item.desc && (
          <div className="text-sm text-slate-500 mt-1 flex-1">{item.desc}</div>
        )}
      </div>
    </div>
  );
}

export default function Category() {
  const { id } = useParams();
  const nav = useNavigate();
  const data = useData();
  const [query, setQuery] = useState("");

  const category = useMemo(
    () => data.categories.find((c) => c.id === id),
    [data, id]
  );

  if (!category)
    return (
      <main className="max-w-5xl mx-auto px-4 py-6">Kategori bulunamadı.</main>
    );

  const filtered = category.items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => nav(-1)}
          className="px-3 py-1.5 rounded-lg border hover:bg-gray-50"
        >
          ← Geri
        </button>
        <h2 className="text-lg font-semibold">{category.name}</h2>
      </div>

      {/* Arama inputu */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Ürün ara..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-teal-200"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-slate-500">Ürün bulunamadı.</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </main>
  );
}
