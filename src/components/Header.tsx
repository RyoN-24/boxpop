"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Package } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Cart from "./Cart";

const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/tienda", label: "Tienda" },
    { href: "/boxpop", label: "Box Pop" },
    { href: "#nosotros", label: "Nosotros" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { totalItems, openCart } = useCart();

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border">
                <div className="container">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-heading text-xl font-bold text-text-primary">
                                BOX <span className="text-primary">POP</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-text-secondary hover:text-primary transition-colors font-medium text-sm"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="flex items-center gap-3">
                            {/* Cart Button */}
                            <button
                                onClick={openCart}
                                className="relative p-2.5 rounded-xl bg-background hover:bg-primary-light/20 transition-colors"
                                aria-label="Abrir carrito"
                            >
                                <ShoppingBag className="w-5 h-5 text-text-primary" />
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-text-primary text-xs font-bold rounded-full flex items-center justify-center"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2.5 rounded-xl bg-background hover:bg-primary-light/20 transition-colors"
                                aria-label="Menú"
                            >
                                {mobileMenuOpen ? (
                                    <X className="w-5 h-5 text-text-primary" />
                                ) : (
                                    <Menu className="w-5 h-5 text-text-primary" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-surface border-t border-border overflow-hidden"
                        >
                            <nav className="container py-4 flex flex-col gap-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="py-3 px-4 rounded-lg text-text-secondary hover:text-primary hover:bg-background transition-colors font-medium"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>

            {/* Cart Drawer */}
            <Cart />
        </>
    );
}
