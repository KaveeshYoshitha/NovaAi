import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-950 to-indigo-950 overflow-hidden">
      {/* Dark purple background with pattern */}
      <div className="absolute inset-0 bg-[#1E0B47]">
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-purple-500"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full blur-3xl opacity-30"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 backdrop-blur-xl bg-white/10 border border-purple-400/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-200">Ready to transform your workflow?</span>
          </motion.div>

          {/* Main heading with glow */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative text-5xl md:text-7xl mb-6"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-purple-300 bg-clip-text text-transparent">
                Start Automating Your
                <br />
                Workflow Today.
              </span>
              {/* Glowing text effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent blur-xl opacity-50">
                Start Automating Your
                <br />
                Workflow Today.
              </span>
            </span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-purple-200/70 mb-12 max-w-3xl mx-auto"
          >
            Join thousands of teams using NovaAI to save time, increase productivity, and unlock the power of AI automation.
          </motion.p>

          {/* CTA Button with neon gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600"></div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 blur-2xl opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Button content */}
              <span className="relative z-10 text-xl text-white">
                Get NovaAI Now
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-300/60"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}