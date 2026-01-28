"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

export default function WhatsAppButton() {
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "51999888777";
    const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los productos de Box Pop 🍼");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, x: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.9, x: 10 }}
                        className="absolute bottom-full right-0 mb-3 w-64 p-4 bg-white rounded-2xl shadow-lg border border-border"
                    >
                        <button
                            onClick={() => setShowTooltip(false)}
                            className="absolute top-2 right-2 p-1 text-text-muted hover:text-text-primary"
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <p className="text-sm text-text-primary font-medium mb-1">
                            ¿Necesitas ayuda?
                        </p>
                        <p className="text-xs text-text-secondary mb-3">
                            Escríbenos por WhatsApp y te ayudamos a elegir lo mejor para tu bebé
                        </p>
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center py-2 px-4 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:bg-[#20BD5A] transition-colors"
                        >
                            Iniciar chat
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setShowTooltip(!showTooltip)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center"
                aria-label="WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </motion.button>

            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
        </div>
    );
}
