import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechFlow",
    content:
      "NovaAI has completely transformed how we handle automation. The AI is incredibly smart and saves us hours every day.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    content:
      "The best AI platform I've ever used. The interface is beautiful and the results are consistently impressive.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder of CreativeSpace",
    content:
      "NovaAI's content generation is mind-blowing. It understands context better than any other tool we've tried.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative py-32 bg-gradient-to-b from-black via-indigo-950/20 to-black overflow-hidden"
      id="testimonials"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent pt-[0px] pr-[0px] pb-[10px] pl-[0px]">
            Loved by Thousands
          </h2>
          <p className="text-xl text-purple-200/70">
            See what our customers have to say
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial slider */}
          <div className="relative min-h-[400px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="relative backdrop-blur-xl bg-white/5 border border-purple-500/20 rounded-3xl p-12">
                  {/* Glowing effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 via-fuchsia-600/10 to-purple-600/10 blur-xl"></div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-purple-400 text-purple-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-2xl md:text-3xl text-center text-purple-100 mb-8 leading-relaxed">
                      "{testimonials[current].content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-4">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-purple-500/50">
                          <img
                            src={testimonials[current].avatar}
                            alt={testimonials[current].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        {/* Glow effect on avatar */}
                        <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-md"></div>
                      </motion.div>

                      <div className="text-left">
                        <p className="text-white">
                          {testimonials[current].name}
                        </p>
                        <p className="text-purple-300/60">
                          {testimonials[current].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 backdrop-blur-xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-purple-400" />
            </button>

            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 backdrop-blur-xl bg-white/5 border border-purple-500/20 hover:border-purple-400/50 rounded-full p-3 transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-purple-400" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index
                    ? "bg-purple-500 w-8"
                    : "bg-purple-500/30 hover:bg-purple-500/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
