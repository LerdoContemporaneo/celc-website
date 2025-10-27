import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-primaryLight text-white">
      <div className="max-w-7xl mx-auto px-6 py-28 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Formamos líderes desde Kínder hasta Licenciatura</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Educación integral con enfoque en valores, bilingüismo e innovación.</p>
        <div className="flex justify-center gap-4">
          <Link href="/niveles" className="bg-white text-primary px-6 py-3 rounded-md font-semibold">Ver niveles
          </Link>
          
          <Link href="/contacto" className="border border-white px-6 py-3 rounded-md font-semibold">Contáctanos
          </Link>
        </div>
      </div>
    </section>
  );
}