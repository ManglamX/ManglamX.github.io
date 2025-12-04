"use client"

import { motion } from "framer-motion"
import { Shield, Code, Cpu, Database } from "lucide-react"

export function About() {
  const highlights = [
    { icon: Code, text: "Full‑stack (React, Angular, Django, JS/TS)", color: "text-primary" },
    { icon: Shield, text: "Cybersecurity (Ethical Hacking, Cryptography)", color: "text-accent" },
    { icon: Cpu, text: "IoT & Hardware (ESP32/Arduino)", color: "text-primary" },
    { icon: Database, text: "Databases (Firebase, MongoDB, PostgreSQL)", color: "text-accent" },
  ]

  return (
    <section id="about" className="py-20 border-b border-primary/20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary font-mono mb-2">
            &lt;ABOUT_ME /&gt;
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mb-8"></div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <p className="leading-relaxed text-muted-foreground font-mono text-sm md:text-base">
                I'm a third-year Bachelor of Engineering student at{" "}
                <span className="text-primary">Fr. Conceicao Rodrigues College of Engineering</span>,
                specializing in Electronics and Computer Science with Honors in{" "}
                <span className="text-accent">Cybersecurity</span>.
              </p>
              <p className="leading-relaxed text-muted-foreground font-mono text-sm md:text-base">
                I have a strong interest in full-stack development, cybersecurity, and the Internet of Things (IoT).
                Currently, I serve as the <span className="text-primary">IoT Lead at Project Cell</span>, where I guide
                tech-driven projects focused on solving real-world problems.
              </p>
              <p className="leading-relaxed text-muted-foreground font-mono text-sm md:text-base">
                I've completed an internship at <span className="text-accent">Apraava Energy</span>, gaining practical
                exposure to industry practices. I thrive in collaborative environments and am always eager to take on
                new challenges.
              </p>

              {/* Academic Performance */}
              <div className="bg-black/50 border border-accent/30 rounded-lg p-4 backdrop-blur-sm mt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-mono text-muted-foreground">ACADEMIC_PERFORMANCE</div>
                    <div className="text-2xl font-bold text-accent font-mono mt-1">9.15 / 10</div>
                    <div className="text-xs font-mono text-muted-foreground mt-1">Recent CGPA</div>
                  </div>
                  <div className="text-accent">
                    <svg className="w-16 h-16" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" opacity="0.2" />
                      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="283" strokeDashoffset="25.5" transform="rotate(-90 50 50)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-black/50 border border-primary/30 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-accent font-mono font-bold mb-4 text-lg">CORE_COMPETENCIES:</h3>
                <div className="space-y-3">
                  {highlights.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 group cursor-default"
                    >
                      <div className={`${item.color} group-hover:scale-110 transition-transform`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                        {item.text}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 border border-accent/30 rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs font-mono">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-muted-foreground">STATUS:</span>
                  <span className="text-green-500">AVAILABLE_FOR_OPPORTUNITIES</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
