import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Cpu, RefreshCw, BarChart, Users } from "lucide-react";

const Features = () => {
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
        <div className="pb-20">
            {/* Header */}
            <section className="pt-12 pb-20 container mx-auto px-4 text-center">
                <Badge className="mb-4 bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/20">Features</Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Designed for Modern Dining</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Every detail of Roboserve is engineered to enhance the dining experience and streamline operations.
                </p>
            </section>

            {/* Zig-Zag Section */}
            <section className="container mx-auto px-4 gap-24 flex flex-col mb-32">
                {/* Feature 1 */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-video rounded-3xl bg-gradient-to-br from-brand-blue/20 to-brand-purple/20 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Cpu className="w-24 h-24 text-brand-blue/50 group-hover:scale-110 transition-transform duration-500" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">AI Navigation Engine</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Our proprietary SLAM technology allows robots to navigate crowded dining rooms effortlessly, avoiding obstacles and people in real-time with millimeter precision.
                        </p>
                        <ul className="space-y-2">
                            {["Lidar-based mapping", "Real-time obstacle avoidance", "Dynamic path rerouting"].map((f, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</div>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-video rounded-3xl bg-gradient-to-br from-brand-purple/20 to-pink-500/20 border border-white/10 backdrop-blur-3xl shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <RefreshCw className="w-24 h-24 text-brand-purple/50 group-hover:rotate-180 transition-transform duration-700" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-4">Continuous Operation</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            With auto-docking and fast charging, our fleet can run 24/7. Swappable battery packs ensure zero downtime during peak hours.
                        </p>
                        <ul className="space-y-2">
                            {["12-hour battery life", "Auto-docking stations", "Under 1hr fast charge"].map((f, i) => (
                                <li key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs">✓</div>
                                    <span>{f}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Bento Grid */}
            <section className="container mx-auto px-4 mb-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">More than just a standard robot</h2>
                    <p className="text-muted-foreground">Comprehensive features covering every aspect of service.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">
                    {/* Large item */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="col-span-1 md:col-span-2 row-span-2 rounded-3xl bg-secondary/30 border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-brand-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <Zap className="w-10 h-10 text-brand-blue mb-4" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Fleet Management</h3>
                            <p className="text-muted-foreground">Control up to 100 robots from a single tablet. Assign zones, routes, and tasks instantly.</p>
                        </div>
                        <div className="mt-8 h-40 bg-background/50 rounded-xl border border-white/5 w-full" />
                    </motion.div>

                    {/* Medium items */}
                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-1 row-span-1 rounded-3xl bg-secondary/30 border border-white/5 p-6 relative">
                        <Shield className="w-8 h-8 text-green-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Safety First</h3>
                        <p className="text-sm text-muted-foreground">ISO certified safety sensors to protect guests.</p>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-1 row-span-1 rounded-3xl bg-secondary/30 border border-white/5 p-6">
                        <Users className="w-8 h-8 text-orange-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Voice Interaction</h3>
                        <p className="text-sm text-muted-foreground">Friendly AI voice in 30+ languages.</p>
                    </motion.div>

                    {/* Medium items row 2 */}
                    <motion.div whileHover={{ scale: 1.02 }} className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-secondary/30 border border-white/5 p-6 flex items-center gap-6">
                        <div className="p-4 rounded-full bg-brand-purple/20 text-brand-purple">
                            <BarChart className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-1">Performance Analytics</h3>
                            <p className="text-sm text-muted-foreground">Track engagement, delivery times, and battery usage.</p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Features;
