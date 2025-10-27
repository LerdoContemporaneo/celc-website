import LevelHub from "../components/LevelHub";

export default function NivelesPage() {
  return (
    <div className="pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-primary mb-6">Niveles</h1>
        <p className="text-gray-600 mb-6">Selecciona el nivel que te interese para ver más detalles.</p>
        <LevelHub />
      </div>
    </div>
  );
}
