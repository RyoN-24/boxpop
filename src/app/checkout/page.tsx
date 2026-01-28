"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { ArrowLeft, Check, Truck, ShieldCheck, CreditCard, Smartphone, Building2, AlertCircle } from "lucide-react";

type PaymentMethod = "yape" | "plin" | "bcp" | "bbva";

const paymentOptions: { id: PaymentMethod; name: string; icon: React.ReactNode; color: string; instructions: string }[] = [
    {
        id: "yape",
        name: "Yape",
        icon: <Smartphone className="w-5 h-5" />,
        color: "#6D28D9",
        instructions: "Te enviaremos el número Yape por WhatsApp para completar el pago"
    },
    {
        id: "plin",
        name: "Plin",
        icon: <Smartphone className="w-5 h-5" />,
        color: "#00A650",
        instructions: "Te enviaremos el número Plin por WhatsApp para completar el pago"
    },
    {
        id: "bcp",
        name: "Transferencia BCP",
        icon: <Building2 className="w-5 h-5" />,
        color: "#0066B3",
        instructions: "Te enviaremos los datos de la cuenta BCP por correo"
    },
    {
        id: "bbva",
        name: "Transferencia BBVA",
        icon: <Building2 className="w-5 h-5" />,
        color: "#004481",
        instructions: "Te enviaremos los datos de la cuenta BBVA por correo"
    },
];

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const [selectedPayment, setSelectedPayment] = useState<PaymentMethod | null>(null);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        direccion: "",
        distrito: "",
        ciudad: "",
        referencia: "",
        notaRegalo: "",
        esRegalo: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const shippingCost = 15;
    const freeShippingThreshold = 150;
    const isFreeShipping = totalPrice >= freeShippingThreshold;
    const finalTotal = totalPrice + (isFreeShipping ? 0 : shippingCost);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedPayment) return;

        setIsSubmitting(true);

        // Simulate order processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        setOrderComplete(true);
        clearCart();
        setIsSubmitting(false);
    };

    // Order Complete Screen
    if (orderComplete) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-background pt-24 pb-16">
                    <div className="container max-w-lg">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-surface rounded-3xl p-8 text-center shadow-lg"
                        >
                            <div className="w-20 h-20 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-accent-dark" />
                            </div>

                            <h1 className="font-heading text-2xl font-bold text-text-primary mb-2">
                                ¡Pedido Recibido!
                            </h1>

                            <p className="text-text-secondary mb-6">
                                Gracias por tu compra. Te contactaremos pronto por WhatsApp para
                                confirmar tu pago y coordinar el envío.
                            </p>

                            <div className="bg-background rounded-xl p-4 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <AlertCircle className="w-5 h-5 text-primary" />
                                    <span className="text-text-secondary">
                                        Revisa tu WhatsApp y correo para las instrucciones de pago
                                    </span>
                                </div>
                            </div>

                            <Link href="/" className="btn btn-primary">
                                Volver al Inicio
                            </Link>
                        </motion.div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    // Empty Cart
    if (items.length === 0 && !orderComplete) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-background pt-24 pb-16">
                    <div className="container max-w-lg">
                        <div className="bg-surface rounded-3xl p-8 text-center">
                            <h1 className="font-heading text-2xl font-bold text-text-primary mb-4">
                                Tu carrito está vacío
                            </h1>
                            <p className="text-text-secondary mb-6">
                                Agrega productos para continuar con tu compra
                            </p>
                            <Link href="/tienda" className="btn btn-primary">
                                Ir a la Tienda
                            </Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-24 pb-16">
                <div className="container">
                    {/* Back Link */}
                    <Link
                        href="/tienda"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-primary mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Continuar comprando
                    </Link>

                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Form Section */}
                        <div className="lg:col-span-3">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Contact Info */}
                                <div className="bg-surface rounded-2xl p-6 border border-border">
                                    <h2 className="font-heading text-lg font-semibold text-text-primary mb-4">
                                        Información de Contacto
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                required
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Email *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Teléfono / WhatsApp *
                                            </label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                required
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="999 888 777"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Shipping Address */}
                                <div className="bg-surface rounded-2xl p-6 border border-border">
                                    <h2 className="font-heading text-lg font-semibold text-text-primary mb-4">
                                        Dirección de Envío
                                    </h2>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="md:col-span-2">
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Dirección *
                                            </label>
                                            <input
                                                type="text"
                                                name="direccion"
                                                required
                                                value={formData.direccion}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Calle, número, interior"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Distrito *
                                            </label>
                                            <input
                                                type="text"
                                                name="distrito"
                                                required
                                                value={formData.distrito}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Miraflores"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Ciudad *
                                            </label>
                                            <input
                                                type="text"
                                                name="ciudad"
                                                required
                                                value={formData.ciudad}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Lima"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Referencia
                                            </label>
                                            <input
                                                type="text"
                                                name="referencia"
                                                value={formData.referencia}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors"
                                                placeholder="Cerca de..., frente a..."
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Gift Option */}
                                <div className="bg-surface rounded-2xl p-6 border border-border">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="esRegalo"
                                            checked={formData.esRegalo}
                                            onChange={handleInputChange}
                                            className="mt-1 w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                        />
                                        <div>
                                            <span className="font-medium text-text-primary">Es un regalo 🎁</span>
                                            <p className="text-sm text-text-secondary">
                                                Incluiremos empaque especial sin precios
                                            </p>
                                        </div>
                                    </label>

                                    {formData.esRegalo && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            className="mt-4"
                                        >
                                            <label className="block text-sm text-text-secondary mb-1">
                                                Nota para el regalo (opcional)
                                            </label>
                                            <textarea
                                                name="notaRegalo"
                                                value={formData.notaRegalo}
                                                onChange={handleInputChange}
                                                rows={3}
                                                className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:outline-none transition-colors resize-none"
                                                placeholder="Escribe tu mensaje..."
                                            />
                                        </motion.div>
                                    )}
                                </div>

                                {/* Payment Method */}
                                <div className="bg-surface rounded-2xl p-6 border border-border">
                                    <h2 className="font-heading text-lg font-semibold text-text-primary mb-4 flex items-center gap-2">
                                        <CreditCard className="w-5 h-5" />
                                        Método de Pago
                                    </h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {paymentOptions.map(option => (
                                            <button
                                                key={option.id}
                                                type="button"
                                                onClick={() => setSelectedPayment(option.id)}
                                                className={`p-4 rounded-xl border-2 transition-all text-left ${selectedPayment === option.id
                                                        ? "border-primary bg-primary-light/10"
                                                        : "border-border hover:border-primary/50"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2 mb-1" style={{ color: option.color }}>
                                                    {option.icon}
                                                    <span className="font-semibold">{option.name}</span>
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    {selectedPayment && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="mt-4 p-4 bg-background rounded-xl"
                                        >
                                            <p className="text-sm text-text-secondary">
                                                {paymentOptions.find(o => o.id === selectedPayment)?.instructions}
                                            </p>
                                        </motion.div>
                                    )}
                                </div>

                                {/* Submit Button - Mobile */}
                                <div className="lg:hidden">
                                    <button
                                        type="submit"
                                        disabled={!selectedPayment || isSubmitting}
                                        className="w-full btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? "Procesando..." : `Confirmar Pedido - S/ ${finalTotal.toFixed(2)}`}
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-2">
                            <div className="sticky top-24 bg-surface rounded-2xl p-6 border border-border">
                                <h2 className="font-heading text-lg font-semibold text-text-primary mb-4">
                                    Resumen del Pedido
                                </h2>

                                {/* Items */}
                                <div className="space-y-3 mb-6">
                                    {items.map(item => (
                                        <div key={item.id} className="flex gap-3">
                                            <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-light/30 to-secondary-light/30 flex items-center justify-center flex-shrink-0">
                                                <span className="text-xl">📦</span>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-sm font-medium text-text-primary line-clamp-1">
                                                    {item.name}
                                                </h4>
                                                <p className="text-xs text-text-muted">
                                                    Cantidad: {item.quantity}
                                                </p>
                                                <p className="text-sm font-semibold text-primary">
                                                    S/ {(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Totals */}
                                <div className="border-t border-border pt-4 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Subtotal</span>
                                        <span className="text-text-primary">S/ {totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-secondary">Envío</span>
                                        {isFreeShipping ? (
                                            <span className="text-accent-dark font-medium">¡Gratis!</span>
                                        ) : (
                                            <span className="text-text-primary">S/ {shippingCost.toFixed(2)}</span>
                                        )}
                                    </div>
                                    {!isFreeShipping && (
                                        <p className="text-xs text-text-muted">
                                            ¡Agrega S/ {(freeShippingThreshold - totalPrice).toFixed(2)} más para envío gratis!
                                        </p>
                                    )}
                                    <div className="flex justify-between pt-2 border-t border-border">
                                        <span className="font-semibold text-text-primary">Total</span>
                                        <span className="font-heading text-xl font-bold text-text-primary">
                                            S/ {finalTotal.toFixed(2)}
                                        </span>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-6 pt-4 border-t border-border space-y-2">
                                    <div className="flex items-center gap-2 text-xs text-text-muted">
                                        <ShieldCheck className="w-4 h-4" />
                                        Pago 100% seguro
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-text-muted">
                                        <Truck className="w-4 h-4" />
                                        Envío a todo el Perú
                                    </div>
                                </div>

                                {/* Submit Button - Desktop */}
                                <button
                                    type="submit"
                                    form="checkout-form"
                                    onClick={handleSubmit}
                                    disabled={!selectedPayment || isSubmitting}
                                    className="hidden lg:flex w-full mt-6 btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? "Procesando..." : "Confirmar Pedido"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
