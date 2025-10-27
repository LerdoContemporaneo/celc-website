import LevelCard from "./LevelCard";

export default function LevelHub() {
  const levels = [
    { title: "Kínder", href: "/niveles/kinder", excerpt: "Primeros pasos con enfoque humanista y bilingüe." },
    { title: "Primaria", href: "/niveles/primaria", excerpt: "Fundamentos académicos y valores." },
    { title: "Secundaria", href: "/niveles/secundaria", excerpt: "Fundamentos académicos y valores." },
    { title: "Preparatoria", href: "/niveles/preparatoria", excerpt: "Formación integral y preparación universitaria." },
    { title: "Licenciatura", href: "/niveles/licenciatura", excerpt: "Carreras profesionales con enfoque práctico." },
    { title: "Maestrias", href: "/niveles/maestrias", excerpt: "Especializacion para profesionistas." },
  ];

  return (
    <section className="py-16 bg-lightGray">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">Nuestra oferta educativa</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {levels.map(l => (
            <LevelCard key={l.title} title={l.title} href={l.href} excerpt={l.excerpt} />
          ))}
        </div>
      </div>
    </section>
  );
}
