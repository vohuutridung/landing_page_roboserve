import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="flex flex-col gap-24 pb-20 overflow-hidden">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 px-4">
                {/* Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none z-[-1]">
                    <div className="absolute top-20 left-[10%] w-72 h-72 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute top-40 right-[10%] w-96 h-96 bg-brand-purple/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto max-w-6xl text-center">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="flex flex-col items-center gap-8"
                    >
                        <motion.div variants={item}>
                            <Badge variant="secondary" className="px-4 py-2 rounded-full text-brand-purple bg-brand-purple/10 border-brand-purple/20 mb-6">
                                <span className="mr-2">✨</span> Transforming Restaurant Service
                            </Badge>
                        </motion.div>

                        <motion.h1
                            variants={item}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-muted-foreground max-w-4xl"
                        >
                            The Future of Dining <br className="hidden md:block" />
                            <span className="text-brand-blue">Service is Here</span>
                        </motion.h1>

                        <motion.p
                            variants={item}
                            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                        >
                            Empower your restaurant with Roboserve's autonomous robots. Increase efficiency, reduce costs, and delight customers with futuristic service.
                        </motion.p>

                        <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 mt-4">
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-brand-blue to-brand-purple shadow-lg shadow-brand-blue/25 hover:shadow-brand-blue/40 transition-all hover:scale-105">
                                Get Started for Free <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 hover:bg-secondary transition-all">
                                View Demo
                            </Button>
                        </motion.div>

                        {/* Dashboard Mockup Placeholder */}
                        <motion.div
                            variants={item}
                            className="mt-16 w-full max-w-5xl aspect-video rounded-3xl border border-white/10 bg-black shadow-2xl relative overflow-hidden"
                        >
                            {/* Fake browser header */}
                            <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2 z-10">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>

                            {/* Video */}
                            <video
                                src="/dashboard-demo.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover pt-12"
                            />
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="container mx-auto px-4">
                <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">Trusted by 500+ Innovative Restaurants</p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos */}
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="h-8 md:h-10 w-24 md:w-32 bg-foreground/20 rounded mask-logo animate-pulse" />
                    ))}
                </div>
            </section>

            {/* Value Proposition */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Zap,
                            title: "Lightning Fast Speed",
                            desc: "Serve tables 2x faster than traditional methods with consistent pace and zero fatigue."
                        },
                        {
                            icon: Shield,
                            title: "100% Reliability",
                            desc: "Powered by advanced AI navigation that never gets lost, spills drinks, or calls in sick."
                        },
                        {
                            icon: TrendingUp,
                            title: "Cut Costs by 40%",
                            desc: "Drastically reduce labor costs and turnover issues while maintaining premium service quality."
                        }
                    ].map((feature, i) => (
                        <Card key={i} className="bg-gradient-to-b from-card to-card/50 border-border/50 backdrop-blur-sm hover:border-brand-blue/50 transition-colors group">
                            <CardContent className="p-8">
                                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                                    <feature.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="container mx-auto px-4 mb-20">
                <div className="rounded-3xl bg-gradient-to-r from-brand-blue to-brand-purple p-[1px]">
                    <div className="rounded-[23px] bg-background/95 backdrop-blur-xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-brand-blue/10 to-brand-purple/10 absolute z-0" />
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to upgrade your service?</h2>
                            <p className="text-lg text-muted-foreground mb-8">Join hundreds of restaurants revolutionizing their dining experience today.</p>
                            <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-foreground text-background hover:bg-foreground/90">
                                Get Started Now
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
