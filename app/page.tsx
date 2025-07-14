"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calculator, Target, Award, TrendingUp, Users, Shield, Clock, Star } from "lucide-react"
import Image from "next/image"

const HomePage = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    accuracy: 0,
    savings: 0,
    clients: 0,
  })

  useEffect(() => {
    const animateCounters = () => {
      const targets = { projects: 500, accuracy: 99.2, savings: 15, clients: 250 }
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounters({
          projects: Math.floor(targets.projects * progress),
          accuracy: Math.floor(targets.accuracy * progress * 10) / 10,
          savings: Math.floor(targets.savings * progress),
          clients: Math.floor(targets.clients * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounters(targets)
        }
      }, stepTime)
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters()
        observer.disconnect()
      }
    })

    const statsElement = document.getElementById("stats-section")
    if (statsElement) observer.observe(statsElement)

    return () => observer.disconnect()
  }, [])

  const coreServices = [
    {
      icon: Calculator,
      title: "Quantity Takeoffs",
      description: "Precise material calculations with advanced tools",
      highlight: "Most Popular"
    },
    {
      icon: Target,
      title: "Value Engineering",
      description: "Optimize costs through systematic analysis",
      highlight: "High ROI"
    },
    {
      icon: TrendingUp,
      title: "Multi-Trade Estimating",
      description: "Complete estimates across all construction trades",
      highlight: "Comprehensive"
    },
  ]

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          poster="/placeholder.jpg"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              We are selling <span className="text-gradient">peace of mind</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-4 max-w-3xl mx-auto leading-relaxed">
              Your Scope. Your Format. Your Timeline. We Estimate It All.<br/>
              Your trade. Your workflow. Our expertise.<br/>
              You Build. We Back You Up.
            </p>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Trusted Estimating Partner for Modern Construction
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/quote"
              className="group bg-pastel-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Request Free Sample
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="glass-morphism text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600">Numbers that speak to our commitment to excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-pastel-orange-600 mb-2">{counters.projects}+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-soft-orange-600 mb-2">{counters.accuracy}%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-warm-orange-600 mb-2">{counters.savings}%</div>
              <div className="text-gray-600 font-medium">Average Savings</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-light-orange-600 mb-2">24hr</div>
              <div className="text-gray-600 font-medium">Turnaround Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-cream-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide custom construction estimating services that integrate seamlessly with your existing workflow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-morphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              >
                <div className="absolute -top-3 -right-3 bg-pastel-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {service.highlight}
                </div>
                <div className="w-16 h-16 bg-pastel-orange-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-pastel-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Explore All Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose The Value Engineering</h2>
            <p className="text-lg text-gray-600">The key advantages that make us your ideal estimating partner</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-pastel-orange-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Custom Workflow</h3>
              <p className="text-gray-600">We adapt to your templates, formats, and processes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-pastel-orange-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Field-smart estimators who understand construction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-pastel-orange-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">24-hour turnaround to meet tight deadlines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pastel-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-pastel-orange-600" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">Risk-Free Trial</h3>
              <p className="text-gray-600">Free sample project to test our quality</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center text-pastel-orange-600 font-semibold text-lg hover:text-pastel-orange-700 transition-colors"
            >
              Learn More About Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-pastel-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">Simple process, exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-pastel-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Submit Your Project</h3>
              <p className="text-gray-600">Send us your drawings, specs, and requirements. We'll handle the rest.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pastel-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">We Estimate</h3>
              <p className="text-gray-600">Our experts create accurate takeoffs using your preferred formats and tools.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-pastel-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">You Win Bids</h3>
              <p className="text-gray-600">Receive accurate estimates that help you bid confidently and win more projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Work Speaks</h2>
            <p className="text-lg text-gray-600">From residential homes to commercial complexes, see our precision in action</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-cream-orange-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pastel-orange-600 mb-2">Residential</div>
              <p className="text-gray-600">Custom homes, renovations, and multi-family projects</p>
            </div>
            <div className="bg-cream-orange-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pastel-orange-600 mb-2">Commercial</div>
              <p className="text-gray-600">Office buildings, retail spaces, and warehouses</p>
            </div>
            <div className="bg-cream-orange-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-pastel-orange-600 mb-2">Industrial</div>
              <p className="text-gray-600">Manufacturing facilities and specialized structures</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center bg-pastel-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Our Portfolio
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free Sample CTA Section */}
      <section className="py-20 bg-cream-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Try Us Risk-Free</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Experience our service quality with a complimentary sample estimate. No commitment, no cost—just quality you can trust.
          </p>
          <Link href="/quote" className="bg-pastel-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-block">
            Get Your Free Sample
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-pastel-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build with Confidence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful contractors who trust us with their most important projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your Quote Now
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage