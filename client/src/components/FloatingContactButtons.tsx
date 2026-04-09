import { MessageCircle, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <motion.a
        href="https://wa.me/558533076262"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.3)] border border-white/10 relative group"
        title="WhatsApp Vendas: (85) 3307-6262"
        aria-label="Contato via WhatsApp"
      >
        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <MessageCircle className="w-8 h-8 fill-white/10" />
      </motion.a>
      
      <motion.a
        href="https://instagram.com/solucaosistemas"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="w-16 h-16 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(253,29,29,0.3)] border border-white/10 relative group"
        title="Instagram: @solucaosistemas"
        aria-label="Contato via Instagram"
      >
        <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        <Instagram className="w-8 h-8" />
      </motion.a>
    </div>
  );
}
