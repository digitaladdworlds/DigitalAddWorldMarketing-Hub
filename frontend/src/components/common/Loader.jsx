import React from 'react'
import { motion } from 'framer-motion'

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white dark:bg-dark flex items-center justify-center z-[9999]">
      <div className="text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-white font-display font-bold text-xl">DM</span>
        </div>
        <div className="flex gap-1.5 justify-center">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
