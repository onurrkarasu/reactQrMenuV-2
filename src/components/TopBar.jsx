import { getTableFromURL } from "../utils";
export default function TopBar({ title, logo }) {
  const table = getTableFromURL();
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        {logo && <img src={logo} alt="logo" className="w-8 h-8" />}
        <h1 className="text-xl font-bold text-slate-900">
          {title} · <span className="text-teal-600">Masa {table}</span>
        </h1>
        <div className="ml-auto text-sm text-slate-500">QR · SPA</div>
      </div>
    </header>
  );
}
