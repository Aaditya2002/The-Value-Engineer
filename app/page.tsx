"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle, Calculator, Target, Award, TrendingUp } from "lucide-react"
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

  const services = [
    {
      icon: Calculator,
      title: "Civil Estimating",
      description: "Comprehensive cost analysis for civil engineering projects",
      price: "From $2,500",
      features: ["Earthwork calculations", "Utilities planning", "Infrastructure development"],
    },
    {
      icon: Target,
      title: "Quantity Takeoffs",
      description: "Precise material quantity calculations using advanced tools",
      price: "From $1,800",
      features: ["Bluebeam integration", "PlanSwift analysis", "AutoCAD compatibility"],
    },
    {
      icon: TrendingUp,
      title: "Value Engineering",
      description: "Optimize project value through systematic analysis",
      price: "From $4,500",
      features: ["Material alternatives", "Method optimization", "Cost reduction strategies"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Construction site background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-dusty-lavender-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted-coral-200/30 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6">
              Precision You Can <span className="text-gradient">Build On</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional construction estimating services trusted by developers and contractors across 500+ successful
              projects
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
              className="group bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              Get Instant Quote
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="glass-morphism text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </motion.div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="glass-morphism rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-muted-coral-500 mr-2" />
              <span className="text-muted-coral-600 font-medium">Featured Project</span>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-6">
              <div className="flex-1">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Downtown Commercial Complex</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-pale-sage-600">$12.4M</div>
                    <div className="text-gray-600">Project Value</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-muted-coral-600">99.8%</div>
                    <div className="text-gray-600">Accuracy Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-dusty-lavender-600">18%</div>
                    <div className="text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              <div className="relative w-full lg:w-64 h-48 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Downtown Commercial Complex"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-pale-sage-600 mb-2">{counters.projects}+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-muted-coral-600 mb-2">{counters.accuracy}%</div>
              <div className="text-gray-600 font-medium">Accuracy Rate</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-dusty-lavender-600 mb-2">{counters.savings}%</div>
              <div className="text-gray-600 font-medium">Average Savings</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-mist-blue-600 mb-2">24hr</div>
              <div className="text-gray-600 font-medium">Turnaround Time</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-warm-beige-50 to-pale-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive construction estimating solutions designed to save you time, money, and eliminate costly
              surprises
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group glass-morphism rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-2xl font-bold text-pale-sage-600 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-pale-sage-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="inline-flex items-center text-pale-sage-600 font-medium hover:text-pale-sage-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pale-sage-500 via-muted-coral-500 to-dusty-lavender-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Build with Confidence?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ successful projects and experience the precision that industry leaders trust
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your Quote Now
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
