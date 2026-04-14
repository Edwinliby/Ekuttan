"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    const lastUpdated = "April 14, 2026";
    const appName = "Xpense";
    const supportEmail = "edwinliby2002@gmail.com";

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="min-h-screen w-full relative">
            <Navbar />
            
            <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
                <motion.header 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mb-12 border-b border-[var(--text-secondary)]/20 pb-8"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-instrument italic text-[var(--foreground)] mb-4 tracking-tight">
                        Privacy Policy
                    </h1>
                    <p className="text-sm font-medium text-[var(--text-secondary)] uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </motion.header>

                <div className="space-y-12 backdrop-blur-sm bg-white/5 rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="prose prose-blue max-w-none"
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">01.</span> Introduction
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">
                            Welcome to {appName}. We are committed to protecting your personal information and your right to privacy.
                            This Privacy Policy explains how we collect, use, and safeguard your data when you use our mobile application.
                        </p>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">02.</span> Information We Collect
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed text-lg mb-6">
                            We collect information that you provide directly to us through the use of {appName}:
                        </p>
                        <ul className="grid gap-4 list-none p-0">
                            {[
                                { title: "Financial Transaction Data", desc: "Information about your expenses, categories, and amounts that you manually log." },
                                { title: "Budgeting & Goals", desc: "Financial targets, savings goals, and progress tracking data." },
                                { title: "Account Information", desc: "If you use our cloud sync feature, we collect your email address and authentication details provided via Supabase." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 p-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 hover:bg-[var(--foreground)]/10 transition-colors duration-300">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                                    <div>
                                        <strong className="text-[var(--foreground)] block mb-1 font-semibold">{item.title}</strong>
                                        <span className="text-[var(--text-secondary)] text-sm">{item.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">03.</span> Third-Party Services
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed text-lg mb-6">
                            We use third-party services to provide core functionality and maintain the app:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all">
                                <h3 className="font-bold text-[var(--foreground)] mb-2">Google AdMob</h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                                    Used to serve advertisements. AdMob may collect data such as device identifiers and location to serve personalized ads.
                                </p>
                                <a href="https://policies.google.com/technologies/ads" className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1">
                                    Google's Advertising Policies →
                                </a>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                                <h3 className="font-bold text-[var(--foreground)] mb-2">Supabase</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    Used for secure data storage and synchronization. Your financial data is encrypted and stored securely on Supabase servers.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">04.</span> Data Security
                        </h2>
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                            <p className="relative bg-[var(--bg-start)]/50 p-6 rounded-xl text-[var(--foreground)]/80 leading-relaxed border border-white/5">
                                We implement industry-standard security measures to protect your data. While we strive to use commercially acceptable means to protect your information, no method of transmission is 100% secure.
                            </p>
                        </div>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">05.</span> Offline Performance
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed p-4 border-l-4 border-blue-500 bg-blue-500/5">
                            {appName} is designed to work offline. Your data is stored locally and only synchronized when an internet connection is available and you are signed in.
                        </p>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">06.</span> Account Deletion
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed p-4 border-l-4 border-red-500 bg-red-500/5">
                            You can delete your account at any time through the app settings. Once deleted, <strong>all your data</strong>, including financial records, categories, and profile information, will be <strong>permanently removed from our database</strong>. This action is irreversible.
                        </p>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="text-center py-8"
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4">Questions or Suggestions?</h2>
                        <p className="text-[var(--text-secondary)] mb-6">
                            If you have any questions about our Privacy Policy, reach out to us:
                        </p>
                        <a 
                            href={`mailto:${supportEmail}`}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-t from-[var(--foreground)]/10 to-[var(--foreground)]/5 border border-[var(--foreground)]/20 text-xl font-bold text-[var(--foreground)] hover:scale-105 transition-transform"
                        >
                            {supportEmail}
                        </a>
                    </motion.section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
