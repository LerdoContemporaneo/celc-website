export default function KinderPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Kínder</h1>
        <p className="text-gray-600 mb-6">Enfoque pedagógico afectivo, bilingüismo inicial y actividades lúdicas que promueven el desarrollo integral.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              <li>Estimulación temprana</li>
              <li>Habilidades socioemocionales</li>
              <li>Bilingüismo básico</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Admisiones</h3>
            <p className="text-sm text-gray-600">Documentos generales, entrevista con padres y observación inicial. Para detalles, consulta al asistente.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Vida estudiantil</h3>
            <p className="text-sm text-gray-600">Ambientes seguros, talleres lúdicos y espacios de juego guiado.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
