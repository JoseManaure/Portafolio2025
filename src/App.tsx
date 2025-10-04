import { FaBoxOpen } from "react-icons/fa";

export default function App() {
  const proyectos = [
    {
      nombre: "Inventario App",
      descripcion: "App de inventario en tiempo real, con control de stock y rutas de despacho.",
      url: "https://inventario-app-fr1k.vercel.app/inventario",
      icon: <FaBoxOpen className="text-yellow-400 w-10 h-10" />,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-teal-500 via-purple-500 to-pink-500 text-white font-sans">

      {/* ----------------------- */}
      {/* Sección Hero / Acerca */}
      {/* ----------------------- */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-slideInOnce">
          Hola, soy <span className="text-yellow-300">Jose Manaure</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-3xl opacity-90 animate-fadeInOnce delay-200">
          {/* Aquí rellena tu descripción personal */}
          Desarrollador Fullstack con experiencia en React, Node.js y MongoDB. Me apasiona crear aplicaciones web útiles, rápidas y con buen diseño.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl shadow-2xl hover:bg-yellow-300 hover:scale-105 transition transform text-lg"
          >
            📄 Ver mi CV
          </a>
          <a
            href="https://github.com/JoseManaure"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-800 text-white font-bold rounded-xl shadow-2xl hover:bg-gray-700 hover:scale-105 transition transform text-lg flex items-center justify-center gap-2"
          >
            🐙 GitHub
          </a>
        </div>
      </section>

      {/* ----------------------- */}
      {/* Sección Acerca de mí */}
      {/* ----------------------- */}
      <section className="py-20 bg-white/10 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Acerca de mí</h2>
          <p className="text-lg text-white/90 mb-6">
            {/* Aquí puedes rellenar con tu biografía, experiencia y skills */}
            Soy desarrollador web fullstack con pasión por crear aplicaciones eficientes y elegantes. Me gusta trabajar con tecnologías modernas y siempre busco mejorar la experiencia de usuario.
          </p>
          <p className="text-lg text-white/80">
            {/* Otra info opcional */}
            Aquí puedes agregar tus intereses, educación o cualquier detalle que quieras compartir.
          </p>
        </div>
      </section>

      {/* ----------------------- */}
      {/* Sección Proyectos */}
      {/* ----------------------- */}
      <section className="py-20 bg-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectos.map((proyecto, i) => (
                <div
                  key={i}
                  className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition transform"
                >
                  <div className="mb-4">{proyecto.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{proyecto.nombre}</h3>
                  <p className="text-white/80 mb-4">{proyecto.descripcion}</p>
                  <a
                    href={proyecto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-teal-500 text-white rounded-xl font-semibold hover:bg-teal-400 transition transform hover:scale-105"
                  >
                    Ver App →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- */}
      {/* Footer */}
      {/* ----------------------- */}
      <footer className="py-10 text-center text-white/90 bg-black/20">
        <div className="flex justify-center space-x-8 mb-4">
          <a href="https://github.com/JoseManaure" className="hover:text-yellow-300 transition">GitHub</a>
          <a href="mailto:tuemail@example.com" className="hover:text-yellow-300 transition">Email</a>
          <a href="https://linkedin.com/in/tuusuario" className="hover:text-yellow-300 transition">LinkedIn</a>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Jose Manaure. Todos los derechos reservados.</p>
      </footer>

      {/* ----------------------- */}
      {/* Animaciones Tailwind */}
      {/* ----------------------- */}
      <style>
        {`
          @keyframes fadeInOnce {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes slideInOnce {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInOnce { animation: fadeInOnce 1s ease forwards; }
          .animate-slideInOnce { animation: slideInOnce 1s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>
    </div>
  );
}
