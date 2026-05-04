"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
    const lastUpdated = "May 04, 2026";
    const appName = "Xpense";
    const blockPuzzleName = "Block Color Puzzle";
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
                            Welcome to our Privacy Policy. This document covers our applications, including <strong>{appName}</strong> and <strong>{blockPuzzleName}</strong>. 
                            We are committed to protecting your personal information and your right to privacy.
                            This policy explains how we handle data across our mobile applications.
                        </p>
                    </motion.section>

                    <motion.section 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <h2 className="text-2xl font-bold font-instrument text-[var(--foreground)] mb-4 flex items-center gap-3">
                            <span className="text-blue-500/50 text-3xl italic">02.</span> Information Collection
                        </h2>
                        
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                                    {appName} (Expense Tracker)
                                </h3>
                                <p className="text-[var(--foreground)]/80 leading-relaxed mb-4">
                                    For {appName}, we collect information that you provide directly:
                                </p>
                                <ul className="grid gap-3 list-none p-0">
                                    {[
                                        { title: "Financial Transaction Data", desc: "Information about your expenses, categories, and amounts that you manually log." },
                                        { title: "Budgeting & Goals", desc: "Financial targets, savings goals, and progress tracking data." },
                                        { title: "Account Information", desc: "If you use our cloud sync feature, we collect your email address via Supabase." }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 p-4 rounded-xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10">
                                            <div>
                                                <strong className="text-[var(--foreground)] block mb-1 font-semibold">{item.title}</strong>
                                                <span className="text-[var(--text-secondary)] text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
                                <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                    {blockPuzzleName}
                                </h3>
                                <p className="text-[var(--foreground)]/80 leading-relaxed text-lg">
                                    <strong>{blockPuzzleName} does not collect any personal user data.</strong> The app is designed to be played completely anonymously. We do not require account creation, and no gameplay data is transmitted to our servers.
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
                            <span className="text-blue-500/50 text-3xl italic">03.</span> Third-Party Services & Advertising
                        </h2>
                        <p className="text-[var(--foreground)]/80 leading-relaxed text-lg mb-6">
                            We use third-party services to maintain our apps and provide essential features:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-transparent border border-blue-500/10 hover:border-blue-500/30 transition-all">
                                <h3 className="font-bold text-[var(--foreground)] mb-2">Google AdMob</h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                                    Used in both <strong>{appName}</strong> and <strong>{blockPuzzleName}</strong> to serve advertisements. AdMob may collect device identifiers to serve personalized or non-personalized ads.
                                </p>
                                <a href="https://policies.google.com/technologies/ads" className="text-blue-500 text-sm font-semibold hover:underline flex items-center gap-1">
                                    Google's Advertising Policies →
                                </a>
                            </div>
                            <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-transparent border border-emerald-500/10 hover:border-emerald-500/30 transition-all">
                                <h3 className="font-bold text-[var(--foreground)] mb-2">Supabase ({appName} only)</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                                    Used only in {appName} for secure data storage and synchronization. Your financial data is encrypted and stored securely on Supabase servers.
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
                            Our apps are designed to work offline. Your data is primarily stored locally on your device for immediate access and privacy.
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
                            For apps with accounts ({appName}), you can delete your account at any time through settings. Once deleted, <strong>all your data</strong> will be <strong>permanently removed from our database</strong>.
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
