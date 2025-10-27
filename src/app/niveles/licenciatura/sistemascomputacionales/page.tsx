export default function SistemasPage() {
  return (
    <div className="pt-8 pb-16">
        <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Licenciatura en Sistemas Computacionales, Administrativos y Contables</h1>
        <p className="text-gray-600 mb-6">Forma profesionales capaces de diseñar, implementar y gestionar sistemas computacionales que optimicen los procesos administrativos y contables en las organizaciones.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>    
            <ul className="text-sm text-gray-600 list-disc ml-5">
                <li>Desarrollo de software</li>
                <li>Sistemas de información</li>
                <li>Redes y telecomunicaciones</li>
                <li>Administración de bases de datos</li>
                <li>Contabilidad y finanzas</li>
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