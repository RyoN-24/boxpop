"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
                    />

                    {/* Cart Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-surface shadow-xl z-[70] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-border">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-primary" />
                                <h2 className="font-heading text-lg font-semibold text-text-primary">
                                    Tu Carrito ({totalItems})
                                </h2>
                            </div>
                            <button
                                onClick={closeCart}
                                className="p-2 rounded-lg hover:bg-background transition-colors"
                                aria-label="Cerrar carrito"
                            >
                                <X className="w-5 h-5 text-text-secondary" />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-4">
                            {items.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-center">
                                    <div className="w-20 h-20 rounded-full bg-background flex items-center justify-center mb-4">
                                        <ShoppingBag className="w-10 h-10 text-text-muted" />
                                    </div>
                                    <p className="text-text-secondary font-medium mb-2">Tu carrito está vacío</p>
                                    <p className="text-text-muted text-sm">¡Agrega productos para empezar!</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, x: -100 }}
                                            className="flex gap-4 p-3 bg-background rounded-xl"
                                        >
                                            {/* Product Image Placeholder */}
                                            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary-light/30 to-secondary-light/30 flex items-center justify-center flex-shrink-0">
                                                <span className="text-2xl">📦</span>
                                            </div>

                                            {/* Product Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-medium text-text-primary text-sm line-clamp-2">
                                                    {item.name}
                                                </h3>
                                                {item.ageRange && (
                                                    <p className="text-xs text-text-muted mt-0.5">{item.ageRange}</p>
                                                )}
                                                <p className="font-semibold text-primary mt-1">
                                                    S/ {item.price.toFixed(2)}
                                                </p>

                                                {/* Quantity Controls */}
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </button>
                                                        <span className="text-sm font-medium w-6 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="w-7 h-7 rounded-lg bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeItem(item.id)}
                                                        className="text-xs text-text-muted hover:text-red-500 transition-colors"
                                                    >
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        {items.length > 0 && (
                            <div className="border-t border-border p-4 space-y-4">
                                {/* Total */}
                                <div className="flex items-center justify-between">
                                    <span className="text-text-secondary">Subtotal</span>
                                    <span className="font-heading text-xl font-bold text-text-primary">
                                        S/ {totalPrice.toFixed(2)}
                                    </span>
                                </div>

                                {/* Checkout Button */}
                                <Link
                                    href="/checkout"
                                    onClick={closeCart}
                                    className="btn btn-primary w-full"
                                >
                                    Ir al Checkout
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                {/* Continue Shopping */}
                                <button
                                    onClick={closeCart}
                                    className="w-full text-center text-sm text-text-secondary hover:text-primary transition-colors"
                                >
                                    Continuar comprando
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
