import Link from "next/link";

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold">Trouvez des fournisseurs fiables partout dans le monde</h1>
      <p className="mt-3 text-slate-600">
        Recherche par catégorie, sous‑catégorie, région et critères avancés.
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/buyers" className="px-4 py-2 rounded bg-black text-white">Trouver un fournisseur</Link>
        <Link href="/suppliers" className="px-4 py-2 rounded border">Devenir fournisseur</Link>
      </div>
    </main>
  );
}
