export default function contadorPublicoPage() {
  return (
    <div className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Licenciatura en Contador Público</h1>
        <p className="text-gray-600 mb-6">
          La Licenciatura en Contador Público forma profesionales capaces de gestionar, analizar e interpretar la información financiera y contable de organizaciones públicas y privadas, asegurando el cumplimiento de las normativas fiscales y contables vigentes.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>    
            <ul className="text-sm text-gray-600 list-disc ml-5">
              <li>Contabilidad financiera y de costos</li>
              <li>Auditoría y control interno</li>
              <li>Impuestos y legislación fiscal</li>
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