import { ShieldCheck, CreditCard, Truck, Users } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Originalidad garantizada",
        description: "Productos 100% auténticos y verificados."
    },
    {
        icon: CreditCard,
        title: "Pago seguro",
        description: "Transacciones protegidas y confiables."
    },
    {
        icon: Truck,
        title: "Envíos rápidos",
        description: "Seguimiento en tiempo real a todo el país."
    },
    {
        icon: Users,
        title: "Asesoría personalizada",
        description: "Expertos listos para guiar tu elección."
    }
];

export default function TrustSection() {
    return (
        <section className="py-20 px-4 bg-brand-charcoal/30 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center space-y-4 group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors duration-300">
                            <feature.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                        </div>
                        <h3 className="font-serif text-lg text-foreground">{feature.title}</h3>
                        <p className="text-sm text-foreground/60 font-light max-w-[200px]">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
