"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles, Sun, Moon, Volume2 } from "lucide-react";

type Step = 1 | 2 | 3;

interface Answers {
    profile: string;
    occasion: string;
    intensity: string;
}

const scents = {
    odyssey: { name: "Odyssey Mandarinsky", profile: ["fresco"], occasion: ["dia", "todo"], intensity: ["media", "alta"] },
    khamrah: { name: "Khamrah", profile: ["dulce", "intenso"], occasion: ["noche", "todo"], intensity: ["alta"] },
    qahwa: { name: "Khamrah Qahwa", profile: ["intenso"], occasion: ["noche"], intensity: ["alta"] },
    yara: { name: "Yara", profile: ["dulce"], occasion: ["dia", "noche"], intensity: ["suave", "media"] },
    eclaire: { name: "Eclaire", profile: ["dulce"], occasion: ["dia"], intensity: ["suave", "media"] },
    oud: { name: "Bade'e Al Oud Sublime", profile: ["intenso"], occasion: ["noche"], intensity: ["alta"] },
};

export default function ScentQuiz() {
    const [step, setStep] = useState<Step>(1);
    const [answers, setAnswers] = useState<Answers>({
        profile: "",
        occasion: "",
        intensity: "",
    });
    const [result, setResult] = useState<string[]>([]);

    const handleAnswer = (key: keyof Answers, value: string) => {
        const newAnswers = { ...answers, [key]: value };
        setAnswers(newAnswers);

        if (step === 3) {
            // Calculate recommendation
            const matches = Object.values(scents).filter((scent) => {
                return (
                    scent.profile.includes(newAnswers.profile) &&
                    scent.occasion.includes(newAnswers.occasion) &&
                    scent.intensity.includes(newAnswers.intensity)
                );
            });
            setResult(matches.length > 0 ? matches.map((m) => m.name) : ["Khamrah", "Odyssey Mandarinsky"]);
        } else {
            setStep((step + 1) as Step);
        }
    };

    const restart = () => {
        setStep(1);
        setAnswers({ profile: "", occasion: "", intensity: "" });
        setResult([]);
    };

    const whatsappMessage = `Hola, hice el quiz y busco: ${answers.profile}, para ${answers.occasion}, nivel ${answers.intensity}. ¿Pueden ayudarme?`;
    const whatsappUrl = `https://wa.me/51916401098?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <section className="py-24 px-4 bg-gradient-to-b from-brand-black to-brand-charcoal relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-30" />

            <div className="max-w-3xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-4">
                        <Sparkles className="w-4 h-4" />
                        Quiz Interactivo
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-foreground">Encuentra tu fragancia</h2>
                    <p className="text-foreground/60 font-light">3 preguntas simples, recomendación personalizada.</p>
                </motion.div>

                {/* Quiz or Result */}
                <div className="bg-brand-charcoal/50 border border-white/10 rounded-lg p-8 md:p-12 backdrop-blur-sm">
                    <AnimatePresence mode="wait">
                        {result.length === 0 ? (
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-8"
                            >
                                {/* Progress */}
                                <div className="flex gap-2 mb-8">
                                    {[1, 2, 3].map((s) => (
                                        <div
                                            key={s}
                                            className={`h-1 flex-1 rounded-full ${s <= step ? "bg-accent" : "bg-white/10"}`}
                                        />
                                    ))}
                                </div>

                                {/* Question */}
                                <div className="space-y-6">
                                    {step === 1 && (
                                        <>
                                            <h3 className="font-serif text-2xl text-foreground">¿Qué perfil buscas?</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <QuizOption
                                                    icon={<Sun className="w-6 h-6" />}
                                                    label="Fresco"
                                                    onClick={() => handleAnswer("profile", "fresco")}
                                                />
                                                <QuizOption
                                                    icon={<Sparkles className="w-6 h-6" />}
                                                    label="Dulce"
                                                    onClick={() => handleAnswer("profile", "dulce")}
                                                />
                                                <QuizOption
                                                    icon={<Volume2 className="w-6 h-6" />}
                                                    label="Intenso"
                                                    onClick={() => handleAnswer("profile", "intenso")}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {step === 2 && (
                                        <>
                                            <h3 className="font-serif text-2xl text-foreground">¿Para qué ocasión?</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <QuizOption
                                                    icon={<Sun className="w-6 h-6" />}
                                                    label="Día"
                                                    onClick={() => handleAnswer("occasion", "dia")}
                                                />
                                                <QuizOption
                                                    icon={<Moon className="w-6 h-6" />}
                                                    label="Noche"
                                                    onClick={() => handleAnswer("occasion", "noche")}
                                                />
                                                <QuizOption
                                                    icon={<Sparkles className="w-6 h-6" />}
                                                    label="Todo uso"
                                                    onClick={() => handleAnswer("occasion", "todo")}
                                                />
                                            </div>
                                        </>
                                    )}

                                    {step === 3 && (
                                        <>
                                            <h3 className="font-serif text-2xl text-foreground">¿Nivel de presencia?</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                <QuizOption label="Suave" onClick={() => handleAnswer("intensity", "suave")} />
                                                <QuizOption label="Media" onClick={() => handleAnswer("intensity", "media")} />
                                                <QuizOption label="Alta" onClick={() => handleAnswer("intensity", "alta")} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center space-y-8"
                            >
                                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                                    <Sparkles className="w-8 h-8 text-accent" />
                                </div>
                                <div>
                                    <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Tu recomendación</h3>
                                    <div className="space-y-2">
                                        {result.map((name, i) => (
                                            <p key={i} className="text-lg text-accent font-medium">
                                                {name}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <a
                                        href={whatsappUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-4 rounded-sm font-medium uppercase tracking-wider hover:bg-white transition-colors"
                                    >
                                        Consultar por WhatsApp
                                        <ChevronRight className="w-4 h-4" />
                                    </a>
                                    <button
                                        onClick={restart}
                                        className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                                    >
                                        Reiniciar quiz
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}

function QuizOption({
    icon,
    label,
    onClick,
}: {
    icon?: React.ReactNode;
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className="flex flex-col items-center gap-3 p-6 bg-brand-black/50 border border-white/10 rounded-lg hover:border-accent/50 hover:bg-accent/5 transition-all group"
        >
            {icon && <div className="text-accent group-hover:scale-110 transition-transform">{icon}</div>}
            <span className="font-medium text-foreground">{label}</span>
        </button>
    );
}
