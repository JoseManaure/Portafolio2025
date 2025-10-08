import { useEffect, useState } from "react";
import { FaBoxOpen, FaReact, FaNodeJs, FaEye, FaTimes } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [showDemo, setShowDemo] = useState<boolean>(false);
  const [viewCount, setViewCount] = useState<number>(0);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  // ----------------------
  // Contador visitas por IP
  // ----------------------
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await fetch("https://api.ipify.org?format=json");
        const data = await res.json();
        const userIP = data.ip;

        const storedIPs = JSON.parse(localStorage.getItem("portfolioIPs") || "[]");

        if (!storedIPs.includes(userIP)) {
          const count = parseInt(localStorage.getItem("portfolioViews") || "0") + 1;
          localStorage.setItem("portfolioViews", count.toString());
          setViewCount(count);

          storedIPs.push(userIP);
          localStorage.setItem("portfolioIPs", JSON.stringify(storedIPs));
        } else {
          const count = parseInt(localStorage.getItem("portfolioViews") || "1");
          setViewCount(count);
        }
      } catch (error) {
        console.error("Error obteniendo IP:", error);
      }
    };
    fetchIP();
  }, []);

  const proyectos = [
    {
      nombre: "Inventario App",
      descripcion:
        "App de inventario en tiempo real, con control de stock y rutas de despacho.",
      url: "https://inventario-app-fr1k.vercel.app/inventario",
      icon: <FaBoxOpen className="text-gray-300 w-10 h-10" />,
      tecnologias: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    },
  ];

  const techData: Record<string, { color: string; icon?: JSX.Element }> = {
    React: { color: "bg-blue-500", icon: <FaReact className="w-4 h-4" /> },
    "Node.js": { color: "bg-green-600", icon: <FaNodeJs className="w-4 h-4" /> },
    MongoDB: { color: "bg-green-800", icon: <SiMongodb className="w-4 h-4" /> },
    TailwindCSS: { color: "bg-sky-400", icon: <SiTailwindcss className="w-4 h-4" /> },
  };

  // ----------------------
  // Scrollspy
  // ----------------------
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")?.offsetTop ?? 0;
      const acerca = document.getElementById("acerca")?.offsetTop ?? 0;
      const proyectosTop = document.getElementById("proyectos")?.offsetTop ?? 0;
      const contactoTop = document.getElementById("contacto")?.offsetTop ?? 0;
      const scrollPos = window.scrollY + 100;

      if (scrollPos >= contactoTop) setActiveSection("contacto");
      else if (scrollPos >= proyectosTop) setActiveSection("proyectos");
      else if (scrollPos >= acerca) setActiveSection("acerca");
      else setActiveSection("hero");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("📨 Gracias por contactarme, te responderé pronto!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white font-sans relative">

      {/* ----------------------- */}
      {/* Menú Horizontal */}
      {/* ----------------------- */}
      <header className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md shadow z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-center gap-8">
          {["hero", "acerca", "proyectos", "contacto"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`px-3 py-1 rounded font-semibold transition ${
                activeSection === id ? "text-yellow-400" : "text-white/80"
              }`}
            >
              {id === "hero"
                ? "Inicio"
                : id === "acerca"
                ? "Acerca de mí"
                : id === "proyectos"
                }
            </button>
          ))}
        </nav>
      </header>

      {/* ----------------------- */}
      {/* Hero */}
      {/* ----------------------- */}
      <section
        id="hero"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        {/* Foto circular */}
        <div className="mb-6 animate-slideInOnce">
          <img
            src="/ruta-de-tu-foto.jpg" // <-- reemplaza con tu foto
            alt="Jose Manaure"
            className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover shadow-lg"
          />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-slideInOnce">
          Hola, soy <span className="text-gray-300">Jose Manaure</span>
        </h1>

        <p className="text-lg md:text-xl mb-6 max-w-3xl opacity-90">
          🚀 Desarrollador Fullstack con experiencia en{" "}
          <span className="text-blue-400 font-bold animate-fadeInOnce delay-[200ms]">React</span>,{" "}
          <span className="text-green-600 font-bold animate-fadeInOnce delay-[400ms]">Node.js</span>,{" "}
          <span className="text-green-800 font-bold animate-fadeInOnce delay-[600ms]">MongoDB</span> y{" "}
          <span className="text-purple-400 font-bold animate-fadeInOnce delay-[800ms]">TypeScript</span>.  
          <br />
          Me apasiona crear aplicaciones web útiles, rápidas y con diseño atractivo.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          {[
            { label: "📄 Ver mi CV", link: "/cv.pdf" },
            { label: "🐙 GitHub", link: "https://github.com/JoseManaure" },
          ].map((btn, i) => (
            <a
              key={i}
              href={btn.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gray-700/80 text-white font-bold rounded-xl shadow-lg backdrop-blur-md hover:bg-gray-600/80 transform hover:scale-105 transition duration-300 text-lg relative overflow-hidden group"
            >
              {btn.label}
              <span className="absolute inset-0 bg-gradient-to-r from-gray-400/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-sm opacity-60">👁️ {viewCount} visitas</p>
      </section>

      {/* ----------------------- */}
      {/* Acerca de mí */}
      {/* ----------------------- */}
      <section id="acerca" className="py-20 bg-gray-800/30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Acerca de mí</h2>
          <p className="text-lg text-white/90 mb-6">
            Soy desarrollador web fullstack con pasión por crear aplicaciones eficientes y
            elegantes. Me gusta trabajar con tecnologías modernas y siempre busco mejorar la
            experiencia de usuario.
          </p>
          <p className="text-lg text-white/80">
            Me enfoco en la calidad del código, arquitectura limpia y rendimiento en frontend y backend.
          </p>
        </div>
      </section>

      {/* ----------------------- */}
      {/* Proyectos */}
      {/* ----------------------- */}
      <section id="proyectos" className="py-20 bg-gray-900/30">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {proyectos.map((proyecto, i) => (
              <div
                key={i}
                className="bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition transform"
              >
                <div className="mb-4">{proyecto.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{proyecto.nombre}</h3>
                <p className="text-white/80 mb-4">{proyecto.descripcion}</p>

                {/* Tecnologías */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {proyecto.tecnologias?.map((tech, idx) => {
                    const data = techData[tech];
                    return (
                      <span
                        key={idx}
                        className={`${data?.color ?? "bg-gray-700"} text-white font-bold px-3 py-1 rounded-full text-sm flex items-center gap-1`}
                      >
                        {data?.icon}
                        <strong>{tech}</strong>
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDemo(true)}
                    className="px-5 py-2 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-500 transition"
                  >
                    <FaEye className="inline mr-2" /> Ver Demo
                  </button>
                  <a
                    href="https://github.com/JoseManaure/InventarioApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-700 text-white rounded-xl font-semibold hover:bg-gray-600 transition"
                  >
                    Código →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Demo */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative bg-gray-800 p-6 rounded-2xl w-11/12 md:w-3/4 h-3/4 flex flex-col">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
            >
              <FaTimes size={24} />
            </button>
            <iframe
              src="https://inventario-app-fr1k.vercel.app/inventario"
              title="Demo"
              className="w-full h-full rounded-xl border border-gray-700"
            ></iframe>
          </div>
        </div>
      )}

      {/* ----------------------- 
    
      <section id="contacto" className="py-20 bg-gray-800/30 text-center">
        <div className="max-w-lg mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 text-white"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              required
            />
            <input
              type="email"
              placeholder="Tu email"
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 text-white"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <textarea
              placeholder="Tu mensaje..."
              rows={4}
              className="w-full p-3 rounded-lg bg-gray-900/70 border border-gray-700 text-white"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-500 transition"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </section>
*/}
      {/* ----------------------- */}
      {/* Footer */}
      {/* ----------------------- */}
      <footer className="py-10 text-center text-white/90 bg-black/30">
        <p className="text-sm">© {new Date().getFullYear()} Jose Manaure. Todos los derechos reservados.</p>
      </footer>

      {/* Animaciones */}
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
        `}
      </style>
    </div>
  );
}
