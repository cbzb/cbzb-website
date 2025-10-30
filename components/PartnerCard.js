export default function PartnerCard({ nome, cargo }) {
  return (
    <div className="border-2 border-divider">
      <div className="aspect-[4/3] bg-primary-dark/40"></div>
      <div className="p-5 border-t-2 border-divider text-text-light">
        <h3 className="font-sans uppercase tracking-wide text-sm">{nome}</h3>
        <p className="mt-1 text-text-light/70 text-sm">{cargo}</p>
      </div>
    </div>
  )
}


