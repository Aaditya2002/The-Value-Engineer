"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, MapPin, DollarSign, Calendar, TrendingUp, Eye, X } from "lucide-react"
import Image from "next/image"

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const filters = ["All", "Commercial", "Residential", "Infrastructure", "Industrial"]

  const projects = [
    {
      id: 1,
      title: "Downtown Commercial Complex",
      type: "Commercial",
      location: "New York, NY",
      value: "$12.4M",
      accuracy: "99.8%",
      savings: "18%",
      timeline: "24 Months",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "A 15-story mixed-use development featuring retail, office, and residential spaces in the heart of Manhattan.",
      challenges: [
        "Complex urban site with limited access",
        "Integration with existing infrastructure",
        "Strict timeline requirements",
        "Multiple stakeholder coordination",
      ],
      solutions: [
        "Detailed logistics planning for material delivery",
        "Phased construction approach",
        "Advanced scheduling optimization",
        "Regular stakeholder communication protocols",
      ],
      results: [
        "Delivered 2 weeks ahead of schedule",
        "Achieved 18% cost savings through value engineering",
        "Zero safety incidents throughout construction",
        "LEED Gold certification achieved",
      ],
    },
    {
      id: 2,
      title: "Luxury Residential Community",
      type: "Residential",
      location: "Atlanta, GA",
      value: "$3.2M",
      accuracy: "99.1%",
      savings: "12%",
      timeline: "18 Months",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
      description: "An exclusive 50-unit luxury townhome community with premium finishes and sustainable features.",
      challenges: [
        "Sloping terrain requiring extensive grading",
        "Premium material sourcing and coordination",
        "Strict architectural design requirements",
        "Environmental protection compliance",
      ],
      solutions: [
        "Advanced grading and drainage design",
        "Strategic material procurement planning",
        "Detailed architectural coordination",
        "Environmental impact mitigation strategies",
      ],
      results: [
        "All units sold before completion",
        "12% cost savings through material optimization",
        "Energy Star certification for all units",
        "Community amenities delivered on budget",
      ],
    },
    {
      id: 3,
      title: "Highway Bridge Reconstruction",
      type: "Infrastructure",
      location: "San Francisco, CA",
      value: "$45.8M",
      accuracy: "99.5%",
      savings: "8%",
      timeline: "36 Months",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Complete reconstruction of a critical highway bridge with seismic upgrades and expanded capacity.",
      challenges: [
        "Maintaining traffic flow during construction",
        "Seismic engineering requirements",
        "Environmental impact considerations",
        "Complex foundation work in marine environment",
      ],
      solutions: [
        "Phased construction with temporary bridges",
        "Advanced seismic isolation systems",
        "Environmental monitoring and protection",
        "Specialized marine construction techniques",
      ],
      results: [
        "Zero traffic accidents during construction",
        "Seismic safety standards exceeded",
        "Environmental compliance maintained",
        "8% savings through innovative construction methods",
      ],
    },
    {
      id: 4,
      title: "Manufacturing Facility Expansion",
      type: "Industrial",
      location: "Detroit, MI",
      value: "$18.7M",
      accuracy: "99.3%",
      savings: "14%",
      timeline: "20 Months",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description:
        "Expansion of automotive manufacturing facility with advanced automation and clean room capabilities.",
      challenges: [
        "Maintaining production during expansion",
        "Clean room construction requirements",
        "Heavy machinery installation coordination",
        "Utility infrastructure upgrades",
      ],
      solutions: [
        "Modular construction approach",
        "Specialized clean room protocols",
        "Coordinated machinery installation schedule",
        "Phased utility system upgrades",
      ],
      results: [
        "Zero production downtime",
        "Clean room standards exceeded",
        "Automation systems integrated successfully",
        "14% cost savings through efficient scheduling",
      ],
    },
    {
      id: 5,
      title: "Corporate Headquarters Renovation",
      type: "Commercial",
      location: "Boston, MA",
      value: "$4.1M",
      accuracy: "98.9%",
      savings: "16%",
      timeline: "14 Months",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      description:
        "Complete renovation of historic corporate headquarters with modern amenities and technology integration.",
      challenges: [
        "Historic building preservation requirements",
        "Occupied building renovation",
        "Technology infrastructure integration",
        "Accessibility compliance upgrades",
      ],
      solutions: [
        "Careful historic preservation planning",
        "Phased renovation with temporary relocations",
        "Advanced technology infrastructure design",
        "ADA compliance integration",
      ],
      results: [
        "Historic character preserved",
        "Modern amenities successfully integrated",
        "LEED Platinum certification achieved",
        "16% savings through strategic material selection",
      ],
    },
    {
      id: 6,
      title: "Luxury High-Rise Condominiums",
      type: "Residential",
      location: "Seattle, WA",
      value: "$85.2M",
      accuracy: "99.7%",
      savings: "11%",
      timeline: "30 Months",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
      description: "42-story luxury condominium tower with panoramic views and premium amenities.",
      challenges: [
        "High-rise construction logistics",
        "Premium finish coordination",
        "Wind load engineering requirements",
        "Luxury amenity space design",
      ],
      solutions: [
        "Advanced crane and logistics planning",
        "Detailed finish scheduling and coordination",
        "Specialized wind engineering analysis",
        "Luxury amenity space optimization",
      ],
      results: [
        "95% pre-sale rate achieved",
        "Premium finishes delivered on schedule",
        "Wind resistance standards exceeded",
        "11% savings through bulk purchasing strategies",
      ],
    },
  ]

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.type === activeFilter)

  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-cream-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Portfolio photos & details will be provided later. For now, contact us for references or case studies.
            </p>
          </motion.div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-pastel-orange-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-soft-orange-600 mb-2">$2.8B</div>
              <div className="text-gray-600">Total Project Value</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-warm-orange-600 mb-2">15%</div>
              <div className="text-gray-600">Average Cost Savings</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-light-orange-600 mb-2">99.2%</div>
              <div className="text-gray-600">Overall Accuracy</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-gray-700 font-medium">Filter by type:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group glass-morphism rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                    >
                      <Eye className="w-5 h-5 text-gray-700" />
                    </button>
                    <div className="absolute top-4 left-4 px-3 py-1 bg-pale-sage-500 text-white rounded-full text-sm font-medium">
                      {project.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="flex items-center text-gray-600 mb-1">
                          <DollarSign className="w-4 h-4 mr-1" />
                          <span className="text-xs">Project Value</span>
                        </div>
                        <div className="font-bold text-pale-sage-600">{project.value}</div>
                      </div>
                      <div>
                        <div className="flex items-center text-gray-600 mb-1">
                          <TrendingUp className="w-4 h-4 mr-1" />
                          <span className="text-xs">Savings</span>
                        </div>
                        <div className="font-bold text-muted-coral-600">{project.savings}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        <Calendar className="w-4 h-4 inline mr-1" />
                        {project.timeline}
                      </div>
                      <div className="text-sm font-medium text-dusty-lavender-600">{project.accuracy} Accuracy</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  width={800}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-pale-sage-500 text-white rounded-full text-sm font-medium">
                  {selectedProject.type}
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{selectedProject.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-pale-sage-600 mb-1">{selectedProject.value}</div>
                    <div className="text-sm text-gray-600">{selectedProject.timeline}</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-4 bg-pale-sage-50 rounded-xl">
                    <div className="text-2xl font-bold text-pale-sage-600 mb-1">{selectedProject.accuracy}</div>
                    <div className="text-sm text-gray-600">Accuracy Rate</div>
                  </div>
                  <div className="text-center p-4 bg-muted-coral-50 rounded-xl">
                    <div className="text-2xl font-bold text-muted-coral-600 mb-1">{selectedProject.savings}</div>
                    <div className="text-sm text-gray-600">Cost Savings</div>
                  </div>
                  <div className="text-center p-4 bg-dusty-lavender-50 rounded-xl">
                    <div className="text-2xl font-bold text-dusty-lavender-600 mb-1">{selectedProject.timeline}</div>
                    <div className="text-sm text-gray-600">Timeline</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge: string, index: number) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start">
                          <div className="w-2 h-2 bg-muted-coral-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Solutions</h3>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution: string, index: number) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start">
                          <div className="w-2 h-2 bg-pale-sage-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Results</h3>
                    <ul className="space-y-2">
                      {selectedProject.results.map((result: string, index: number) => (
                        <li key={index} className="text-gray-600 text-sm flex items-start">
                          <div className="w-2 h-2 bg-dusty-lavender-400 rounded-full mr-3 mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ready to Join Our Success Stories? CTA Section */}
      <section className="py-16 bg-pastel-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Ready to Join Our Success Stories?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Discover how we can help you achieve outstanding results on your next project. Contact us for references or to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="bg-pastel-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pastel-orange-700 transition-colors">
              Get Your Free Sample
            </a>
            <a href="/contact" className="border-2 border-pastel-orange-600 text-pastel-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-pastel-orange-600 hover:text-white transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
