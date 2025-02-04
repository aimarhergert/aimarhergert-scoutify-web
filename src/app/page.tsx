export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600">Bienvenido a Scoutify 🎯</h1>
      <p className="text-lg text-gray-700 mt-4">
        Descubre tu talento con nuestra inteligencia artificial avanzada.
      </p>
      <a 
        href="/register" 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Regístrate Ahora
      </a>
    </main>
  );
}