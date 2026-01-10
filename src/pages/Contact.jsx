import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
    return (
        <div className="pb-20">
            <section className="pt-12 pb-20 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Ready to transform your restaurant? Our team is here to help you get started.
                </p>
            </section>

            <section className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <Card className="bg-secondary/20">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Email Us</h3>
                                    <p className="text-sm text-muted-foreground">sales@roboserve.com</p>
                                    <p className="text-sm text-muted-foreground">support@roboserve.com</p>
                                </CardContent>
                            </Card>
                            <Card className="bg-secondary/20">
                                <CardContent className="p-6 flex flex-col items-center text-center">
                                    <div className="w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center mb-4">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-semibold mb-2">Call Us</h3>
                                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                    <p className="text-sm text-muted-foreground">Mon-Fri, 9am-6pm EST</p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Headquarters</h3>
                                    <p className="text-muted-foreground">123 Innovation Blvd, Tech District<br />San Francisco, CA 94103</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-brand-purple shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Office Hours</h3>
                                    <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM<br />Weekend: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 rounded-3xl bg-secondary/30 border border-white/5 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-purple/5" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <MapPin className="w-12 h-12 text-muted-foreground/50 mx-auto mb-2 group-hover:text-brand-blue group-hover:-translate-y-2 transition-all duration-300" />
                                    <p className="text-muted-foreground font-medium">Interactive Map View</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-card border border-border rounded-3xl p-8 shadow-xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-brand-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h2 className="text-2xl font-bold mb-6 relative z-10">Send us a message</h2>
                        <form className="space-y-6 relative z-10">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">First Name</label>
                                    <Input placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Email</label>
                                <Input type="email" placeholder="john@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Restaurant Name</label>
                                <Input placeholder="Tasty Bites Inc." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Message</label>
                                <textarea
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Tell us about your needs..."
                                />
                            </div>

                            <Button className="w-full h-12 text-lg bg-gradient-to-r from-brand-blue to-brand-purple hover:opacity-90 transition-opacity">
                                Send Message <Send className="ml-2 w-4 h-4" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
