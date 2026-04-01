import { motion } from "motion/react";
import { MessageSquare, Zap, FileText, BarChart3 } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Smart Chat Assist",
    description:
      "Intelligent conversations that understand context and provide accurate responses in real-time.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description:
      "Automate repetitive tasks and streamline your processes with AI-powered workflows.",
  },
  {
    icon: FileText,
    title: "Content Generation",
    description:
      "Generate high-quality content, from emails to reports, in seconds with advanced AI.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Insights",
    description:
      "Get actionable insights and analytics to make data-driven decisions instantly.",
  },
];

export function Features() {
  return (
    <section className="relative py-32 bg-black overflow-hidden" id="features">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-indigo-950/20 to-black"></div>

      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-xl text-purple-200/70">
            Everything you need to supercharge your workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-2xl p-8 transition-all duration-300 group-hover:border-purple-400/50">
                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 via-fuchsia-600/0 to-purple-600/0 group-hover:from-purple-600/20 group-hover:via-fuchsia-600/20 group-hover:to-purple-600/20 blur-xl transition-all duration-300"></div>

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/20 border border-purple-400/30 mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-7 h-7 text-purple-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl mb-3 text-white">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-purple-200/60 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
