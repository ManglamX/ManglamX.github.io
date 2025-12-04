"use client"

import { motion } from "framer-motion"

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/20 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary">&copy;</span> {currentYear} MANGLAM_JAISWAL{" "}
            <span className="text-primary">|</span> ALL_RIGHTS_RESERVED
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-xs font-mono"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-muted-foreground">BUILT_WITH:</span>
            <span className="text-primary">NEXT.JS</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-accent">REACT</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-primary">TAILWIND</span>
          </motion.div>
        </div>

        <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

        <div className="mt-4 text-center">
          <p className="text-xs font-mono text-muted-foreground">
            <span className="text-accent">[SYSTEM_MESSAGE]</span> Thank you for visiting my digital domain
          </p>
        </div>
      </div>
    </footer>
  )
}
