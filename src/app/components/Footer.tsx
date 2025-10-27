import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lightGray mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <img src="/logo.png" alt="Logo" className="h-10 mb-3" />
          <p className="text-sm text-gray-600">Institución educativa — Kínder a Licenciatura</p>
        </div>

        <div className="flex gap-8">
          <div>
            <h4 className="font-semibold text-gray-800">Enlaces</h4>
            <ul className="mt-2 text-sm text-gray-600">
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/faqs">Faqs</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800">Contacto</h4>
            <p className="mt-2 text-sm text-gray-600">tel: (999) 123-4567</p>
            <p className="text-sm text-gray-600">email: info@institucion.edu.mx</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Centro de Estudios Lerdo Contemporaneo A.C. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}