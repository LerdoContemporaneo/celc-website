export default function ContactPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-4">¡Contactamos!</h1>
        {/* <p className="text-gray-600 mb-6">Formulario general, teléfonos y ubicación.</p> */}

        <section className="bg-white p-6 rounded-lg shadow">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="p-3 border rounded" placeholder="Nombre completo" />
            <input className="p-3 border rounded" placeholder="Correo electrónico" />
            <input className="p-3 border rounded md:col-span-2" placeholder="Asunto" />
            <textarea className="p-3 border rounded md:col-span-2 h-32" placeholder="Mensaje" />
            <button className="bg-primary text-white px-4 py-2 rounded md:col-span-2">Enviar</button>
          </form>
        </section>
      </div>
    </div>
  );
}
