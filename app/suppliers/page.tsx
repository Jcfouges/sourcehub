"use client";
import { useState } from "react";

export default function SuppliersPage() {
  const [email, setEmail] = useState("");
  return (
    <main className="max-w-5xl mx-auto p-8 space-y-6">
      <h1 className="text-2xl font-bold">Devenir fournisseur</h1>
      <p className="text-slate-600">Bientôt: choix de plan et paiement en ligne.</p>
      <div className="max-w-md space-y-2">
        <label className="text-sm font-medium">Courriel</label>
        <input
          className="w-full border rounded px-3 py-2"
          placeholder="nom@entreprise.com"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button className="mt-2 px-4 py-2 bg-black text-white rounded">Je veux m’inscrire</button>
      </div>
    </main>
  );
}
