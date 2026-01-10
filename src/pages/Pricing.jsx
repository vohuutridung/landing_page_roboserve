import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Info, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const formatCurrency = (value) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
    };

    const rentalPlans = [
        {
            name: "Basic",
            monthlyPrice: 2000000,
            desc: "Essential features for small restaurants.",
            features: ["1 Service Robot", "Remote Support (Hỗ trợ từ xa)", "Standard Navigation", "8 Hours Battery"]
        },
        {
            name: "Standard",
            monthlyPrice: 2800000,
            popular: true,
            desc: "Perfect balance of performance and support.",
            features: ["1 Service Robot", "Periodic Maintenance (Bảo trì định kỳ)", "Priority Support", "Advanced AI Navigation", "12 Hours Battery"]
        },
        {
            name: "Premium",
            monthlyPrice: 3500000,
            desc: "Maximum uptime and white-glove service.",
            features: ["1 Service Robot", "Onsite Maintenance (Bảo trì tận nơi)", "Custom Integration", "24/7 Dedicated Support", "Unlimited Warranty"]
        }
    ];

    return (
        <div className="pb-20">
            <section className="pt-12 pb-20 container mx-auto px-4 text-center">
                <Badge className="mb-4 bg-brand-blue/10 text-brand-blue">Pricing</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Flexible Investment Options</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                    Choose between our flexible rental plans or own the technology forever.
                </p>

                {/* Billing Cycle Toggle */}
                <div className="flex items-center justify-center gap-4 mb-16">
                    <span className={`text-lg transition-colors ${!isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}`}>Monthly Billing</span>
                    <Switch
                        checked={isYearly}
                        onCheckedChange={setIsYearly}
                        className="data-[state=checked]:bg-brand-purple"
                    />
                    <span className={`text-lg transition-colors ${isYearly ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                        Yearly Billing <span className="text-xs ml-1 text-green-500 font-bold bg-green-500/10 px-2 py-1 rounded-full">Save 20%</span>
                    </span>
                </div>

                {/* Section A: Rental Plans */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 cursor-default">
                    {rentalPlans.map((plan, i) => {
                        const price = isYearly ? plan.monthlyPrice * 0.8 : plan.monthlyPrice;

                        return (
                            <motion.div
                                key={i}
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`relative rounded-3xl p-8 border flex flex-col text-left h-full ${plan.popular
                                        ? "bg-secondary/20 border-brand-blue ring-1 ring-brand-blue/50 shadow-brand-blue/20 shadow-2xl"
                                        : "bg-background border-border/60 hover:border-border"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center gap-1">
                                        <Zap className="w-4 h-4" fill="currentColor" /> Most Popular
                                    </div>
                                )}

                                <div className="mb-6">
                                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-sm text-muted-foreground min-h-[40px]">{plan.desc}</p>
                                </div>

                                <div className="mb-8">
                                    <div className="flex items-baseline gap-1">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={price}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="text-3xl lg:text-4xl font-extrabold text-brand-purple"
                                            >
                                                {formatCurrency(price)}
                                            </motion.span>
                                        </AnimatePresence>
                                        <span className="text-muted-foreground">/mo</span>
                                    </div>
                                    {isYearly && <p className="text-xs text-green-500 font-medium mt-2">Billed yearly (Save {formatCurrency(plan.monthlyPrice * 12 * 0.2)}/yr)</p>}
                                </div>

                                <Button className={`w-full mb-8 rounded-full h-12 text-base font-medium ${plan.popular ? "bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 shadow-lg shadow-brand-blue/20" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                                    Choose {plan.name}
                                </Button>

                                <div className="space-y-4 flex-grow">
                                    {plan.features.map((f, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <div className="mt-0.5 rounded-full bg-green-500/10 p-1">
                                                <Check className="w-3 h-3 text-green-500" />
                                            </div>
                                            <span className="text-sm text-foreground/80 group flex items-center gap-1">
                                                {f}
                                                {f.includes("Onsite") && (
                                                    <span className="inline-block relative group/tooltip">
                                                        <Info className="w-3.5 h-3.5 text-muted-foreground hover:text-foreground cursor-help" />
                                                    </span>
                                                )}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Section B: One-time Purchase */}
                <section className="max-w-4xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-950 p-1 md:p-12 relative overflow-hidden text-white"
                    >
                        {/* Background glow effects */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 p-6">
                            <div className="text-left flex-1">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/5 text-xs font-semibold mb-4">
                                    <ShieldCheck className="w-3 h-3" /> Lifetime Ownership
                                </div>
                                <h2 className="text-3xl font-bold mb-4">Own the Robot Forever</h2>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Make a one-time investment and enjoy full ownership of the hardware. Includes 1 Year of standard warranty and software updates.
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {["Full Hardware Ownership", "1-Year Warranty Included", "Optional Maintenance Plans", "No Monthly Rental Fees"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                                            <Check className="w-4 h-4 text-brand-blue" /> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="text-center md:text-right min-w-[280px]">
                                <p className="text-sm text-gray-400 mb-1">One-time payment</p>
                                <div className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">80.000.000 ₫</div>
                                <Button size="lg" className="w-full h-12 rounded-full bg-white text-black hover:bg-gray-200 border-none font-bold">
                                    Contact Sales
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* FAQ - (Kept mostly same but updated currency context if needed) */}
                <section className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full text-left">
                        {[
                            { q: "Is a deposit required for rental plans?", a: "Yes, a refundable usage deposit of 2 months rent is required for all new rental contracts." },
                            { q: "What does 'Periodic Maintenance' cover?", a: "Our team visits your location once every 3 months to clean sensors, check battery health, and update firmware." },
                            { q: "Can I buy the robot after renting it?", a: "Absolutely. We offer a rent-to-own program where 50% of your rental payments go towards the purchase price." },
                            { q: "Do you ship to all of Vietnam?", a: "Currently we offer full support in HCMC, Hanoi, and Da Nang. Other provinces may incur additional travel fees for support." }
                        ].map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                                <AccordionTrigger className="text-lg text-left">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </section>
            </section>
        </div>
    );
};

export default Pricing;
