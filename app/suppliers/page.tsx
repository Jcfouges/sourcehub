"use client";
async function subscribe(priceId: string) {
  const r = await fetch("/api/checkout", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ priceId }),
  });
  const { url, error } = await r.json();
  if (url) window.location.href = url;
  else alert(error || "Stripe non configuré.");
}
export default function SuppliersPage() {
  return (
    <main style={{maxWidth:900,margin:"0 auto",padding:24}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Fournisseurs</h1>
      <button onClick={()=>subscribe(process.env.NEXT_PUBLIC_PRICE_BASIC || "price_xxx")}
              style={{padding:"8px 12px",border:"1px solid #cbd5e1",borderRadius:6,marginTop:12}}>
        Payer (exemple)
      </button>
      <p style={{fontSize:12,color:"#64748b",marginTop:8}}>
        Mettre STRIPE_SECRET_KEY, APP_URL et NEXT_PUBLIC_PRICE_* dans Vercel.
      </p>
    </main>
  );
}
