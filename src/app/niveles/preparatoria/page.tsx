export default function PreparatoriaPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Preparatoria</h1>
        <p className="text-gray-600 mb-6">Preparación integral para la formación universitaria y desarrollo de pensamiento crítico.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              <li>Rutas de profundización</li>
              <li>Proyectos interdisciplinarios</li>
              <li>Orientación vocacional</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Admisiones</h3>
            <p className="text-sm text-gray-600">Requisitos, fechas y proceso de inscripción. Consulta los detalles con el asistente.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Vida estudiantil</h3>
            <p className="text-sm text-gray-600">Consejería, clubes estudiantiles y prácticas de liderazgo.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
