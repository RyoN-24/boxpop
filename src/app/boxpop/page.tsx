"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoxPopSection from "@/components/BoxPopSection";
import Benefits from "@/components/Benefits";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Gift, Package, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BoxPopPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-24">
                {/* Hero Section */}
                <section className="py-16 bg-gradient-to-br from-secondary-light/30 via-background to-coral/10">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-medium mb-6">
                                <Gift className="w-4 h-4" />
                                Producto Exclusivo Box Pop
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl font-bold text-text-primary mb-4">
                                Boxes Curados para cada{" "}
                                <span className="text-primary">Etapa</span>
                            </h1>

                            <p className="text-lg text-text-secondary mb-8">
                                Sabemos lo difícil que es elegir los productos correctos. Por eso creamos boxes
                                con todo lo que tu bebé necesita según su edad, listos para regalar o para ti.
                            </p>

                            {/* Value Props */}
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                <div className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-accent-dark" />
                                    <span>Ahorra hasta S/80</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-accent-dark" />
                                    <span>Productos seleccionados</span>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-accent-dark" />
                                    <span>Empaque de regalo</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* All Boxes */}
                <BoxPopSection showAll />

                {/* How it Works */}
                <section className="py-16 bg-surface">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-12"
                        >
                            <h2 className="font-heading text-3xl font-bold text-text-primary mb-4">
                                ¿Cómo funciona?
                            </h2>
                            <p className="text-text-secondary">
                                Recibir tu Box Pop es muy fácil
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    step: "1",
                                    title: "Elige el Box",
                                    description: "Selecciona según la edad de tu bebé o la ocasión"
                                },
                                {
                                    step: "2",
                                    title: "Agrega al Carrito",
                                    description: "Revisa el contenido y confirma tu pedido"
                                },
                                {
                                    step: "3",
                                    title: "Recibe en Casa",
                                    description: "Enviamos a todo el Perú con empaque especial"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="w-12 h-12 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center mx-auto mb-4">
                                        {item.step}
                                    </div>
                                    <h3 className="font-heading font-semibold text-text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Gift Section */}
                <section className="py-16 bg-background">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-gradient-to-r from-lavender/30 to-peach/30 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <Package className="w-16 h-16 text-primary mx-auto mb-4" />
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
                                ¿Es un regalo?
                            </h2>
                            <p className="text-text-secondary mb-6 max-w-lg mx-auto">
                                Todos nuestros Box Pop vienen en empaque especial para regalo.
                                Puedes agregar una nota personalizada al checkout.
                            </p>
                            <Link href="#boxes" className="btn btn-primary">
                                Ver opciones de regalo
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </section>

                <Benefits />
                <WhatsAppButton />
            </main>
            <Footer />
        </>
    );
}
