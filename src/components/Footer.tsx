"use client";

import Link from "next/link";
import { Package, Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
    tienda: [
        { label: "Ropa de Bebé", href: "/tienda?categoria=ropa" },
        { label: "Juguetes Didácticos", href: "/tienda?categoria=juguetes" },
        { label: "Pañaleras", href: "/tienda?categoria=panialeras" },
        { label: "Box Pop", href: "/boxpop" },
    ],
    empresa: [
        { label: "Nosotros", href: "#nosotros" },
        { label: "Preguntas Frecuentes", href: "#faq" },
        { label: "Términos y Condiciones", href: "/terminos" },
        { label: "Política de Privacidad", href: "/privacidad" },
    ],
    ayuda: [
        { label: "Seguimiento de Pedido", href: "/seguimiento" },
        { label: "Cambios y Devoluciones", href: "/cambios" },
        { label: "Guía de Tallas", href: "/tallas" },
        { label: "Contacto", href: "#contacto" },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-text-primary text-white" id="nosotros">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {/* Brand Column */}
                    <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                <Package className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-heading text-xl font-bold">
                                BOX <span className="text-primary-light">POP</span>
                            </span>
                        </Link>
                        <p className="text-sm text-gray-400 mb-6 max-w-xs">
                            Todo lo que tu bebé necesita, seleccionado con amor y enviado a todo el Perú.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-heading font-semibold mb-4">Tienda</h4>
                        <ul className="space-y-2">
                            {footerLinks.tienda.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4">Empresa</h4>
                        <ul className="space-y-2">
                            {footerLinks.empresa.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-heading font-semibold mb-4">Ayuda</h4>
                        <ul className="space-y-2">
                            {footerLinks.ayuda.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-400 hover:text-primary-light transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-2 md:col-span-1" id="contacto">
                        <h4 className="font-heading font-semibold mb-4">Contacto</h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="https://wa.me/51999888777"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-light transition-colors"
                                >
                                    <Phone className="w-4 h-4" />
                                    +51 999 888 777
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:hola@boxpop.pe"
                                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary-light transition-colors"
                                >
                                    <Mail className="w-4 h-4" />
                                    hola@boxpop.pe
                                </a>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-gray-400">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                Lima, Perú
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Box Pop. Todos los derechos reservados.
                    </p>

                    {/* Payment Methods Icons */}
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span>Pagos:</span>
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-white/10 rounded">Yape</span>
                            <span className="px-2 py-1 bg-white/10 rounded">Plin</span>
                            <span className="px-2 py-1 bg-white/10 rounded">BCP</span>
                            <span className="px-2 py-1 bg-white/10 rounded">BBVA</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
