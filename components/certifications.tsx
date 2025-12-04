"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink, Shield, Cloud, Database, Network, Code2 } from "lucide-react"

export function Certifications() {
    const certifications = [
        {
            title: "Google Cloud Cybersecurity Certificate",
            issuer: "Google Cloud",
            icon: Shield,
            color: "text-primary",
            link: "https://www.credly.com/badges/604d3a71-249d-4d2e-9402-605d48f8d504/public_url",
        },
        {
            title: "AWS Academy Graduate - Cloud Architecting",
            issuer: "Amazon Web Services",
            icon: Cloud,
            color: "text-accent",
            link: "https://www.credly.com/badges/ba171ef9-84c7-47cb-b908-af0fd70b1221/public_url",
        },
        {
            title: "Cryptography: A Hands-On Approach",
            issuer: "Professional Certification",
            icon: Shield,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1Qld9sG8rWZhYt1ZATt2YGvxK7BQxkXxo/view?usp=sharing",
        },
        {
            title: "Tata Cybersecurity Analyst Job Simulation",
            issuer: "Tata Group",
            icon: Shield,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1JdVFS78DztcZfm7HCiRd1J-DCChs41CA/view?usp=sharing",
        },
        {
            title: "Deloitte Cyber Job Simulation",
            issuer: "Deloitte",
            icon: Shield,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1vRTFThiqTrgCzy-GmbV8Bdr5rTEx8mOl/view?usp=sharing",
        },
        {
            title: "Geodata Processing using Python and Machine Learning",
            issuer: "Professional Certification",
            icon: Database,
            color: "text-accent",
            link: "https://drive.google.com/file/d/1RVWsr3K87sLJFse7jP4BhfuDcqcIDu8E/view?usp=sharing",
        },
        {
            title: "Introduction to Internet of Things",
            issuer: "IoT Certification",
            icon: Network,
            color: "text-primary",
            link: "https://drive.google.com/file/d/1gY8Ahgbr22vfAXWhmzZmcQJcRDx8ptTJ/view?usp=sharing",
        },
        {
            title: "Python for Data Science",
            issuer: "Data Science Certification",
            icon: Code2,
            color: "text-accent",
            link: "https://drive.google.com/file/d/10CNTqlSkDO44YkqCrIsEogpM_bERKxXH/view?usp=sharing",
        },
        {
            title: "Social Network Analysis",
            issuer: "Professional Certification",
            icon: Network,
            color: "text-primary",
            link: "https://drive.google.com/file/d/107ixwfCiV_damyWKMu-vmysLF9NcByvl/view?usp=sharing",
        },
    ]

    return (
        <section id="certifications" className="py-20 border-b border-primary/20">
            <div className="container mx-auto px-4 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
                        &lt;CERTIFICATIONS /&gt;
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <motion.a
                                key={idx}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group"
                            >
                                <div className="bg-black/50 border border-primary/30 hover:border-primary/80 rounded-lg p-6 backdrop-blur-sm transition-all h-full flex flex-col hover:shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`${cert.color} group-hover:scale-110 transition-transform`}>
                                            <cert.icon className="w-8 h-8" />
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>

                                    <h3 className="font-mono font-bold text-sm text-primary group-hover:text-accent transition-colors mb-2 flex-grow">
                                        {cert.title}
                                    </h3>

                                    <div className="text-xs font-mono text-muted-foreground border-t border-primary/10 pt-3 mt-auto">
                                        <Award className="w-3 h-3 inline mr-1" />
                                        {cert.issuer}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Summary Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        viewport={{ once: true }}
                        className="mt-8 bg-black/50 border border-accent/30 rounded-lg p-4 backdrop-blur-sm"
                    >
                        <div className="flex items-center justify-center gap-2 text-sm font-mono">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-muted-foreground">TOTAL_CERTIFICATIONS:</span>
                            <span className="text-accent font-bold">{certifications.length}</span>
                            <span className="text-muted-foreground ml-4">|</span>
                            <span className="text-muted-foreground ml-4">DOMAINS:</span>
                            <span className="text-primary">Cybersecurity</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">Cloud</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">IoT</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-primary">Data Science</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
