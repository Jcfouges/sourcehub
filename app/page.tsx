import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{maxWidth:900,margin:"0 auto",padding:24,textAlign:"center"}}>
      <h1 style={{fontSize:32,fontWeight:700}}>Ferns</h1>
      <p style={{color:"#475569",marginTop:8}}>
        Trouvez des fournisseurs fiables. Devenez fournisseur et payez en ligne (Stripe).
      </p>
      <div style={{marginTop:16,display:"flex",gap:12,justifyContent:"center"}}>
        <Link href="/buyers">Acheteurs</Link>
        <Link href="/suppliers">Fournisseurs</Link>
      </div>
    </main>
  );
}
