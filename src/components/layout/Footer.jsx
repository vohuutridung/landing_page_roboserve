import React from "react";
import { Link } from "react-router-dom";
import { Rocket, Twitter, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/40 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white">
                                <Rocket className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold">Roboserve</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Revolutionizing the dining experience with autonomous service robots. Efficient, reliable, and futuristic.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://twitter.com/roboserve"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>

                            <a
                                href="https://facebook.com/roboserve"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>

                            <a
                                href="https://instagram.com/roboserve"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>

                            <a
                                href="https://linkedin.com/company/roboserve"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>

                        </div>
                    </div>

                    {/* Links */}
                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link to="/features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Reviews</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1">
                        <h4 className="font-semibold mb-4">Legal</h4>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Roboserve Inc. All rights reserved.</p>
                    <div className="flex gap-6">
                        {/* Additional small links if needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
