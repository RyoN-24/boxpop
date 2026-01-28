"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
    const whatsappUrl = "https://wa.me/51916401098?text=Hola, quiero hablar con un asesor de LEO PRIVÉ.";

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-brand-black to-brand-charcoal relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground">
                        ¿Listo para encontrar tu fragancia?
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/70 font-light">
                        Habla con un asesor. Sin presión, solo conocimiento.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-accent text-background px-8 py-4 rounded-sm font-medium uppercase tracking-wider hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20"
                    >
                        <MessageCircle className="w-5 h-5" />
                        Contactar por WhatsApp
                    </a>
                </motion.div>

                <p className="text-xs text-foreground/40 font-mono pt-4">
                    Respuesta promedio: 5 minutos · Lunes a sábado: 10am–8pm
                </p>
            </div>
        </section>
    );
}
