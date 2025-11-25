import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-black to-purple-950"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.2, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Luxury blurred backdrop */}
        <div className="absolute inset-x-12 inset-y-8 rounded-3xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10"
        >
          {/* Main heading - Animated gradient flow */}
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tighter pb-2 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, type: "spring", damping: 20 }}
          >
            {/* Mobile version - 3 lines */}
            <span className="md:hidden">
              <motion.span 
                className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent [background-size:200%_200%] pb-2"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Your Intelligent
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent [background-size:200%_200%] pb-2"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Partner for
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent [background-size:200%_200%]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Automation.
              </motion.span>
            </span>

            {/* Desktop version - 2 lines */}
            <span className="hidden md:block">
              <motion.span 
                className="block bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent pb-3 [background-size:200%_200%]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Your Intelligent Partner
              </motion.span>
              <motion.span 
                className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent [background-size:200%_200%]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                for Automation.
              </motion.span>
            </span>
          </motion.h1>

          {/* Subtext - Elegant reveal */}
          <motion.p
            className="text-lg md:text-xl text-purple-100/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            AI-powered platform that generates content, answers questions, and automates complex workflows with precision.
          </motion.p>

          {/* Professional badge with shimmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: [0, -5, 0]
            }}
            transition={{ 
              opacity: { delay: 0.6, duration: 0.8 },
              scale: { delay: 0.6, duration: 0.8, type: "spring", stiffness: 120 },
              y: { 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }
            }}
            className="inline-flex items-center gap-1.5 backdrop-blur-xl bg-gradient-to-r from-purple-500/10 via-fuchsia-500/10 to-indigo-500/10 border border-purple-400/30 rounded-full px-3 py-1 mb-8 relative overflow-hidden group"
          >
            {/* Animated shimmer sweep */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* NovaAI Logo */}
            <motion.div
              className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/50 relative z-10"
              animate={{
                boxShadow: [
                  '0 4px 15px rgba(168, 85, 247, 0.5)',
                  '0 4px 20px rgba(168, 85, 247, 0.7)',
                  '0 4px 15px rgba(168, 85, 247, 0.5)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="w-3 h-3 text-white" />
            </motion.div>
            
            <motion.span
              className="text-xs font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent relative z-10 [background-size:200%_200%]"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              NovaAI
            </motion.span>
            
            <div className="w-px h-4 bg-purple-400/30 relative z-10"></div>
            
            <motion.div 
              className="w-1 h-1 bg-purple-400 rounded-full relative z-10"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
                boxShadow: ['0 0 0 0 rgba(192, 132, 252, 0.7)', '0 0 0 4px rgba(192, 132, 252, 0)', '0 0 0 0 rgba(192, 132, 252, 0)'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
            <span className="text-xs tracking-[0.12em] text-white relative z-10 font-bold drop-shadow-[0_0_12px_rgba(192,132,252,0.9)]">ENTERPRISE-GRADE AI AUTOMATION</span>
          </motion.div>

          {/* Premium stats bar with stagger & hover effects */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {[
              { value: '99.9%', label: 'Uptime', icon: '⚡' },
              { value: '10M+', label: 'Requests/Day', icon: '🚀' },
              { value: '<100ms', label: 'Response Time', icon: '⚙️' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx} 
                className="relative group flex-1 min-w-[140px]"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: 0.8 + idx * 0.15, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 120
                }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3, type: "spring", stiffness: 300 }
                }}
              >
                <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 via-purple-500/5 to-white/5 border border-purple-400/30 rounded-2xl px-8 py-6 hover:border-purple-300/60 transition-all duration-500 overflow-hidden">
                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  
                  {/* Floating icon */}
                  <motion.div
                    className="absolute -top-2 -right-2 text-2xl opacity-20 group-hover:opacity-50 transition-opacity"
                    animate={{
                      y: [0, -6, 0],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-3xl text-white mb-2 font-bold" 
                      animate={{
                        scale: [1, 1.03, 1],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: idx * 0.4,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-purple-200/60 tracking-[0.15em] uppercase">{stat.label}</div>
                  </div>
                </div>
                
                {/* Outer glow */}
                <motion.div 
                  className="absolute inset-0 bg-purple-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Luxury CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-5 justify-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <motion.button
              className="relative px-10 py-5 rounded-xl text-white overflow-hidden group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600"></div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              {/* Periodic shine sweep */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                animate={{
                  x: ['-200%', '200%'],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              
              <span className="relative z-10 tracking-wide font-semibold">Start Free Trial</span>
              
              {/* Pulsing glow */}
              <motion.div
                className="absolute -inset-1 blur-2xl bg-purple-600/40 opacity-50 group-hover:opacity-100 transition-opacity rounded-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.button>

            <motion.button
              className="relative px-10 py-5 rounded-xl text-purple-100 backdrop-blur-xl bg-white/5 border-2 border-purple-400/30 hover:border-purple-300/60 hover:bg-white/10 transition-all duration-300 overflow-hidden group"
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Animated gradient border glow */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity blur-sm [background-size:200%_200%]"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 tracking-wide font-semibold">Schedule Demo</span>
            </motion.button>
          </motion.div>

          {/* Trust indicators with ripple animations */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-purple-200/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 1 }}
          >
            {[
              { text: 'No credit card required' },
              { text: 'SOC 2 Certified' },
              { text: 'Enterprise Support' }
            ].map((item, idx) => (
              <motion.span 
                key={idx}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + idx * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, color: 'rgb(216, 180, 254)' }}
              >
                <motion.svg 
                  className="w-5 h-5 text-purple-400" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                >
                  <motion.path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd"
                  />
                  {/* Ripple ring */}
                  <motion.circle
                    cx="10"
                    cy="10"
                    r="8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    opacity="0"
                    animate={{
                      r: [6, 10, 10],
                      opacity: [0.6, 0, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.5,
                    }}
                  />
                </motion.svg>
                {item.text}
              </motion.span>
            ))}
          </motion.div>

          {/* Luxury floating geometric decorations */}
          <motion.div 
            className="absolute top-1/4 left-4 md:left-12 w-32 h-32 opacity-25 pointer-events-none"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative w-full h-full">
              <motion.div 
                className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 border border-purple-400/20 rounded-[2rem] transform rotate-12"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute inset-3 backdrop-blur-xl bg-gradient-to-tl from-purple-500/10 to-indigo-500/10 border border-purple-400/20 rounded-2xl"
                animate={{
                  scale: [1, 0.95, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>

          <motion.div 
            className="absolute top-1/3 right-4 md:right-12 w-36 h-36 opacity-25 pointer-events-none"
            animate={{
              y: [0, 25, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative w-full h-full">
              <motion.div 
                className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-400/20 rounded-full"
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div 
                className="absolute inset-4 backdrop-blur-xl bg-gradient-to-tl from-fuchsia-500/10 to-indigo-500/10 border border-fuchsia-400/20 rounded-full"
                animate={{
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </div>
          </motion.div>
          
          {/* Additional subtle accent decorations */}
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-20 h-20 opacity-20 pointer-events-none"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full backdrop-blur-lg bg-gradient-to-br from-purple-400/10 to-pink-400/10 border border-purple-300/20 rounded-lg"></div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-16 h-16 opacity-20 pointer-events-none"
            animate={{
              rotate: [360, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full backdrop-blur-lg bg-gradient-to-br from-indigo-400/10 to-purple-400/10 border border-indigo-300/20 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}