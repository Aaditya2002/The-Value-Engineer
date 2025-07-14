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
  ArrowRight,
  Home,
  Building,
  Factory,
  Wrench,
  PaintBucket,
  Hammer,
  Zap,
  Droplets,
  Trees,
  HardHat,
  Palette,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  const serviceCategories = [
    { id: "all", name: "All Services", icon: Shield },
    { id: "interior", name: "Interior Trades", icon: Home },
    { id: "exterior", name: "Exterior & Structure", icon: Building },
    { id: "mep", name: "MEP Systems", icon: Zap },
    { id: "specialty", name: "Specialty Services", icon: Target },
  ]

  const services = [
    {
      icon: PaintBucket,
      title: "Drywall & Steel Stud Framing",
      description: "Interior & exterior gypsum board systems, load-bearing/non-load-bearing LGSF, fire-rated & moisture-resistant board takeoffs, fasteners, clips, channels, and accessories.",
      category: "interior",
      features: ["Fire-rated systems", "Moisture-resistant boards", "Load calculations", "Hardware schedules"]
    },
    {
      icon: Palette,
      title: "Painting & Coating Estimates",
      description: "Primer, finish coats, specialty coatings, decorative, anti-microbial, and industrial paints, interior & exterior coverage formulas.",
      category: "interior",
      features: ["Surface preparation", "Coverage calculations", "Specialty coatings", "Color specifications"]
    },
    {
      icon: Home,
      title: "Countertop & Cabinet Estimating",
      description: "Quartz, granite, marble, solid surface, edge profiles, cutouts, backsplashes, residential kitchens to commercial casework.",
      category: "interior",
      features: ["Material optimization", "Edge details", "Hardware inclusion", "Installation logistics"]
    },
    {
      icon: HardHat,
      title: "Flooring & Baseboard",
      description: "Tile, carpet, LVT, hardwood, epoxy, underlayment, trims, transitions, room-by-room waste factors.",
      category: "interior",
      features: ["Waste factor analysis", "Transition details", "Substrate preparation", "Pattern layouts"]
    },
    {
      icon: Building,
      title: "Exterior Cladding & Façade",
      description: "ACM, EIFS, fiber cement panels, weather barriers, trims, expansion joints, sub-framing, insulation, sealants.",
      category: "exterior",
      features: ["Weather barrier systems", "Thermal bridging", "Expansion joints", "Sealant schedules"]
    },
    {
      icon: Factory,
      title: "Concrete Estimating",
      description: "Foundations, slabs, structural members, rebar, mesh, and formwork surface area.",
      category: "exterior",
      features: ["Reinforcement schedules", "Formwork calculations", "Mix design specs", "Curing requirements"]
    },
    {
      icon: Wrench,
      title: "Doors, Hardware & Toilet Accessories",
      description: "Hollow metal, wood, aluminum doors, locks, hinges, closers, full hardware sets, toilet partitions, grab bars, mirrors, dispensers, matched to floor plans and hardware schedules.",
      category: "interior",
      features: ["Hardware groups", "ADA compliance", "Security levels", "Finish coordination"]
    },
    {
      icon: Hammer,
      title: "Rough Carpentry",
      description: "Joists, studs, blocking, headers, trusses, roof decking, subflooring, and sheathing.",
      category: "exterior",
      features: ["Structural calculations", "Span tables", "Connection details", "Code compliance"]
    },
    {
      icon: Shield,
      title: "Insulation Estimating",
      description: "Thermal, acoustic, & fire-rated insulation, pipe, duct, slab & roof insulation, cementitious & intumescent fireproofing.",
      category: "exterior",
      features: ["R-value calculations", "Fire ratings", "Acoustic performance", "Vapor barriers"]
    },
    {
      icon: Home,
      title: "Roofing Estimating",
      description: "Shingles, metal, TPO, EPDM, BUR, underlayment, flashing, drainage systems.",
      category: "exterior",
      features: ["Slope calculations", "Drainage design", "Flashing details", "Wind uplift ratings"]
    },
    {
      icon: Droplets,
      title: "Plumbing Estimating",
      description: "Fixtures, fittings, linear pipe footage, schedules for water supply, drainage, and venting.",
      category: "mep",
      features: ["Hydraulic calculations", "Pipe sizing", "Fixture units", "Pressure loss analysis"]
    },
    {
      icon: Zap,
      title: "HVAC Estimating",
      description: "AHUs, RTUs, chillers, ductwork, piping, insulation, supports, accessories.",
      category: "mep",
      features: ["Load calculations", "Duct sizing", "Equipment selection", "Control systems"]
    },
    {
      icon: Trees,
      title: "Landscaping Estimating",
      description: "Turf, gravel, planting, hardscape materials, irrigation & drainage quantities.",
      category: "specialty",
      features: ["Plant schedules", "Irrigation zones", "Hardscape patterns", "Drainage systems"]
    },
    {
      icon: Zap,
      title: "Electrical Estimating",
      description: "Lighting, power, low-voltage systems, wire lengths, panel boards, conduits, fixture counts, load calculations.",
      category: "mep",
      features: ["Load analysis", "Panel schedules", "Conduit fills", "Circuit design"]
    },
    {
      icon: FileText,
      title: "Drafting Services",
      description: "2D CAD drafting (architectural, structural), as-built & permit-ready drawings, sketch-to-drawing conversion.",
      category: "specialty",
      features: ["CAD standards", "Layer management", "Annotation details", "Plot layouts"]
    },
    {
      icon: Target,
      title: "Shop Drawings",
      description: "Fabrication drawings: drywall, doors, hardware, submittal-ready formats with markups.",
      category: "specialty",
      features: ["Fabrication details", "Material lists", "Installation notes", "Quality standards"]
    },
    {
      icon: Award,
      title: "3D Rendering & Visualization",
      description: "Interior & exterior 3D models, concept walkthroughs & photo-realistic renderings.",
      category: "specialty",
      features: ["Photo-realistic rendering", "Virtual walkthroughs", "Material visualization", "Lighting simulation"]
    },
  ]

  const processSteps = [
    {
      step: "1",
      title: "Project Analysis",
      description: "We review your drawings, specifications, and requirements to understand project scope and complexity."
    },
    {
      step: "2",
      title: "Custom Setup",
      description: "We configure our estimating tools to match your preferred formats, divisions, and naming conventions."
    },
    {
      step: "3",
      title: "Detailed Takeoff",
      description: "Our experts perform precise quantity takeoffs using industry-leading software and proven methodologies."
    },
    {
      step: "4",
      title: "Quality Review",
      description: "Every estimate undergoes thorough review and verification to ensure accuracy and completeness."
    },
    {
      step: "5",
      title: "Delivery",
      description: "You receive your estimate in your preferred format, ready to integrate into your bidding process."
    }
  ]

  const customizationOptions = [
    {
      icon: FileText,
      title: "Template Formats",
      items: ["Excel spreadsheets", "PlanSwift databases", "Bluebeam markups", "Custom formats"]
    },
    {
      icon: BarChart3,
      title: "Division Structures",
      items: ["CSI MasterFormat", "NRM standards", "Custom divisions", "Trade-specific breakdowns"]
    },
    {
      icon: Target,
      title: "Detail Levels",
      items: ["Room-by-room breakdown", "Floor-by-floor analysis", "Phase-based estimating", "Trade separations"]
    },
    {
      icon: Clock,
      title: "Delivery Options",
      items: ["24-hour rush service", "Standard 48-72 hours", "Milestone-based delivery", "Weekly updates"]
    }
  ]

  const faqs = [
    {q: 'Do you include labor or material pricing in the estimates?', a: 'No. We only provide quantities. You can apply your own pricing as per vendor or region.'},
    {q: 'What types of projects do you work on?', a: 'We cover residential, commercial, and industrial projects of all sizes and complexities.'},
    {q: 'Which trades do you cover?', a: 'We handle almost all construction trades from structural and architectural to MEP systems and specialty work.'},
    {q: 'How do I get started?', a: 'Simply upload your project files through our quote form or contact us directly. We\'ll handle the rest.'},
    {q: 'Can I request a sample before committing?', a: 'Yes, we offer a complimentary sample estimate so you can evaluate our quality and approach.'},
    {q: 'What estimating software do you use?', a: 'We use industry-standard tools including PlanSwift, OST, Bluebeam, and Excel, adapting to your preferred platform.'},
    {q: 'Can you work with our existing templates?', a: 'Absolutely. We customize our deliverables to match your templates, formats, and naming conventions.'},
    {q: 'Do you handle international projects?', a: 'Yes, we serve clients in the USA, Canada, UK, and Australia, working with both Imperial and Metric units.'},
    {q: 'What about change orders and addenda?', a: 'We can estimate changes and provide comparison analysis against your original estimate to show impact.'},
    {q: 'Do you participate in project meetings?', a: 'Yes, we\'re available for coordination meetings via Zoom or other platforms as needed.'},
  ]

  const filteredServices = activeCategory === "all" 
    ? services 
    : services.filter(service => service.category === activeCategory)

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
              Comprehensive <span className="text-gradient">Estimating Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto leading-relaxed mb-8">
              From foundation to finish, we provide precise quantity takeoffs for every trade and construction phase
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-pastel-orange-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Get Free Sample
                <ArrowRight className="ml-2 w-5 h-5" />
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

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-lg text-gray-600">Explore our services by trade category</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-pastel-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group glass-morphism rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-12 h-12 bg-pastel-orange-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                  <div className="space-y-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-500">
                        <CheckCircle className="w-3 h-3 text-pastel-orange-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-cream-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we deliver accurate estimates every time</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-pastel-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.step}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fully Customizable</h2>
            <p className="text-lg text-gray-600">We adapt to your workflow, not the other way around</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customizationOptions.map((option, index) => (
              <div key={index} className="bg-cream-orange-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-pastel-orange-400 rounded-xl flex items-center justify-center mb-4">
                  <option.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-4">{option.title}</h3>
                <ul className="space-y-2">
                  {option.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 text-pastel-orange-500 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-cream-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Everything you need to know about our services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-lg">
                <button
                  className="w-full flex justify-between items-start text-left focus:outline-none"
                  onClick={() => setOpenFaq(openFaq === `${idx}` ? null : `${idx}`)}
                  aria-expanded={openFaq === `${idx}`}
                >
                  <div>
                    <h3 className="font-semibold text-base text-pastel-orange-600 mb-2">
                      {faq.q}
                    </h3>
                    <AnimatePresence>
                      {openFaq === `${idx}` && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-gray-700 text-sm"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-pastel-orange-600 flex-shrink-0 ml-2 transition-transform duration-300 ${
                      openFaq === `${idx}` ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pastel-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Experience the precision and reliability that industry leaders trust for their most important projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-white text-pastel-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get Your Free Sample
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-pastel-orange-600 transition-all duration-300"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage