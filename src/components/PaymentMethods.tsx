"use client";

import { motion } from "framer-motion";

const paymentMethods = [
    {
        name: "Yape",
        description: "Pago instantáneo con Yape",
        color: "#6D28D9",
        icon: "📱",
    },
    {
        name: "Plin",
        description: "Transfiere con Plin",
        color: "#00A650",
        icon: "💳",
    },
    {
        name: "BCP",
        description: "Transferencia bancaria",
        color: "#0066B3",
        icon: "🏦",
    },
    {
        name: "BBVA",
        description: "Transferencia bancaria",
        color: "#004481",
        icon: "🏦",
    },
];

export default function PaymentMethods() {
    return (
        <section className="py-16 md:py-20 bg-background">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-primary mb-3">
                        Métodos de Pago
                    </h2>
                    <p className="text-text-secondary">
                        Paga fácil y seguro con tus métodos favoritos
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {paymentMethods.map((method, index) => (
                        <motion.div
                            key={method.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                            className="flex items-center gap-3 px-6 py-4 bg-surface rounded-xl border border-border shadow-sm"
                        >
                            <span className="text-2xl">{method.icon}</span>
                            <div>
                                <p
                                    className="font-semibold"
                                    style={{ color: method.color }}
                                >
                                    {method.name}
                                </p>
                                <p className="text-xs text-text-muted">
                                    {method.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-6 mt-10 text-sm text-text-muted"
                >
                    <span className="flex items-center gap-2">
                        🔒 Pagos 100% seguros
                    </span>
                    <span className="hidden md:flex items-center gap-2">
                        ✓ Confirmación inmediata
                    </span>
                    <span className="flex items-center gap-2">
                        💬 Soporte por WhatsApp
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
