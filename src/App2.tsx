import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaEnvelope, FaEye, FaTimes } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

export default function App() {
  const [showDemo, setShowDemo] = useState(false);
  const [viewCount, setViewCount] = useState(0);
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  useEffect(() => {
    const stored = localStorage.getItem("portfolioViews");
    const count = stored ? parseInt(stored) + 1 : 1;
    localStorage.setItem("portfolioViews", count.toString());
    setViewCount(count);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Gracias por tu mensaje ✨");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const servicios = [
    { icon: <FaReact className="text-blue-500 w-8 h-8" />, titulo: "Frontend Moderno", desc: "Interfaces rápidas y responsivas con React & Tailwind." },
    { icon: <FaNodeJs className="text-green-600 w-8 h-8" />, titulo: "Backend Escalable", desc: "APIs sólidas con Node.js y bases de datos seguras." },
    { icon: <SiMongodb className="text-emerald-600 w-8 h-8" />, titulo: "Bases de Datos", desc: "Modelado de datos optimizado en MongoDB o SQL." },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0A192F] font-[Inter]">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-lg shadow z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Jose Manaure</h1>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#inicio" className="hover:text-blue-600">Inicio</a>
            <a href="#servicios" className="hover:text-blue-600">Servicios</a>
            <a href="#proyecto" className="hover:text-blue-600">Proyecto</a>
            <a href="#contacto" className="hover:text-blue-600">Contacto</a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.img
          src="/ruta-de-tu-foto.jpg"
          alt="Jose Manaure"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-36 h-36 rounded-full border-4 border-blue-500 object-cover mb-6"
        />
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hola, soy <span className="text-blue-600">Jose Manaure</span>
        </motion.h1>
        <p className="max-w-2xl text-gray-600 text-lg mb-8">
          Desarrollador <strong>Full Stack</strong>con experiencia en <strong>JavaScript,</strong>
          <strong> TypeScript, React, Node.js, Express y MongoDB.</strong>
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/JoseManaure"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            GitHub
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            Ver CV
          </a>
        </div>
        <p className="text-gray-400 text-sm mt-8">👁️ {viewCount} visitas</p>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-[#E6F1FF]/60">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className="flex justify-center mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{s.titulo}</h3>
                <p className="text-gray-600">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyecto */}
      <section id="proyecto" className="py-20 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Proyecto Destacado</h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E6F1FF]/50 p-8 rounded-3xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-3">Inventario App</h3>
          <p className="text-gray-600 mb-6">
            Aplicación web de inventario con gestión de stock, control de rutas y dashboard intuitivo.
          </p>
          <button
            onClick={() => setShowDemo(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaEye className="inline mr-2" /> Ver Demo
          </button>
        </motion.div>
      </section>

      {/* Modal Demo */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl shadow-2xl w-11/12 md:w-3/4 h-3/4 flex flex-col">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <FaTimes size={22} />
            </button>
            <iframe
              src="https://inventario-app-fr1k.vercel.app/inventario"
              title="Demo"
              className="w-full h-full rounded-b-2xl"
            ></iframe>
          </div>
        </div>
      )}

      {/* Contacto */}
      <section id="contacto" className="py-24 bg-[#E6F1FF]/60 text-center">
        <h2 className="text-3xl font-bold mb-8">Contáctame</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto flex flex-col gap-4 bg-white p-8 rounded-2xl shadow"
        >
          <input
            type="text"
            placeholder="Tu nombre"
            className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 outline-none"
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 outline-none"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Tu mensaje..."
            rows={4}
            className="border border-gray-300 rounded-lg p-3 focus:border-blue-500 outline-none"
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            required
          ></textarea>
          <button
            type="submit"
            className="py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            <FaEnvelope className="inline mr-2" /> Enviar mensaje
          </button>
        </form>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm border-t border-gray-200">
        © {new Date().getFullYear()} Jose Manaure. Todos los derechos reservados.
      </footer>
    </div>
  );
}
