export default function PartnerCard({ nome, cargo, foto = null, especialidades = [] }) {
  return (
    <div className="border-2 border-divider">
      <div className="aspect-[2/3] bg-primary-dark/40 flex items-center justify-center">
        {foto ? (
          <img src={foto} alt={nome} className="w-full h-full object-cover" />
        ) : (
          <div className="text-text-light/60 font-sans uppercase tracking-wide text-sm">Foto indisponível</div>
        )}
      </div>
      <div className="p-5 border-t-2 border-divider text-text-light">
        <h3 className="font-sans uppercase tracking-wide text-sm">{nome}</h3>

        {cargo && (
          <span className={`inline-block mt-2 text-[11px] uppercase tracking-wide px-2 py-1 border ${
            cargo.toLowerCase() === 'sócio' 
              ? 'border-[var(--color-divider-base)] bg-[var(--color-divider-base)]/20 text-[var(--color-divider-base)]' 
              : 'button-border text-text-light/80'
          }`}>
            {cargo}
          </span>
        )}

        {Array.isArray(especialidades) && especialidades.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-text-light/80 list-disc list-inside">
            {especialidades.map((esp) => (
              <li key={esp}>{esp}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}


