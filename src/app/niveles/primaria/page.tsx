export default function PrimariaPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Primaria</h1>
        <p className="text-gray-600 mb-6">Formación de bases sólidas en lecto-escritura, matemáticas y valores.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Plan de estudios</h3>
            <ul className="text-sm text-gray-600 list-disc ml-5">
              <li>Fortalecimiento de competencias básicas</li>
              <li>Proyectos integrados</li>
              <li>Inglés progresivo</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Admisiones</h3>
            <p className="text-sm text-gray-600">Inscripciones, documentos y exámenes diagnósticos. Consulta al asistente para cronograma.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-semibold mb-2">Vida estudiantil</h3>
            <p className="text-sm text-gray-600">Actividades extracurriculares, talleres artísticos y deportivos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
