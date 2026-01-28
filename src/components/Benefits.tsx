"use client";

import { motion } from "framer-motion";
import { Truck, Shield, Headphones, RefreshCw } from "lucide-react";

const benefits = [
    {
        icon: Truck,
        title: "Envío Nacional",
        description: "Llegamos a todo el Perú. Lima en 24-48h, provincias en 3-5 días.",
        color: "primary",
    },
    {
        icon: Shield,
        title: "Productos Certificados",
        description: "Solo trabajamos con materiales seguros y certificados para bebés.",
        color: "accent",
    },
    {
        icon: Headphones,
        title: "Atención Personalizada",
        description: "Te ayudamos por WhatsApp a elegir lo mejor para tu bebé.",
        color: "secondary",
    },
    {
        icon: RefreshCw,
        title: "Cambios Fáciles",
        description: "Si no es la talla correcta, te lo cambiamos sin complicaciones.",
        color: "coral",
    },
];

const colorClasses: Record<string, { bg: string; icon: string }> = {
    primary: { bg: "bg-primary-light/30", icon: "text-primary" },
    accent: { bg: "bg-accent-light/30", icon: "text-accent-dark" },
    secondary: { bg: "bg-secondary-light/30", icon: "text-secondary-dark" },
    coral: { bg: "bg-coral/20", icon: "text-coral" },
};

export default function Benefits() {
    return (
        <section className="py-16 md:py-24 bg-surface">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-4">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto">
                        En Box Pop nos importa tu tranquilidad tanto como el bienestar de tu bebé
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => {
                        const colors = colorClasses[benefit.color];
                        const Icon = benefit.icon;

                        return (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.bg} mb-4`}
                                >
                                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                                </motion.div>

                                {/* Content */}
                                <h3 className="font-heading text-lg font-semibold text-text-primary mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    {benefit.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
