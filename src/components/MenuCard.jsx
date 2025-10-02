import { useCart } from "../store/cart";
import { formatTRY } from "../utils";

export default function MenuCard({ item }) {
  const add = useCart((s) => s.add);
  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden flex flex-col">
      {item.image && (
        <img
          src={item.image}
          alt={item.name}
          className="h-40 w-full object-cover"
        />
      )}
      <div className="p-4 flex-1 flex flex-col">
        <div className="font-semibold">{item.name}</div>
        {item.desc && (
          <div className="text-sm text-gray-500 mt-1 flex-1">{item.desc}</div>
        )}
        <div className="mt-3 flex items-center justify-between">
          <div className="font-medium">{formatTRY(item.price)}</div>
          <button
            onClick={() => add(item)}
            className="px-3 py-1.5 rounded-lg bg-teal-600 text-white hover:bg-teal-700"
          >
            Ekle
          </button>
        </div>
      </div>
    </div>
  );
}
