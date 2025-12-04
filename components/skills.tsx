"use client"

import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      name: "LANGUAGES",
      items: ["Java", "Python", "Embedded C", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      name: "CYBERSECURITY",
      items: ["Ethical Hacking", "Cryptography", "Network Security", "Vulnerability Assessment", "Penetration Testing"]
    },
    {
      name: "IOT_HARDWARE",
      items: ["Arduino IDE", "Arduino Uno", "ESP32", "ESP32-CAM", "Sensors & Actuators"]
    },
    {
      name: "DATABASES",
      items: ["Firebase", "MongoDB", "PostgreSQL"]
    },
    {
      name: "FRAMEWORKS",
      items: ["Django", "Java AWT", "Java Swing", "React", "Angular"]
    },
    {
      name: "TOOLS_OS",
      items: ["Git/GitHub", "OpenCV", "Keil uVision", "Linux (Kali/Ubuntu)", "Windows"]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-black/80 border border-primary/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,255,65,0.1)] backdrop-blur-sm"
        >
          {/* Terminal Header */}
          <div className="bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            <div className="text-xs font-mono text-primary/70">root@manglam-portfolio:~/skills</div>
            <div className="w-10"></div>
          </div>

          {/* Terminal Body */}
          <div className="p-6 font-mono text-sm md:text-base">
            <div className="mb-4 text-primary">
              <span className="text-accent">root@manglam-portfolio</span>:<span className="text-blue-500">~</span>$ ./list_skills.sh
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={category.name} className="mb-4">
                  <div className="text-accent font-bold mb-2 flex items-center">
                    <span className="mr-2">&gt;</span> {category.name}
                  </div>
                  <div className="pl-4 border-l border-primary/20">
                    {category.items.map((item) => (
                      <div key={item} className="text-muted-foreground hover:text-primary transition-colors cursor-default">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 text-primary animate-pulse">
              <span className="text-accent">root@manglam-portfolio</span>:<span className="text-blue-500">~</span>$ <span className="w-2 h-4 bg-primary inline-block align-middle"></span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
