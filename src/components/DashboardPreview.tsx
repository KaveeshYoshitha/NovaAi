import { motion } from "motion/react";
import { TrendingUp, Users, Activity, Bell } from "lucide-react";

export function DashboardPreview() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-indigo-950/30 to-black overflow-hidden">
      {/* Glowing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
            Intuitive Dashboard
          </h2>
          <p className="text-xl text-purple-200/70">
            Control everything from one beautiful interface
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* 3D Frame with glow */}
          <div className="relative">
            {/* Purple glow behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>

            {/* Main dashboard mockup */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 border border-purple-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {/* Top Navigation Bar */}
              <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-white/10 border-b border-purple-500/30 backdrop-blur-lg">
                <div className="flex items-center gap-4 sm:gap-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
                      <span className="text-white text-sm sm:text-base font-bold">N</span>
                    </div>
                    <span className="text-white text-sm sm:text-base font-bold">NovaAI</span>
                  </div>
                  
                  {/* Navigation tabs */}
                  <div className="hidden md:flex items-center gap-1">
                    {['Dashboard', 'Analytics', 'Tasks', 'Settings'].map((tab, idx) => (
                      <button
                        key={tab}
                        className={`px-3 lg:px-4 py-2 rounded-lg text-xs lg:text-sm transition-all ${
                          idx === 0 
                            ? 'bg-purple-500/30 text-white border border-purple-400/50 shadow-lg shadow-purple-500/20 font-semibold' 
                            : 'text-purple-200/80 hover:text-white hover:bg-white/10 font-medium'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Search bar */}
                  <div className="hidden lg:flex items-center gap-2 bg-white/10 border border-purple-500/30 rounded-lg px-3 py-2 hover:border-purple-400/50 transition-all">
                    <svg className="w-4 h-4 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="bg-transparent border-none outline-none text-sm text-white placeholder-purple-200/50 w-32 font-normal"
                    />
                  </div>
                  
                  {/* Notification bell */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white/10 border border-purple-500/30 flex items-center justify-center hover:bg-white/15 hover:border-purple-400/50 transition-all"
                  >
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-purple-200" />
                    <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-fuchsia-500 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] text-white shadow-lg font-bold">3</div>
                  </motion.button>
                  
                  {/* Profile */}
                  <div className="flex items-center gap-2 bg-white/10 border border-purple-500/30 rounded-lg px-1.5 sm:px-2 py-1 sm:py-1.5 hover:bg-white/15 hover:border-purple-400/50 transition-all cursor-pointer">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-400 to-fuchsia-400 flex items-center justify-center shadow-md">
                      <span className="text-white text-xs font-bold">SA</span>
                    </div>
                    <span className="hidden md:block text-sm text-white font-semibold">Sarah Anderson</span>
                  </div>
                </div>
              </div>

              {/* Main content area */}
              <div className="p-4 sm:p-6 lg:p-8">
                {/* Dashboard header with date */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl text-white mb-1 sm:mb-2 font-bold">Welcome back, Sarah</h3>
                    <p className="text-sm sm:text-base text-purple-300/60">Here's what's happening with your AI automation today</p>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                    {/* Date range selector */}
                    <button className="flex items-center gap-1.5 sm:gap-2 bg-white/5 border border-purple-500/20 rounded-lg px-3 sm:px-4 py-2 sm:py-2.5 hover:bg-white/10 transition-all flex-1 sm:flex-initial">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs sm:text-sm text-white whitespace-nowrap">Last 30 days</span>
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Export button */}
                    <button className="bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:from-purple-500 hover:to-fuchsia-500 transition-all text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      <span className="hidden xs:inline">Export</span>
                    </button>
                  </div>
                </div>

                {/* Enhanced Stats grid */}
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-8">
                  {[
                    { label: "Active Users", value: "12,543", icon: Users, change: "+12.5%", subtext: "vs last month", trend: "up" },
                    { label: "Tasks Automated", value: "8,942", icon: Activity, change: "+8.3%", subtext: "this month", trend: "up" },
                    { label: "API Performance", value: "98.5%", icon: TrendingUp, change: "+2.1%", subtext: "uptime", trend: "up" },
                    { label: "Response Time", value: "87ms", icon: Activity, change: "-15.2%", subtext: "avg latency", trend: "up" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="backdrop-blur-md bg-gradient-to-br from-white/8 to-white/3 border border-purple-500/20 rounded-xl p-4 sm:p-5 hover:border-purple-400/40 transition-all cursor-pointer group relative overflow-hidden"
                    >
                      {/* Background glow on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center group-hover:bg-purple-500/20 transition-all">
                            <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                          </div>
                          <div className="flex items-center gap-1 text-xs sm:text-sm text-green-400 bg-green-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded">
                            <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                            <span className="font-semibold">{stat.change}</span>
                          </div>
                        </div>
                        <motion.p 
                          className="text-2xl sm:text-3xl text-white mb-1 font-bold" 
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                        >
                          {stat.value}
                        </motion.p>
                        <p className="text-xs sm:text-sm text-purple-300/80 mb-0.5 sm:mb-1 font-medium">{stat.label}</p>
                        <p className="text-xs text-purple-300/50">{stat.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Chart section with tabs */}
                <div className="backdrop-blur-md bg-gradient-to-br from-white/8 to-white/3 border border-purple-500/20 rounded-xl overflow-hidden">
                  {/* Chart header with tabs */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 border-b border-purple-500/20">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
                      <div>
                        <div className="text-[10px] sm:text-xs text-purple-300/80 uppercase tracking-wider mb-1">Revenue Growth</div>
                        <div className="text-xl sm:text-2xl text-white font-bold">$8.8M <span className="text-xs sm:text-sm text-purple-300/60 font-normal">Total</span></div>
                      </div>
                      
                      {/* Chart type tabs */}
                      <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                        {['Bar', 'Line', 'Area'].map((type, idx) => (
                          <button
                            key={type}
                            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded text-xs transition-all ${
                              idx === 1 
                                ? 'bg-purple-500/30 text-white' 
                                : 'text-purple-300/60 hover:text-purple-200'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between">
                      <div className="flex items-center gap-2 text-xs text-purple-300/60">
                        <div className="hidden sm:flex items-center gap-1.5">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500"></div>
                          <span className="hidden lg:inline">2024 Revenue</span>
                        </div>
                        <motion.div
                          className="flex items-center gap-1 text-green-400 bg-green-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <TrendingUp className="w-3 h-3" />
                          <span className="font-semibold">+24%</span>
                        </motion.div>
                      </div>
                      
                      {/* More options */}
                      <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 border border-purple-500/20 flex items-center justify-center hover:bg-white/10 transition-all">
                        <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Chart area */}
                  <div className="p-3 sm:p-4 lg:p-6 h-56 sm:h-64 lg:h-72 relative">
                    {/* Y-axis labels and grid */}
                    <div className="absolute left-3 sm:left-4 lg:left-6 top-3 sm:top-4 lg:top-6 bottom-10 sm:bottom-12 lg:bottom-14 flex flex-col justify-between text-[10px] sm:text-xs text-purple-300/50">
                      {['10M', '7.5M', '5M', '2.5M', '0'].map((label, i) => (
                        <div key={i}>{label}</div>
                      ))}
                    </div>
                    
                    {/* Grid lines */}
                    <div className="absolute inset-0 flex flex-col justify-between py-3 sm:py-4 lg:py-6 px-3 sm:px-4 lg:px-6 ml-6 sm:ml-7 lg:ml-8 pointer-events-none">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="border-t border-purple-500/10 w-full"></div>
                      ))}
                    </div>
                    
                    {/* Chart bars */}
                    <div className="relative h-full flex items-end justify-between gap-1 sm:gap-2 pt-3 sm:pt-4 lg:pt-6 pb-8 sm:pb-9 lg:pb-10 ml-9 sm:ml-10 lg:ml-12">
                      {[42, 45, 38, 52, 58, 65, 61, 70, 78, 85, 92, 88].map((value, i) => (
                        <motion.div
                          key={i}
                          className="flex-1 relative group cursor-pointer"
                          initial={{ scaleY: 0, opacity: 0 }}
                          whileInView={{ scaleY: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.05, duration: 0.5, type: "spring", stiffness: 100 }}
                          whileHover={{ scale: 1.08 }}
                        >
                          {/* Bar */}
                          <motion.div
                            className="w-full bg-gradient-to-t from-purple-600 via-purple-500 to-fuchsia-400 rounded-t-md sm:rounded-t-lg relative overflow-hidden [height:var(--bar-height)]"
                            style={{ ['--bar-height' as string]: `${value}%` }}
                          >
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            
                            {/* Glow on hover */}
                            <motion.div
                              className="absolute -inset-1 bg-purple-500 blur-lg opacity-0 group-hover:opacity-60 transition-opacity -z-10"
                            />
                          </motion.div>
                          
                          {/* Enhanced tooltip */}
                          <motion.div
                            className="hidden sm:block absolute -top-14 sm:-top-16 left-1/2 transform -translate-x-1/2 bg-purple-900/95 backdrop-blur-lg border border-purple-400/40 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20 shadow-xl"
                            initial={{ y: 10 }}
                            whileHover={{ y: 0 }}
                          >
                            <div className="text-[10px] sm:text-xs text-purple-300/80 mb-0.5">
                              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][i]}
                            </div>
                            <div className="text-xs sm:text-sm text-white font-bold">${(value * 100)}K</div>
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-900/95 border-r border-b border-purple-400/40"></div>
                          </motion.div>
                          
                          {/* Month label */}
                          <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 transform -translate-x-1/2 text-[9px] sm:text-[10px] text-purple-300/60 uppercase tracking-wide">
                            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                          </div>
                        </motion.div>
                      ))}
                      
                      {/* Trend line overlay - rendered last to be on top */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none z-50" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#34d399" />
                          </linearGradient>
                        </defs>
                        
                        {/* Animated trend line */}
                        <motion.polyline
                          points={[42, 45, 38, 52, 58, 65, 61, 70, 78, 85, 92, 88].map((value, i, arr) => {
                            const x = (i / (arr.length - 1)) * 100;
                            const y = 100 - value;
                            return `${x},${y}`;
                          }).join(' ')}
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="none"
                          vectorEffect="non-scaling-stroke"
                          initial={{ pathLength: 0, opacity: 0 }}
                          whileInView={{ pathLength: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 1.1, duration: 1.5, ease: "easeInOut" }}
                          className="[filter:drop-shadow(0_0_6px_rgba(16,185,129,0.8))]"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating UI elements */}
          <motion.div
            className="absolute top-0 left-0 backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-2xl p-4 shadow-xl z-10"
            animate={{
              y: [0, -10, 0],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-purple-300/60">AI Status</p>
                <p className="text-white">Active</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-4 right-4 backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-2xl p-4 shadow-xl"
            animate={{
              y: [0, 10, 0],
              rotate: [2, -2, 2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-purple-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-purple-300/60">Efficiency</p>
                <p className="text-white">+24%</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-1/2 -right-12 backdrop-blur-xl bg-white/10 border border-purple-500/30 rounded-full p-3 shadow-xl"
            animate={{
              x: [0, 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <Users className="w-6 h-6 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}