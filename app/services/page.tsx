"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Calculator,
  Target,
  TrendingUp,
  Shield,
  BarChart3,
  FileText,
  CheckCircle,
  Clock,
  Award,
  ChevronDown,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const ServicesPage = () => {
  const [activeService, setActiveService] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const services = [
    {
      id: "civil",
      icon: Calculator,
      title: "Civil Estimating",
      subtitle: "Comprehensive Infrastructure Analysis",
      price: "From $2,500",
      accuracy: "99.5%",
      turnaround: "3-5 days",
      description:
        "Comprehensive cost analysis for civil engineering projects including earthwork, utilities, and infrastructure development.",
      features: [
        "Earthwork calculations and grading analysis",
        "Utilities planning and cost estimation",
        "Infrastructure development budgeting",
        "Site preparation and access roads",
        "Drainage and stormwater management",
        "Environmental compliance costs",
      ],
      process: [
        "Project Analysis - Comprehensive review of plans and specifications",
        "Site Assessment - Evaluation of existing conditions and constraints",
        "Quantity Calculation - Precise measurement and quantification",
        "Cost Analysis - Market-based pricing and labor calculations",
        "Report Delivery - Detailed estimate with breakdown and recommendations",
      ],
      applications: [
        { type: "Residential Development", price: "Starting at $2,500" },
        { type: "Commercial Projects", price: "Starting at $4,200" },
        { type: "Infrastructure Projects", price: "Starting at $5,800" },
      ],
    },
    {
      id: "quantity",
      icon: Target,
      title: "Quantity Takeoffs",
      subtitle: "Precision Material Calculations",
      price: "From $1,800",
      accuracy: "99.8%",
      turnaround: "2-3 days",
      description: "Precise material quantity calculations using advanced digital tools and industry-leading software.",
      features: [
        "Bluebeam Revu integration and markup",
        "PlanSwift digital takeoff analysis",
        "AutoCAD compatibility and import",
        "Excel and CSV export formats",
        "Material categorization and sorting",
        "Waste factor calculations",
      ],
      process: [
        "Plan Review - Digital import and quality verification",
        "Measurement Setup - Scale verification and layer organization",
        "Quantity Extraction - Automated and manual measurement",
        "Categorization - Material sorting and classification",
        "Quality Check - Accuracy verification and validation",
        "Delivery - Multiple format export and documentation",
      ],
      applications: [
        { type: "Concrete & Masonry", price: "Starting at $1,800" },
        { type: "Steel & Structural", price: "Starting at $2,200" },
        { type: "MEP Systems", price: "Starting at $2,800" },
      ],
    },
    {
      id: "cost-planning",
      icon: BarChart3,
      title: "Cost Planning",
      subtitle: "Strategic Budget Development",
      price: "From $3,200",
      accuracy: "99.3%",
      turnaround: "5-7 days",
      description: "Strategic budget development and cost control throughout the project lifecycle.",
      features: [
        "Financial projections and forecasting",
        "Milestone-based budget tracking",
        "Cash flow analysis and planning",
        "Contingency planning and risk buffers",
        "Value engineering opportunities",
        "Cost control recommendations",
      ],
      process: [
        "Project Scope - Detailed requirements analysis",
        "Budget Framework - Cost structure development",
        "Market Analysis - Current pricing research",
        "Financial Modeling - Projection and scenario planning",
        "Risk Assessment - Contingency and buffer planning",
        "Implementation - Tracking and control systems",
      ],
      applications: [
        { type: "Design Phase Planning", price: "Starting at $3,200" },
        { type: "Construction Budgeting", price: "Starting at $4,500" },
        { type: "Lifecycle Cost Analysis", price: "Starting at $5,200" },
      ],
    },
    {
      id: "value-engineering",
      icon: TrendingUp,
      title: "Value Engineering",
      subtitle: "Systematic Value Optimization",
      price: "From $4,500",
      accuracy: "99.1%",
      turnaround: "1-2 weeks",
      description: "Optimize project value through systematic analysis of materials, methods, and design alternatives.",
      features: [
        "Material alternative analysis",
        "Construction method optimization",
        "Design efficiency improvements",
        "Cost-benefit analysis",
        "Performance vs. cost evaluation",
        "Implementation recommendations",
      ],
      process: [
        "Information Phase - Data gathering and analysis",
        "Function Analysis - Purpose and requirement evaluation",
        "Creative Phase - Alternative solution development",
        "Evaluation Phase - Cost-benefit analysis",
        "Development Phase - Detailed solution design",
        "Presentation Phase - Recommendation and implementation",
      ],
      applications: [
        { type: "Design Optimization", price: "Starting at $4,500" },
        { type: "Material Selection", price: "Starting at $3,800" },
        { type: "Method Analysis", price: "Starting at $5,200" },
      ],
    },
    {
      id: "risk",
      icon: Shield,
      title: "Risk Assessment",
      subtitle: "Proactive Risk Management",
      price: "From $2,800",
      accuracy: "99.4%",
      turnaround: "3-4 days",
      description: "Identify potential cost overruns and develop mitigation strategies to protect your budget.",
      features: [
        "Cost overrun identification",
        "Schedule impact analysis",
        "Market volatility assessment",
        "Contingency planning",
        "Mitigation strategy development",
        "Risk monitoring systems",
      ],
      process: [
        "Risk Identification - Comprehensive threat analysis",
        "Probability Assessment - Likelihood evaluation",
        "Impact Analysis - Cost and schedule effects",
        "Risk Prioritization - Critical risk ranking",
        "Mitigation Planning - Strategy development",
        "Monitoring Setup - Ongoing risk tracking",
      ],
      applications: [
        { type: "Pre-Construction Risk", price: "Starting at $2,800" },
        { type: "Market Risk Analysis", price: "Starting at $3,500" },
        { type: "Schedule Risk Assessment", price: "Starting at $4,200" },
      ],
    },
    {
      id: "analysis",
      icon: FileText,
      title: "Project Analysis",
      subtitle: "Comprehensive Project Evaluation",
      price: "From $3,800",
      accuracy: "99.2%",
      turnaround: "1-2 weeks",
      description: "In-depth project evaluation and feasibility studies with optimization recommendations.",
      features: [
        "Feasibility study development",
        "Cost-benefit analysis",
        "ROI calculations and projections",
        "Market analysis and positioning",
        "Optimization recommendations",
        "Implementation roadmaps",
      ],
      process: [
        "Project Definition - Scope and objective clarification",
        "Market Research - Industry and location analysis",
        "Financial Modeling - Cost and revenue projections",
        "Feasibility Assessment - Viability evaluation",
        "Optimization Analysis - Improvement opportunities",
        "Report Generation - Comprehensive documentation",
      ],
      applications: [
        { type: "Feasibility Studies", price: "Starting at $3,800" },
        { type: "Investment Analysis", price: "Starting at $4,500" },
        { type: "Portfolio Evaluation", price: "Starting at $5,800" },
      ],
    },
  ]

  const faqs = [
    {
      id: "accuracy",
      question: "How do you achieve 99%+ accuracy rates?",
      answer:
        "Our accuracy comes from a combination of advanced digital tools, experienced estimators, and rigorous quality control processes. We use industry-leading software like Bluebeam and PlanSwift, maintain current market pricing databases, and implement multi-level review processes for every estimate.",
    },
    {
      id: "turnaround",
      question: "Can you meet tight project deadlines?",
      answer:
        "Yes, we offer expedited services for urgent projects. Our standard turnaround is 3-5 days, but we can deliver estimates in 24-48 hours for rush projects. We maintain a team of dedicated estimators to handle varying workloads and tight deadlines.",
    },
    {
      id: "software",
      question: "What software and tools do you use?",
      answer:
        "We use industry-standard tools including Bluebeam Revu, PlanSwift, AutoCAD, Revit, and custom Excel templates. Our estimators are certified in multiple platforms and stay current with the latest technology to ensure accuracy and efficiency.",
    },
    {
      id: "pricing",
      question: "How is your pricing structured?",
      answer:
        "Our pricing is based on project complexity, size, and timeline requirements. We offer transparent, fixed-price quotes with no hidden fees. Most projects range from $1,800 to $15,000+, with enterprise solutions priced individually based on scope.",
    },
    {
      id: "revisions",
      question: "Do you provide revisions if project scope changes?",
      answer:
        "Yes, we provide one round of minor revisions at no additional cost. For significant scope changes or multiple revision rounds, we offer competitive rates for additional work. We work closely with clients to ensure estimates meet their evolving needs.",
    },
    {
      id: "formats",
      question: "What formats do you deliver estimates in?",
      answer:
        "We deliver estimates in multiple formats including detailed PDF reports, Excel spreadsheets, CSV files, and XML for integration with project management software. All estimates include comprehensive breakdowns, assumptions, and recommendations.",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1526&q=80"
            alt="Construction services background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive construction estimating solutions designed to save you time, money, and eliminate costly
              surprises
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group glass-morphism rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                  activeService === service.id
                    ? "ring-2 ring-pale-sage-500 shadow-xl"
                    : "hover:shadow-xl hover:-translate-y-1"
                }`}
                onClick={() => setActiveService(activeService === service.id ? null : service.id)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pale-sage-600">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.turnaround}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{service.description}</p>

                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-muted-coral-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{service.accuracy} Accuracy</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 text-dusty-lavender-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{service.turnaround}</span>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: activeService === service.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {activeService === service.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 pt-6"
                    >
                      {/* Features */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-pale-sage-500 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Process */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Our Process:</h4>
                        <div className="space-y-2">
                          {service.process.map((step, stepIndex) => (
                            <div key={stepIndex} className="flex items-start">
                              <div className="w-6 h-6 bg-pale-sage-100 text-pale-sage-600 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                                {stepIndex + 1}
                              </div>
                              <span className="text-gray-600 text-sm">{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Applications */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Pricing by Application:</h4>
                        <div className="space-y-2">
                          {service.applications.map((app) => (
                            <div
                              key={app.type}
                              className="flex justify-between items-center py-2 px-3 bg-gray-50 rounded-lg"
                            >
                              <span className="text-gray-700 text-sm font-medium">{app.type}</span>
                              <span className="text-pale-sage-600 font-semibold text-sm">{app.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href="/quote"
                        className="inline-flex items-center bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        Get Quote for {service.title}
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-warm-beige-50 to-pale-sage-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our estimating services</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-morphism rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <motion.div animate={{ rotate: openFaq === faq.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pale-sage-500 via-muted-coral-500 to-dusty-lavender-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Choose the service that fits your project needs and get a detailed quote in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Instant Quote
              </Link>
              <Link
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
