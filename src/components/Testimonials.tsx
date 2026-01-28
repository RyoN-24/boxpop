"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "Khamrah es increíble. Proyección brutal sin ser invasivo, perfectamente balanceado.",
        name: "Ricardo M.",
        location: "Lima"
    },
    {
        text: "Servicio impecable. Llegó en 24h y el perfume exactamente como esperaba. Yara es mi nuevo signature.",
        name: "Valentina S.",
        location: "Arequipa"
    },
    {
        text: "El nivel de asesoría fue excepcional. Me ayudaron a elegir Odyssey y ahora recibo cumplidos todos los días.",
        name: "Diego L.",
        location: "Cusco"
    },
    {
        text: "Calidad premium a precio justo. El Oud Sublime es una joya, duración de 10+ horas.",
        name: "Camila R.",
        location: "Trujillo"
    },
    {
        text: "Confianza total. Todo original, empaque perfecto, seguimiento en tiempo real. Volveré sin duda.",
        name: "Andrés P.",
        location: "Piura"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 px-4 bg-brand-charcoal/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 space-y-4"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">Lo que dicen nuestros clientes</h2>
                    <p className="text-foreground/60 font-light max-w-2xl mx-auto">
                        Testimonios reales de personas que confiaron en LEO PRIVÉ.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-brand-black/40 border border-white/10 p-6 md:p-8 rounded-lg space-y-4 hover:border-accent/30 transition-colors duration-300"
                        >
                            <Quote className="w-8 h-8 text-accent/30" strokeWidth={1.5} />
                            <p className="text-foreground/80 font-light leading-relaxed text-sm md:text-base italic">
                                "{testimonial.text}"
                            </p>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-foreground font-medium text-sm">{testimonial.name}</p>
                                <p className="text-foreground/40 text-xs">{testimonial.location}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
