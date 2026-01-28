"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, categories } from "@/data/products";
import { Filter, X } from "lucide-react";

export default function TiendaPage() {
    const searchParams = useSearchParams();
    const categoryParam = searchParams.get("categoria");

    const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
    const [sortBy, setSortBy] = useState<string>("featured");
    const [showFilters, setShowFilters] = useState(false);

    const filteredProducts = useMemo(() => {
        let result = products.filter(p => p.category !== "boxpop");

        if (selectedCategory) {
            result = result.filter(p => p.category === selectedCategory);
        }

        switch (sortBy) {
            case "price-low":
                result = [...result].sort((a, b) => a.price - b.price);
                break;
            case "price-high":
                result = [...result].sort((a, b) => b.price - a.price);
                break;
            case "featured":
            default:
                result = [...result].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        }

        return result;
    }, [selectedCategory, sortBy]);

    const clearFilters = () => {
        setSelectedCategory(null);
        setSortBy("featured");
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background pt-24 pb-16">
                <div className="container">
                    {/* Page Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8"
                    >
                        <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-primary mb-2">
                            Tienda
                        </h1>
                        <p className="text-text-secondary">
                            {filteredProducts.length} productos disponibles
                        </p>
                    </motion.div>

                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Sidebar Filters - Desktop */}
                        <aside className="hidden lg:block w-64 flex-shrink-0">
                            <div className="sticky top-24 bg-surface rounded-2xl p-6 border border-border">
                                <h3 className="font-heading font-semibold text-text-primary mb-4">
                                    Categorías
                                </h3>
                                <div className="space-y-2">
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedCategory
                                                ? "bg-primary text-white"
                                                : "text-text-secondary hover:bg-background"
                                            }`}
                                    >
                                        Todos los productos
                                    </button>
                                    {categories
                                        .filter(c => c.id !== "boxpop")
                                        .map(category => (
                                            <button
                                                key={category.id}
                                                onClick={() => setSelectedCategory(category.id)}
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${selectedCategory === category.id
                                                        ? "bg-primary text-white"
                                                        : "text-text-secondary hover:bg-background"
                                                    }`}
                                            >
                                                <span>{category.icon}</span>
                                                {category.name}
                                            </button>
                                        ))}
                                </div>

                                <div className="border-t border-border mt-6 pt-6">
                                    <h3 className="font-heading font-semibold text-text-primary mb-4">
                                        Ordenar por
                                    </h3>
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="w-full px-3 py-2 bg-background rounded-lg border border-border text-sm text-text-primary focus:outline-none focus:border-primary"
                                    >
                                        <option value="featured">Destacados</option>
                                        <option value="price-low">Precio: Menor a Mayor</option>
                                        <option value="price-high">Precio: Mayor a Menor</option>
                                    </select>
                                </div>
                            </div>
                        </aside>

                        {/* Mobile Filters Button */}
                        <div className="lg:hidden flex items-center justify-between mb-4">
                            <button
                                onClick={() => setShowFilters(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-surface rounded-lg border border-border text-sm"
                            >
                                <Filter className="w-4 h-4" />
                                Filtros
                                {selectedCategory && (
                                    <span className="w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                                        1
                                    </span>
                                )}
                            </button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 bg-surface rounded-lg border border-border text-sm"
                            >
                                <option value="featured">Destacados</option>
                                <option value="price-low">Menor precio</option>
                                <option value="price-high">Mayor precio</option>
                            </select>
                        </div>

                        {/* Mobile Filters Modal */}
                        {showFilters && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="fixed inset-0 bg-black/40 z-50 lg:hidden"
                                onClick={() => setShowFilters(false)}
                            >
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: 0 }}
                                    className="absolute left-0 top-0 bottom-0 w-80 bg-surface p-6"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-heading font-semibold text-text-primary">
                                            Filtros
                                        </h3>
                                        <button onClick={() => setShowFilters(false)}>
                                            <X className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <button
                                            onClick={() => {
                                                setSelectedCategory(null);
                                                setShowFilters(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm ${!selectedCategory
                                                    ? "bg-primary text-white"
                                                    : "text-text-secondary"
                                                }`}
                                        >
                                            Todos los productos
                                        </button>
                                        {categories
                                            .filter(c => c.id !== "boxpop")
                                            .map(category => (
                                                <button
                                                    key={category.id}
                                                    onClick={() => {
                                                        setSelectedCategory(category.id);
                                                        setShowFilters(false);
                                                    }}
                                                    className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 ${selectedCategory === category.id
                                                            ? "bg-primary text-white"
                                                            : "text-text-secondary"
                                                        }`}
                                                >
                                                    <span>{category.icon}</span>
                                                    {category.name}
                                                </button>
                                            ))}
                                    </div>

                                    {selectedCategory && (
                                        <button
                                            onClick={() => {
                                                clearFilters();
                                                setShowFilters(false);
                                            }}
                                            className="mt-6 w-full btn btn-secondary text-sm"
                                        >
                                            Limpiar filtros
                                        </button>
                                    )}
                                </motion.div>
                            </motion.div>
                        )}

                        {/* Products Grid */}
                        <div className="flex-1">
                            {/* Active Filters */}
                            {selectedCategory && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex items-center gap-2 mb-6"
                                >
                                    <span className="text-sm text-text-muted">Filtros activos:</span>
                                    <button
                                        onClick={() => setSelectedCategory(null)}
                                        className="inline-flex items-center gap-1 px-3 py-1 bg-primary-light/30 text-primary rounded-full text-sm"
                                    >
                                        {categories.find(c => c.id === selectedCategory)?.name}
                                        <X className="w-3 h-3" />
                                    </button>
                                </motion.div>
                            )}

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                                    {filteredProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-16">
                                    <p className="text-text-secondary mb-4">
                                        No encontramos productos con estos filtros
                                    </p>
                                    <button
                                        onClick={clearFilters}
                                        className="btn btn-secondary"
                                    >
                                        Ver todos los productos
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <WhatsAppButton />
            </main>
            <Footer />
        </>
    );
}
