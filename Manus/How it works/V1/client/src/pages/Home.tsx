import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Brain, Rocket, Shield, BarChart3, Zap, Target, RefreshCw, MessageSquare, Eye, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/40">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[rgb(74,155,127)] to-[rgb(30,95,78)] flex items-center justify-center">
                <span className="text-white font-bold text-xl">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">grona</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#how" className="text-gray-600 hover:text-[rgb(74,155,127)] transition-colors font-medium">How it works</a>
              <a href="#agents" className="text-gray-600 hover:text-[rgb(74,155,127)] transition-colors font-medium">AI Agents</a>
              <a href="#difference" className="text-gray-600 hover:text-[rgb(74,155,127)] transition-colors font-medium">Why Grona</a>
              <Button className="bg-[rgb(74,155,127)] hover:bg-[rgb(30,95,78)] text-white">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[rgb(200,230,216)]/50 rounded-full border border-[rgb(74,155,127)]/20">
                <Sparkles className="w-4 h-4 text-[rgb(74,155,127)]" />
                <span className="text-sm font-medium text-[rgb(30,95,78)]">AI-Powered Conversion Optimization</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Optimize with
                <span className="block bg-gradient-to-r from-[rgb(74,155,127)] to-[rgb(8,145,178)] bg-clip-text text-transparent">
                  Intelligence,
                </span>
                Not Guesswork
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your website's performance through conversational AI. Grona analyzes, designs, and deploys optimization experiments while you focus on strategy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[rgb(74,155,127)] hover:bg-[rgb(30,95,78)] text-white text-lg px-8 py-6">
                  Launch Your First Test
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[rgb(74,155,127)] text-[rgb(30,95,78)] hover:bg-[rgb(200,230,216)]/30 text-lg px-8 py-6">
                  Watch Demo
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgb(74,155,127)] to-[rgb(8,145,178)] border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">2,500+ teams</div>
                  <div>optimizing with Grona</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">You:</p>
                    <p className="text-gray-900 font-medium">"Increase demo bookings on our pricing page"</p>
                  </div>
                  <div className="bg-gradient-to-r from-[rgb(200,230,216)]/50 to-[rgb(200,230,216)]/30 rounded-lg p-4 border border-[rgb(74,155,127)]/20">
                    <p className="text-sm text-[rgb(30,95,78)] mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Grona AI:
                    </p>
                    <p className="text-gray-900 font-medium mb-3">I've analyzed your pricing page. Here's what I found:</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-[rgb(74,155,127)] mt-0.5">✓</span>
                        <span>60% of visitors scroll past the CTA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[rgb(74,155,127)] mt-0.5">✓</span>
                        <span>High exit rate on mobile devices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[rgb(74,155,127)] mt-0.5">✓</span>
                        <span>Creating 3 variants to test...</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[rgb(217,70,166)]/20 to-[rgb(236,72,153)]/20 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[rgb(8,145,178)]/20 to-[rgb(74,155,127)]/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Active Users", icon: Users, color: "rgb(74,155,127)" },
              { number: "47%", label: "Avg. Conversion Lift", icon: TrendingUp, color: "rgb(8,145,178)" },
              { number: "5min", label: "Setup Time", icon: Zap, color: "rgb(255,184,77)" },
              { number: "24/7", label: "AI Monitoring", icon: Eye, color: "rgb(217,70,166)" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${stat.color}20` }}>
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simplified 3-Step Flow */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              From Prompt to Production
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Launch optimization experiments in minutes, not weeks. Just describe your goal and watch Grona handle the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-center">
            {[
              {
                icon: MessageSquare,
                title: "Enter a Prompt",
                description: "Tell Grona what you want to improve in plain English. No technical knowledge required.",
                color: "rgb(255,184,77)",
                step: "01"
              },
              {
                icon: Eye,
                title: "Preview Results",
                description: "AI analyzes your site, generates variants, and shows you exactly what will change.",
                color: "rgb(217,70,166)",
                step: "02"
              },
              {
                icon: Rocket,
                title: "Deploy Instantly",
                description: "Approve with one click and Grona launches your test with built-in tracking.",
                color: "rgb(74,155,127)",
                step: "03"
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-[rgb(74,155,127)] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div 
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4 transform hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-10 h-10" style={{ color: item.color }} />
                    </div>
                    <div className="text-sm font-bold mb-2" style={{ color: item.color }}>
                      STEP {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed 4-Step Workflow */}
      <section id="how" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Complete Optimization Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Behind the simple interface, Grona's AI agents orchestrate a sophisticated optimization workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                step: "01",
                title: "Define Goal",
                description: "Tell Grona what you want to achieve in plain language. No complex forms or technical setup required.",
                color: "rgb(74,155,127)"
              },
              {
                icon: BarChart3,
                step: "02",
                title: "AI Analysis",
                description: "Our agents analyze user behavior, identify friction points, and uncover optimization opportunities automatically.",
                color: "rgb(8,145,178)"
              },
              {
                icon: Sparkles,
                step: "03",
                title: "Generate Variants",
                description: "AI designs multiple high-impact variants tailored to your brand and optimized for conversion.",
                color: "rgb(217,70,166)"
              },
              {
                icon: Rocket,
                step: "04",
                title: "Deploy & Learn",
                description: "Review, approve, and launch. Grona monitors results and suggests the next optimization automatically.",
                color: "rgb(255,184,77)"
              }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[rgb(74,155,127)] hover:shadow-xl transition-all duration-300 h-full">
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <item.icon className="w-8 h-8" style={{ color: item.color }} />
                    </div>
                    <div className="text-sm font-bold mb-2" style={{ color: item.color }}>
                      STEP {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section id="agents" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your 24/7 Optimization Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized AI agents work in harmony, each mastering a critical aspect of conversion optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: BarChart3,
                name: "Analytics Agent",
                role: "Data Detective",
                description: "Continuously monitors user behavior, identifies friction points, and uncovers hidden conversion opportunities across your entire customer journey.",
                capabilities: ["Heatmap Analysis", "Funnel Tracking", "Behavioral Patterns", "Drop-off Detection"],
                color: "rgb(8,145,178)"
              },
              {
                icon: Brain,
                name: "Strategy Agent",
                role: "Hypothesis Generator",
                description: "Crafts data-driven test hypotheses with clear success metrics, ensuring every experiment is aligned with your business objectives.",
                capabilities: ["Goal Alignment", "Hypothesis Creation", "Success Metrics", "Priority Ranking"],
                color: "rgb(74,155,127)"
              },
              {
                icon: Sparkles,
                name: "Design Agent",
                role: "Creative Engine",
                description: "Generates on-brand variants automatically, applying proven conversion principles while maintaining your unique visual identity.",
                capabilities: ["Variant Generation", "Brand Consistency", "Copy Optimization", "Layout Design"],
                color: "rgb(217,70,166)"
              },
              {
                icon: Shield,
                name: "Quality Agent",
                role: "Guardian",
                description: "Reviews every detail before launch—copy, layout, user experience, and technical implementation—ensuring flawless execution.",
                capabilities: ["UX Validation", "Copy Review", "Technical QA", "Cross-browser Testing"],
                color: "rgb(255,184,77)"
              }
            ].map((agent, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[rgb(74,155,127)] hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div 
                    className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                    style={{ backgroundColor: `${agent.color}20` }}
                  >
                    <agent.icon className="w-8 h-8" style={{ color: agent.color }} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold mb-1" style={{ color: agent.color }}>
                      {agent.role}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{agent.name}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{agent.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {agent.capabilities.map((cap, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-sm rounded-full border"
                          style={{ 
                            borderColor: `${agent.color}40`,
                            backgroundColor: `${agent.color}10`,
                            color: agent.color
                          }}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Circular Optimization Flywheel */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Continuous Optimization Loop
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grona doesn't stop after one test. The AI continuously monitors, learns, and suggests improvements in an endless cycle of optimization.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-[rgb(74,155,127)] to-[rgb(8,145,178)] flex items-center justify-center shadow-2xl z-10">
                <div className="text-center text-white">
                  <RefreshCw className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-xl font-bold">Optimization</div>
                  <div className="text-sm opacity-90">Flywheel</div>
                </div>
              </div>

              {/* Outer Ring with Steps */}
              <div className="relative w-full aspect-square max-w-2xl mx-auto">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Gradient Ring */}
                  <defs>
                    <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgb(255,184,77)" />
                      <stop offset="25%" stopColor="rgb(217,70,166)" />
                      <stop offset="50%" stopColor="rgb(8,145,178)" />
                      <stop offset="75%" stopColor="rgb(74,155,127)" />
                      <stop offset="100%" stopColor="rgb(255,184,77)" />
                    </linearGradient>
                  </defs>
                  <circle 
                    cx="200" 
                    cy="200" 
                    r="160" 
                    fill="none" 
                    stroke="url(#ringGradient)" 
                    strokeWidth="8"
                    opacity="0.3"
                  />
                </svg>

                {/* Step Icons */}
                {[
                  { icon: Target, label: "Analyze", angle: 0, color: "rgb(74,155,127)" },
                  { icon: Brain, label: "Strategize", angle: 72, color: "rgb(8,145,178)" },
                  { icon: Sparkles, label: "Design", angle: 144, color: "rgb(217,70,166)" },
                  { icon: Rocket, label: "Deploy", angle: 216, color: "rgb(255,184,77)" },
                  { icon: BarChart3, label: "Monitor", angle: 288, color: "rgb(236,72,153)" }
                ].map((step, index) => {
                  const radius = 160;
                  const x = 200 + radius * Math.cos((step.angle - 90) * Math.PI / 180);
                  const y = 200 + radius * Math.sin((step.angle - 90) * Math.PI / 180);
                  
                  return (
                    <div
                      key={index}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{ 
                        left: `${(x / 400) * 100}%`, 
                        top: `${(y / 400) * 100}%` 
                      }}
                    >
                      <div className="flex flex-col items-center">
                        <div 
                          className="w-16 h-16 rounded-full flex items-center justify-center bg-white border-4 shadow-lg hover:scale-110 transition-transform duration-300"
                          style={{ borderColor: step.color }}
                        >
                          <step.icon className="w-8 h-8" style={{ color: step.color }} />
                        </div>
                        <div className="mt-2 text-sm font-bold text-gray-900 whitespace-nowrap">
                          {step.label}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-16 grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Zap,
                  title: "Real-time Monitoring",
                  description: "Track variant performance and user responses as they happen"
                },
                {
                  icon: Brain,
                  title: "Intelligent Learning",
                  description: "AI adapts strategies based on what works for your audience"
                },
                {
                  icon: RefreshCw,
                  title: "Continuous Iteration",
                  description: "Automatic suggestions for the next test to maximize gains"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 rounded-lg bg-[rgb(74,155,127)]/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-[rgb(74,155,127)]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section id="difference" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Beyond Brainstorming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              While other tools stop at suggestions, Grona ships real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Traditional Tools",
                icon: "🛠️",
                points: [
                  "Manual test creation",
                  "Requires technical skills",
                  "Time-consuming setup",
                  "Limited insights",
                  "Static recommendations"
                ],
                color: "gray"
              },
              {
                title: "ChatGPT & AI Assistants",
                icon: "💬",
                points: [
                  "Helpful suggestions",
                  "No site context",
                  "Can't implement changes",
                  "Requires your team",
                  "One-time advice"
                ],
                color: "gray"
              },
              {
                title: "Grona",
                icon: "✨",
                points: [
                  "Designs & ships real tests",
                  "Uses your analytics data",
                  "Autonomous deployment",
                  "Continuous optimization",
                  "Built-in guardrails"
                ],
                color: "green",
                highlight: true
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`rounded-2xl p-8 border-2 transition-all duration-300 ${
                  item.highlight 
                    ? 'bg-gradient-to-br from-[rgb(200,230,216)]/30 to-white border-[rgb(74,155,127)] shadow-xl scale-105' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{item.title}</h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={`mt-1 ${item.highlight ? 'text-[rgb(74,155,127)]' : 'text-gray-400'}`}>
                        {item.highlight ? '✓' : '•'}
                      </span>
                      <span className={item.highlight ? 'text-gray-900 font-medium' : 'text-gray-600'}>
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Real Results, Real Fast
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies using Grona see measurable improvements in weeks, not months.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "47%",
                label: "Average Conversion Lift",
                description: "Across all tests in first 90 days",
                icon: TrendingUp,
                color: "rgb(74,155,127)"
              },
              {
                metric: "5 min",
                label: "Time to First Test",
                description: "From signup to live experiment",
                icon: Zap,
                color: "rgb(255,184,77)"
              },
              {
                metric: "12x",
                label: "Faster Than Manual",
                description: "Compared to traditional A/B testing",
                icon: Rocket,
                color: "rgb(8,145,178)"
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-[rgb(74,155,127)] hover:shadow-xl transition-all duration-300 text-center">
                <div 
                  className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="w-10 h-10" style={{ color: item.color }} />
                </div>
                <div className="text-5xl font-bold mb-2" style={{ color: item.color }}>
                  {item.metric}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-2">{item.label}</div>
                <div className="text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[rgb(74,155,127)] to-[rgb(30,95,78)] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Optimize Smarter?
          </h2>
          <p className="text-xl mb-10 text-white/90">
            Start a conversation with Grona and launch your first AI-powered experiment. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[rgb(74,155,127)] hover:bg-gray-100 text-lg px-8 py-6">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
          <p className="mt-8 text-white/70 text-sm">
            Join 2,500+ teams already optimizing with AI
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-gray-400">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgb(74,155,127)] to-[rgb(30,95,78)] flex items-center justify-center">
                  <span className="text-white font-bold">G</span>
                </div>
                <span className="text-xl font-bold text-white">grona</span>
              </div>
              <p className="text-sm">AI-powered conversion optimization that works while you sleep.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">How it Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Grona AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
