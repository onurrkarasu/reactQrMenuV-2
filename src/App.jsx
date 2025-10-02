import { useEffect, useState, createContext, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Categories from "./pages/Categories";
import Category from "./pages/Category";

const DataCtx = createContext(null);
export const useData = () => useContext(DataCtx);

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setErr(e?.message || "Hata"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Yükleniyor…</div>;
  if (err || !data)
    return <div className="p-6 text-red-600">Hata: {String(err)}</div>;

  return (
    <DataCtx.Provider value={data}>
      <TopBar title={data.cafe.name} logo={data.cafe.logo} />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/c/:id" element={<Category />} />
      </Routes>
    </DataCtx.Provider>
  );
}
