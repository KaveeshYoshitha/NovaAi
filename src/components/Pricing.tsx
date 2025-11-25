import { useState } from "react";
import { motion } from "motion/react";
import { Check, Zap } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 29,
    yearlyPrice: 290,
    description: "Perfect for individuals",
    features: [
      "10,000 AI requests/month",
      "Basic automation",
      "Email support",
      "1 user account",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    monthlyPrice: 99,
    yearlyPrice: 990,
    description: "For growing teams",
    features: [
      "100,000 AI requests/month",
      "Advanced automation",
      "Priority support",
      "10 user accounts",
      "Advanced analytics",
      "Custom integrations",
      "API access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    monthlyPrice: 299,
    yearlyPrice: 2990,
    description: "For large organizations",
    features: [
      "Unlimited AI requests",
      "Enterprise automation",
      "24/7 dedicated support",
      "Unlimited users",
      "Custom analytics",
      "White-label solution",
      "Custom AI training",
      "SLA guarantee",
    ],
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-[18px] bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent pb-[11px] mt-[0px] mr-[0px] ml-[0px] pt-[0px] pr-[0px] pl-[0px]">
            Simple Pricing
          </h2>
          <p className="text-xl text-purple-200/70 mb-8">
            Choose the perfect plan for your needs
          </p>

          {/* Monthly/Yearly Toggle */}
          <div className="inline-flex items-center gap-4 backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-full p-2">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full transition-all ${
                !isYearly
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                  : "text-purple-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full transition-all ${
                isYearly
                  ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white"
                  : "text-purple-300 hover:text-white"
              }`}
            >
              Yearly
              <span className="ml-2 text-xs text-green-400">Save 20%</span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
            >
              {/* Highlighted badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="flex items-center gap-1 backdrop-blur-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-4 py-1 rounded-full text-sm">
                    <Zap className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Card */}
              <div
                className={`relative h-full backdrop-blur-xl bg-white/5 border rounded-3xl p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-purple-500/50 shadow-2xl shadow-purple-500/20"
                    : "border-purple-500/20 group-hover:border-purple-400/50"
                }`}
              >
                {/* Glowing border effect */}
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/20 via-fuchsia-600/20 to-purple-600/20 blur-2xl"></div>
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Plan name */}
                  <h3 className="text-2xl text-white mb-2">{plan.name}</h3>
                  <p className="text-purple-300/60 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl text-white">
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-purple-300/60">
                        /{isYearly ? "year" : "month"}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-purple-400" />
                        </div>
                        <span className="text-purple-200/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl transition-all ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                        : "backdrop-blur-md bg-white/5 border border-purple-500/30 text-purple-200 hover:border-purple-400/50"
                    }`}
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}