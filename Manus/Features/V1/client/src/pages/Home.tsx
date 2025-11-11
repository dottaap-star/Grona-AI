import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  MessageSquare, 
  Zap, 
  Users, 
  Edit3, 
  Shield, 
  BarChart3, 
  Lock, 
  Puzzle, 
  Brain,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">G</span>
              </div>
              <span>grona</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">How it works</Button>
            <Button variant="ghost" size="sm">Features</Button>
            <Button variant="ghost" size="sm">Pricing</Button>
            <Button size="sm">Try for Free</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-blue-50 to-purple-50 opacity-60" />
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge className="mb-4" variant="secondary">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Optimization
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">
              AI-Powered Optimization That Never Stops Learning
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              From conversational commands to autonomous testing—Grona transforms how you optimize your website. No developers needed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                See How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section - Tabs */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Three Pillars of Grona
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to optimize your website, powered by AI
            </p>
          </div>

          <Tabs defaultValue="conversational" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="conversational" className="text-base">
                <MessageSquare className="w-4 h-4 mr-2" />
                Conversational
              </TabsTrigger>
              <TabsTrigger value="autonomous" className="text-base">
                <Zap className="w-4 h-4 mr-2" />
                Autonomous
              </TabsTrigger>
              <TabsTrigger value="personalization" className="text-base">
                <Users className="w-4 h-4 mr-2" />
                Personalization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="conversational" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Just Tell Grona What You Want</CardTitle>
                  <CardDescription className="text-lg">
                    Skip the complexity of traditional CRO tools. Grona understands natural language commands and turns your ideas into live experiments in minutes. Whether you want to test mobile copy, reduce checkout friction, or personalize for specific audiences—just ask.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Natural language test creation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Automatic variant generation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>AI-powered hypothesis validation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>One-click experiment launch</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Example Commands</h4>
                      <div className="space-y-2">
                        <code className="block p-3 bg-muted rounded-md text-sm">
                          "Test shorter headlines on mobile devices"
                        </code>
                        <code className="block p-3 bg-muted rounded-md text-sm">
                          "Show discount banner to first-time visitors from Instagram"
                        </code>
                        <code className="block p-3 bg-muted rounded-md text-sm">
                          "Reduce form fields on pricing page and measure impact"
                        </code>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="autonomous" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">AI That Runs Your Tests End-to-End</CardTitle>
                  <CardDescription className="text-lg">
                    Grona doesn't just help you set up tests—it manages the entire lifecycle. From statistical analysis to traffic allocation, winner detection to automatic rollout, the AI handles what used to require data science expertise.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Autonomous Features</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Automated statistical significance detection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Dynamic traffic allocation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Multi-armed bandit optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Automatic winner rollout with safety controls</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold">Performance Metrics</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Test velocity vs manual</span>
                            <span className="text-sm font-bold">4x faster</span>
                          </div>
                          <Progress value={80} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Statistical confidence</span>
                            <span className="text-sm font-bold">95%+</span>
                          </div>
                          <Progress value={95} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-sm font-medium">Failed deployments</span>
                            <span className="text-sm font-bold">0%</span>
                          </div>
                          <Progress value={0} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="personalization" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">The Right Message for Every Visitor</CardTitle>
                  <CardDescription className="text-lg">
                    Grona automatically discovers personalization opportunities by analyzing visitor behavior, traffic sources, geography, and device types. No manual segment creation required—the AI suggests who to target and what to change.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-lg">Targeting Capabilities</h4>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">UTM Matching</h5>
                      <p className="text-sm text-muted-foreground">Source and campaign targeting</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">Geographic</h5>
                      <p className="text-sm text-muted-foreground">Location and language detection</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">Device Type</h5>
                      <p className="text-sm text-muted-foreground">Browser and device optimization</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">Behavioral</h5>
                      <p className="text-sm text-muted-foreground">Intent signal detection</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">Visitor Type</h5>
                      <p className="text-sm text-muted-foreground">New vs. returning logic</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h5 className="font-medium mb-1">Time-based</h5>
                      <p className="text-sm text-muted-foreground">Temporal patterns</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Deep Dive - Bento Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to Optimize
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features that work together seamlessly
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: 'hsl(var(--grona-orange))', color: 'white' }}>
                  Manual Control
                </Badge>
                <Edit3 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Visual Editor</CardTitle>
                <CardDescription>
                  Most teams work through chat, but pixel-perfect control is always available. Edit headlines, CTAs, images, and layouts with a visual interface when you need it.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: 'hsl(var(--grona-green))', color: 'white' }}>
                  Always Safe
                </Badge>
                <Shield className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Quality Assurance</CardTitle>
                <CardDescription>
                  Every variation passes automated checks for layout integrity, brand consistency, mobile responsiveness, and technical safety before going live.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Cross-device layout validation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Brand tone analysis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Mobile preview automation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Test conflict detection
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: 'hsl(var(--grona-teal))', color: 'white' }}>
                  Data-Driven
                </Badge>
                <BarChart3 className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Real-Time Analytics</CardTitle>
                <CardDescription>
                  Clear winner detection, confidence intervals, and suggested next tests—so you always know what's working and what to try next.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: 'hsl(var(--grona-pink))', color: 'white' }}>
                  GDPR Compliant
                </Badge>
                <Lock className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Privacy-first architecture with no personal identifiers captured. Fully compliant with GDPR, CCPA, and enterprise security standards.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  Plug & Play
                </Badge>
                <Puzzle className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Integration Ecosystem</CardTitle>
                <CardDescription>
                  Works seamlessly with GA4, Shopify, Segment, and your existing analytics stack. One script, infinite possibilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit mb-2" variant="secondary">
                  ML-Powered
                </Badge>
                <Brain className="w-10 h-10 mb-2 text-primary" />
                <CardTitle>Predictive Learning</CardTitle>
                <CardDescription>
                  Your site gets smarter over time. Grona learns from every test to predict what will work for different audience segments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Personalization Examples */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Smart Variants for the Right People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Grona finds personalization opportunities for you. It targets by ad source, visitor behavior, geography, device, and product interest. No need to define segments or rules—Grona suggests who to personalize for and what to change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="overflow-hidden" style={{ borderColor: 'hsl(var(--grona-orange))', borderWidth: '2px' }}>
              <CardHeader>
                <CardTitle className="text-lg">NYC Visitor</CardTitle>
                <CardDescription>Sees local delivery option</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium">🗽 Same-day delivery in NYC</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>+12%</strong> conversion in metro areas
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden" style={{ borderColor: 'hsl(var(--grona-teal))', borderWidth: '2px' }}>
              <CardHeader>
                <CardTitle className="text-lg">Email Subscriber</CardTitle>
                <CardDescription>Sees early access offer</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium">✉️ Exclusive early access</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>+15%</strong> click-through from campaigns
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden" style={{ borderColor: 'hsl(var(--grona-pink))', borderWidth: '2px' }}>
              <CardHeader>
                <CardTitle className="text-lg">Returning Viewer</CardTitle>
                <CardDescription>Sees urgency copy</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium">⏰ Limited time offer</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>+18%</strong> conversion on second visit
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden" style={{ borderColor: 'hsl(var(--grona-green))', borderWidth: '2px' }}>
              <CardHeader>
                <CardTitle className="text-lg">Mobile Shopper</CardTitle>
                <CardDescription>Streamlined checkout</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <p className="text-sm font-medium">📱 One-tap checkout</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  <strong>-25%</strong> cart abandonment on mobile
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works - Accordion */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started in minutes, see results in days
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="step-1" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">1</span>
                  Connect Your Site
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pl-11">
                Add one lightweight script to your website. Grona integrates with your existing stack—no migration required. Works with Shopify, WordPress, custom builds, and everything in between.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-2" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">2</span>
                  Set Your Goals
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pl-11">
                Tell Grona what you want to improve through natural language commands or choose from AI-suggested opportunities. The system analyzes your site and recommends high-impact tests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-3" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">3</span>
                  Review & Approve
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pl-11">
                Grona generates test variants, runs safety checks, and shows you previews across devices. You stay in control—nothing goes live without your approval.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-4" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">4</span>
                  Launch & Learn
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pl-11">
                Tests run automatically with intelligent traffic allocation. Grona monitors performance, detects winners with statistical confidence, and rolls out improvements safely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step-5" className="border rounded-lg px-6 bg-background">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">5</span>
                  Continuous Optimization
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-4 pl-11">
                The AI learns from every experiment to suggest better tests over time. Your site becomes a self-optimizing conversion machine.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-20 bg-background">
        <div className="container max-w-5xl">
          <Alert className="mb-8 border-primary/50 bg-primary/5">
            <Shield className="h-5 w-5 text-primary" />
            <AlertDescription className="text-lg font-medium ml-2">
              Enterprise-Grade Security & Compliance
            </AlertDescription>
          </Alert>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Lock className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>GDPR Compliant</CardTitle>
                <CardDescription>
                  No personal data collection, privacy-first design
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>99.9% Uptime</CardTitle>
                <CardDescription>
                  Reliable infrastructure with automatic failover
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Instant Rollback</CardTitle>
                <CardDescription>
                  One-click revert for any experiment
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Version Control</CardTitle>
                <CardDescription>
                  Complete audit trail of all changes
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Team Permissions</CardTitle>
                <CardDescription>
                  Role-based access control
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Puzzle className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>SOC 2 Type II</CardTitle>
                <CardDescription>
                  Enterprise security standards
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Let AI Optimize Your Website?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading teams who ship more experiments, faster—without engineering bottlenecks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Book a Demo
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-sm font-bold">G</span>
              </div>
              <span>grona</span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <Separator className="my-6" />
          <p className="text-center text-sm text-muted-foreground">
            © 2025 Grona. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
