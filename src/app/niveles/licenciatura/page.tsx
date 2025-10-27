export default function LicenciaturaPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Licenciatura</h1>
        <p className="text-gray-600 mb-6">Oferta de carreras con enfoque profesional, prácticas y convenios internacionales.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              <li>Modelos basados en competencias</li>
              <li>Prácticas profesionales</li>
              <li>Movilidad y convenios</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Admisiones</h3>
            <p className="text-sm text-gray-600">Requisitos, becas y paquete de documentación. Para cotizaciones personalizadas, pregunta al asistente.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Vida estudiantil</h3>
            <p className="text-sm text-gray-600">Laboratorios, incubadora de proyectos y empleo de egresados.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
