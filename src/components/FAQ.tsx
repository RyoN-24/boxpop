"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "¿Cómo garantizan la autenticidad?",
        answer: "Trabajamos directamente con distribuidores oficiales. Cada producto incluye código de autenticidad verificable. Garantía de devolución 100% si detectas alguna irregularidad."
    },
    {
        question: "¿Cuánto demora el envío?",
        answer: "Lima Metropolitana: 24-48h. Provincias: 2-4 días hábiles. Todos los envíos incluyen tracking en tiempo real y empaque discreto premium."
    },
    {
        question: "¿Cuánto dura un perfume de alta gama?",
        answer: "Depende de la concentración y familia olfativa. Los perfumes de nuestra colección (EDP/Extrait) duran entre 6-12+ horas en piel, con proyección notable las primeras 4-6 horas."
    },
    {
        question: "¿Aceptan cambios o devoluciones?",
        answer: "Sí. Si el producto llega sellado y en perfecto estado, aceptamos cambios dentro de las primeras 24h por un perfume diferente de igual o mayor valor."
    },
    {
        question: "¿Puedo probar antes de comprar?",
        answer: "Ofrecemos asesoría personalizada vía WhatsApp donde describimos las notas y perfiles de cada fragancia. Lamentablemente no ofrecemos muestras físicas para mantener la exclusividad del servicio."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-4"
                >
                    <h2 className="font-serif text-3xl md:text-4xl text-foreground">Preguntas frecuentes</h2>
                    <p className="text-foreground/60 font-light">Todo lo que necesitas saber.</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="border border-white/10 rounded-lg overflow-hidden bg-brand-charcoal/20 hover:border-accent/30 transition-colors"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                            >
                                <span className="font-medium text-foreground group-hover:text-accent transition-colors pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-accent transition-transform flex-shrink-0 ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                    strokeWidth={2}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 md:px-6 pb-5 md:pb-6 text-foreground/70 font-light leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
