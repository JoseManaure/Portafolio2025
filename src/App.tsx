import { useEffect, useState, type JSX } from "react";
import { FaBoxOpen, FaReact, FaNodeJs, FaEnvelope, FaEye, FaTimes } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  // Contador visitas por IP
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
        "Aplicación web de inventario en tiempo real, con control de stock, rutas de despacho y dashboard intuitivo.",
      url: "https://inventario-app-fr1k.vercel.app/inventario",
      icon: <FaBoxOpen className="text-gray-300 w-10 h-10" />,
      tecnologias: ["React", "Node.js", "MongoDB", "TailwindCSS", "TypeScript", "Express", "Vercel"],
    },
  ];

  const techData: Record<string, { icon?: JSX.Element }> = {
    React: { icon: <FaReact className="w-4 h-4 inline mr-1" /> },
    "Node.js": { icon: <FaNodeJs className="w-4 h-4 inline mr-1" /> },
    MongoDB: { icon: <SiMongodb className="w-4 h-4 inline mr-1" /> },
    TailwindCSS: { icon: <SiTailwindcss className="w-4 h-4 inline mr-1" /> },
    TypeScript: { icon: <span className="w-4 h-4 inline mr-1">TS</span> },
    Express: { icon: <span className="w-4 h-4 inline mr-1">Ex</span> },
    Vercel: { icon: <span className="w-4 h-4 inline mr-1">V</span> },
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("📨 Gracias por contactarme, te responderé pronto!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 text-white font-sans relative">
      <br></br>|
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-gray-800/80 backdrop-blur-md shadow z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jose Manaure</h1>
          <div className="flex gap-6 text-sm font-medium">
            <button onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-yellow-400">Inicio</button>
            <button onClick={() => document.getElementById("acerca")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-yellow-400">Acerca</button>
            <button onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-yellow-400">Contacto</button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900/60 pointer-events-none"></div>
        <div className="mb-6 z-10 animate-slideInOnce">
          <img src="/ruta-de-tu-foto.jpg" alt="Jose Manaure" className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover shadow-lg" />
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 z-10 animate-slideInOnce">
          Full Stack<span className="text-yellow-400"> Developer</span>
        </h1>

        <p className="text-lg md:text-xl max-w-3xl opacity-90 z-10">
          🚀 <span className="text-blue-400 font-bold">React</span>, <span className="text-green-600 font-bold">Node.js</span>, <span className="text-green-800 font-bold">MongoDB</span> y <span className="text-purple-400 font-bold">TypeScript</span>.
          <br />
          Diseño y desarrollo aplicaciones web que optimizan la experiencia del usuario y apoyan los objetivos estratégicos de la empresa.
        </p>

        {/* Enlaces de contacto profesional */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 z-10">
          <a href="mailto:tuemail@dominio.com" className="text-white/80 hover:text-white transition underline flex items-center gap-2">
            <FaEnvelope /> Correo
          </a>
          <a href="https://github.com/JoseManaure" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition underline flex items-center gap-2">
            🐙 GitHub
          </a>
          <a href="/cv.pdf" target="_blank" className="text-white/80 hover:text-white transition underline flex items-center gap-2">
            📄 Currículo
          </a>
        </div>

        {/* Proyecto destacado */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          {proyectos.map((p, i) => (
            <div key={i} className="bg-gray-800/70 backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center shadow-xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105 transition transform">
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{p.nombre}</h3>
              <p className="text-white/80 mb-4">{p.descripcion}</p>
              {/* Tecnologías como link */}
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {p.tecnologias.map((tech, idx) => (
                  <span key={idx} className="text-white/80 text-sm hover:text-white cursor-pointer transition">
                    {techData[tech].icon} {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={() => setShowDemo(true)} className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-xl font-semibold hover:bg-yellow-300 transition">
                  <FaEye className="inline mr-2" /> Ver Demo
                </button>
                <a href="https://github.com/JoseManaure/InventarioApp" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 rounded-xl font-semibold hover:bg-gray-600 transition">
                  Código →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botones CV/GitHub */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 z-10">
          <a href="/cv.pdf" className="px-6 py-3 bg-gray-700 rounded-xl font-bold hover:bg-gray-600 transition">📄 Ver mi CV</a>
          <a href="https://github.com/JoseManaure" target="_blank" className="px-6 py-3 bg-gray-700 rounded-xl font-bold hover:bg-gray-600 transition">🐙 GitHub</a>
        </div>

        <p className="mt-4 text-sm opacity-60 z-10">👁️ {viewCount} visitas</p>
      </section>

      {/* Acerca de mí */}
      <section id="acerca" className="py-20 bg-gray-800/30 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Acerca de mí</h2>
          <p className="text-lg text-white/90 mb-6">
            Soy desarrollador fullstack con pasión por crear aplicaciones eficientes y elegantes. 
            Me enfoco en tecnologías modernas, código limpio y experiencia de usuario.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 bg-gray-900/50 text-center">
        <div className="max-w-md mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8">Contacto</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <input type="text" placeholder="Tu nombre" value={formData.nombre} onChange={(e) => setFormData({ ...formData, nombre: e.target.value })} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
            <input type="email" placeholder="Tu email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
            <textarea placeholder="Tu mensaje..." rows={4} value={formData.mensaje} onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })} className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white" required />
            <button type="submit" className="w-full py-3 bg-yellow-400 text-gray-900 font-bold rounded-xl hover:bg-yellow-300 transition">Enviar mensaje</button>
          </form>
        </div>
      </section>

      {/* Modal Demo */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
          <div className="relative bg-gray-800 p-6 rounded-2xl w-11/12 md:w-3/4 h-3/4 flex flex-col">
            <button onClick={() => setShowDemo(false)} className="absolute top-3 right-3 text-gray-300 hover:text-white">
              <FaTimes size={24} />
            </button>
            <iframe src="https://inventario-app-fr1k.vercel.app/inventario" title="Demo" className="w-full h-full rounded-xl border border-gray-700"></iframe>
          </div>
        </div>
      )}

      <footer className="py-10 text-center text-white/70 bg-black/30">© {new Date().getFullYear()} Jose Manaure</footer>

      <style>{`
        @keyframes slideInOnce { 0% {opacity:0; transform: translateY(-20px);} 100% {opacity:1; transform:translateY(0);} }
        .animate-slideInOnce { animation: slideInOnce 1s ease forwards; }
      `}</style>
    </div>
  );
}
