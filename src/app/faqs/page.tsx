export default function FaqsPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">Faqs</h1>
        <p className="text-gray-600 mb-6">Esta página contiene preguntas frecuentes sobre Centro de Estudios Lerdo Contemporaneo</p>

        <section className="bg-white p-6 rounded-lg shadow mb-6">
          <h3 className="font-semibold mb-2">Admision</h3>
          <ol className="list-decimal ml-5 text-gray-600">
            <li>Registro inicial</li>
            <li>Entrega de documentos</li>
            <li>Evaluación / entrevista (según nivel)</li>
            <li>Confirmación y pago</li>
          </ol>
        </section>

        <section className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-2">No encuentro mi pregunta</h3>
          <p className="text-sm text-gray-600">¿Necesitas fechas exactas, temarios o no encuntras tu pregunta? Pregunta al asistente usando el ícono.</p>
        </section>
      </div>
    </div>
  );
}
