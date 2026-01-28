"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Package, Truck, Shield } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-primary-light/10 to-secondary-light/20" />

            {/* Decorative Shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-secondary-light/40 to-coral/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-primary-light/30 to-accent-dark/10 rounded-full blur-3xl" />

            <div className="container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center lg:text-left"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light/50 text-accent-dark text-sm font-medium mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-accent-dark animate-pulse" />
                            Envío a todo el Perú
                        </motion.div>

                        {/* Headline */}
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
                            Todo lo que tu{" "}
                            <span className="text-primary">bebé</span>{" "}
                            necesita en{" "}
                            <span className="relative inline-block">
                                un solo lugar
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                                    <path d="M2 10C50 2 150 2 198 10" stroke="var(--color-secondary)" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                            </span>
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg text-text-secondary mb-8 max-w-lg mx-auto lg:mx-0">
                            Productos de calidad para bebés y niños. Ropa suave, juguetes didácticos y nuestros
                            <strong className="text-primary"> Box Pop</strong>: packs curados por edad con todo lo esencial.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link href="/tienda" className="btn btn-primary">
                                Ver Colección
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/boxpop" className="btn btn-secondary">
                                <Package className="w-4 h-4" />
                                Descubrir Box Pop
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10">
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <Truck className="w-4 h-4 text-primary" />
                                <span>Envío rápido</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <Shield className="w-4 h-4 text-primary" />
                                <span>Pago seguro</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-text-secondary">
                                <Package className="w-4 h-4 text-primary" />
                                <span>Calidad garantizada</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image / Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Hero Visual */}
                            <div className="w-full aspect-square max-w-lg mx-auto rounded-3xl bg-gradient-to-br from-primary/20 via-secondary-light/40 to-accent-light/30 p-8 flex items-center justify-center">
                                {/* Product Stack Illustration */}
                                <div className="relative w-full h-full">
                                    {/* Box 1 */}
                                    <motion.div
                                        initial={{ y: 20, rotate: -5 }}
                                        animate={{ y: 0, rotate: -5 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                                    >
                                        <span className="text-6xl">👶</span>
                                    </motion.div>

                                    {/* Box 2 */}
                                    <motion.div
                                        initial={{ y: 20, rotate: 3 }}
                                        animate={{ y: 0, rotate: 3 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                        className="absolute top-1/3 right-1/4 w-36 h-36 bg-secondary-light rounded-2xl shadow-lg flex items-center justify-center"
                                    >
                                        <span className="text-5xl">🧸</span>
                                    </motion.div>

                                    {/* Box 3 */}
                                    <motion.div
                                        initial={{ y: 20, rotate: -2 }}
                                        animate={{ y: 0, rotate: -2 }}
                                        transition={{ delay: 0.7, duration: 0.5 }}
                                        className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-accent-light rounded-2xl shadow-lg flex items-center justify-center"
                                    >
                                        <span className="text-4xl">📦</span>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 right-0 w-16 h-16 bg-coral/20 rounded-2xl flex items-center justify-center"
                            >
                                <span className="text-2xl">⭐</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute bottom-10 -left-4 w-14 h-14 bg-lavender/30 rounded-xl flex items-center justify-center"
                            >
                                <span className="text-xl">🎁</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
