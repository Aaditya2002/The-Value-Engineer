"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Phone,
  Video,
  MapPin,
  Mail,
  Clock,
  DollarSign,
  Building,
  Home,
  Factory,
  Truck,
} from "lucide-react"
import Image from "next/image"

const QuotePage = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    projectType: "",
    projectSize: "",
    timeline: "",
    budget: "",
    location: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    description: "",
  })
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null)
  const [selectedConsultation, setSelectedConsultation] = useState("")

  const totalSteps = 4

  const projectTypes = [
    { id: "residential", name: "Residential", icon: Home, multiplier: 1.0 },
    { id: "commercial", name: "Commercial", icon: Building, multiplier: 1.2 },
    { id: "infrastructure", name: "Infrastructure", icon: Truck, multiplier: 1.5 },
    { id: "industrial", name: "Industrial", icon: Factory, multiplier: 1.3 },
  ]

  const projectSizes = [
    { id: "small", name: "Under 5,000 sq ft", basePrice: 2500 },
    { id: "medium", name: "5,000 - 25,000 sq ft", basePrice: 5000 },
    { id: "large", name: "25,000 - 100,000 sq ft", basePrice: 12000 },
    { id: "xlarge", name: "Over 100,000 sq ft", basePrice: 25000 },
  ]

  const timelines = [
    { id: "rush", name: "Rush (24-48hr)", multiplier: 1.5 },
    { id: "standard", name: "Standard (3-5 days)", multiplier: 1.0 },
    { id: "detailed", name: "Detailed (1-2 weeks)", multiplier: 0.8 },
  ]

  const budgetRanges = [
    { id: "under500k", name: "Under $500K", multiplier: 0.8 },
    { id: "500k-2m", name: "$500K - $2M", multiplier: 1.0 },
    { id: "2m-10m", name: "$2M - $10M", multiplier: 1.2 },
    { id: "over10m", name: "Over $10M", multiplier: 1.5 },
  ]

  const consultationTypes = [
    {
      id: "phone",
      name: "Phone Consultation",
      duration: "30 minutes",
      price: "Free",
      icon: Phone,
      description: "Quick discussion about your project needs and our services",
    },
    {
      id: "video",
      name: "Video Conference",
      duration: "45 minutes",
      price: "Free",
      icon: Video,
      description: "Detailed review of plans and comprehensive project discussion",
    },
    {
      id: "onsite",
      name: "On-site Visit",
      duration: "2 hours",
      price: "$200",
      icon: MapPin,
      description: "In-person site evaluation and detailed project assessment (credited to project)",
    },
  ]

  const calculateEstimate = () => {
    const projectType = projectTypes.find((t) => t.id === formData.projectType)
    const projectSize = projectSizes.find((s) => s.id === formData.projectSize)
    const timeline = timelines.find((t) => t.id === formData.timeline)
    const budget = budgetRanges.find((b) => b.id === formData.budget)

    if (projectType && projectSize && timeline && budget) {
      const basePrice = projectSize.basePrice
      const estimate = basePrice * projectType.multiplier * timeline.multiplier * budget.multiplier
      setEstimatedCost(Math.round(estimate))
    }
  }

  const nextStep = () => {
    if (currentStep === 3) {
      calculateEstimate()
    }
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.projectSize
      case 2:
        return formData.timeline && formData.budget
      case 3:
        return formData.name && formData.email && formData.phone
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1511&q=80"
            alt="Construction quote background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
              Get Your <span className="text-gradient">Instant Quote</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              Professional construction estimates in minutes. Answer a few questions and receive a detailed quote
              tailored to your project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                      i + 1 <= currentStep
                        ? "bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {i + 1 < currentStep ? <CheckCircle className="w-5 h-5" /> : i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div
                      className={`w-16 h-1 mx-2 transition-all duration-300 ${
                        i + 1 < currentStep ? "bg-gradient-to-r from-pale-sage-500 to-muted-coral-500" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
          </div>

          {/* Form Steps */}
          <div className="glass-morphism rounded-2xl p-8 mb-8">
            <AnimatePresence mode="wait">
              {/* Step 1: Project Type & Size */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
                    Tell us about your project
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Type</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {projectTypes.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => updateFormData("projectType", type.id)}
                          className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                            formData.projectType === type.id
                              ? "border-pale-sage-500 bg-pale-sage-50"
                              : "border-gray-200 hover:border-pale-sage-300"
                          }`}
                        >
                          <type.icon className="w-8 h-8 mx-auto mb-2 text-pale-sage-600" />
                          <div className="font-medium text-gray-900">{type.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Size</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {projectSizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => updateFormData("projectSize", size.id)}
                          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                            formData.projectSize === size.id
                              ? "border-pale-sage-500 bg-pale-sage-50"
                              : "border-gray-200 hover:border-pale-sage-300"
                          }`}
                        >
                          <div className="font-medium text-gray-900">{size.name}</div>
                          <div className="text-sm text-gray-600">Starting at ${size.basePrice.toLocaleString()}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Timeline & Budget */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">
                    Timeline & Budget Details
                  </h2>

                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferred Timeline</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {timelines.map((timeline) => (
                        <button
                          key={timeline.id}
                          onClick={() => updateFormData("timeline", timeline.id)}
                          className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                            formData.timeline === timeline.id
                              ? "border-muted-coral-500 bg-muted-coral-50"
                              : "border-gray-200 hover:border-muted-coral-300"
                          }`}
                        >
                          <Clock className="w-6 h-6 mx-auto mb-2 text-muted-coral-600" />
                          <div className="font-medium text-gray-900">{timeline.name}</div>
                          {timeline.multiplier > 1 && (
                            <div className="text-xs text-muted-coral-600 mt-1">
                              +{((timeline.multiplier - 1) * 100).toFixed(0)}% fee
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Budget Range</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget.id}
                          onClick={() => updateFormData("budget", budget.id)}
                          className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                            formData.budget === budget.id
                              ? "border-dusty-lavender-500 bg-dusty-lavender-50"
                              : "border-gray-200 hover:border-dusty-lavender-300"
                          }`}
                        >
                          <DollarSign className="w-6 h-6 mx-auto mb-2 text-dusty-lavender-600" />
                          <div className="font-medium text-gray-900">{budget.name}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact Information */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6 text-center">Contact Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => updateFormData("name", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData("company", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="ABC Construction"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Location</label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => updateFormData("location", e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="New York, NY"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
                      <textarea
                        value={formData.description}
                        onChange={(e) => updateFormData("description", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                        placeholder="Brief description of your project..."
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Quote Results */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Your Estimate is Ready!</h2>
                    <div className="text-5xl font-bold text-gradient mb-2">${estimatedCost?.toLocaleString()}</div>
                    <p className="text-gray-600">Estimated cost for your construction estimating services</p>
                  </div>

                  <div className="bg-gradient-to-r from-pale-sage-50 to-muted-coral-50 rounded-xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4">Quote Summary</h3>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Project Type:</span>
                        <span className="ml-2 font-medium">
                          {projectTypes.find((t) => t.id === formData.projectType)?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Project Size:</span>
                        <span className="ml-2 font-medium">
                          {projectSizes.find((s) => s.id === formData.projectSize)?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Timeline:</span>
                        <span className="ml-2 font-medium">
                          {timelines.find((t) => t.id === formData.timeline)?.name}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Budget Range:</span>
                        <span className="ml-2 font-medium">
                          {budgetRanges.find((b) => b.id === formData.budget)?.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="text-gray-600 mb-6">
                      This is a preliminary estimate. For a detailed quote, schedule a consultation with our experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button className="bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                        Accept Quote & Continue
                      </button>
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-pale-sage-500 hover:text-pale-sage-600 transition-all duration-300"
                      >
                        Start Over
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          {currentStep < 4 && (
            <div className="flex justify-between">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  currentStep === 1
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-gray-700 hover:text-pale-sage-600 hover:bg-pale-sage-50"
                }`}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous
              </button>
              <button
                onClick={nextStep}
                disabled={!isStepValid()}
                className={`flex items-center px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                  isStepValid()
                    ? "bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white hover:shadow-lg transform hover:scale-105"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {currentStep === 3 ? "Get Quote" : "Next"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Consultation Options */}
      <section className="py-20 bg-gradient-to-br from-warm-beige-50 to-pale-sage-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Schedule a <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized guidance from our construction estimating experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((consultation, index) => (
              <motion.div
                key={consultation.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`glass-morphism rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${
                  selectedConsultation === consultation.id ? "ring-2 ring-pale-sage-500" : ""
                }`}
                onClick={() => setSelectedConsultation(consultation.id)}
              >
                <div className="w-16 h-16 luxury-gradient rounded-xl flex items-center justify-center mx-auto mb-6">
                  <consultation.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">{consultation.name}</h3>
                <div className="text-lg font-semibold text-pale-sage-600 mb-2">{consultation.price}</div>
                <div className="text-gray-600 mb-4">{consultation.duration}</div>
                <p className="text-gray-600 mb-6">{consultation.description}</p>
                <button className="w-full bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                  Book Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to start your project? Contact us directly for immediate assistance.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-pale-sage-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-pale-sage-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">(555) 123-4567</div>
                    <div className="text-gray-600">Mon-Fri: 7AM-7PM EST</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-muted-coral-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-muted-coral-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">quotes@valueengineerpro.com</div>
                    <div className="text-gray-600">Response within 2 hours</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-dusty-lavender-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-dusty-lavender-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">123 Construction Ave, Suite 456</div>
                    <div className="text-gray-600">New York, NY 10001</div>
                    <div className="text-sm text-gray-500 mt-1">By appointment only, free parking available</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-morphism rounded-2xl p-8"
            >
              <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500">
                  <option>Select Service</option>
                  <option>Civil Estimating</option>
                  <option>Quantity Takeoffs</option>
                  <option>Cost Planning</option>
                  <option>Value Engineering</option>
                  <option>Risk Assessment</option>
                  <option>Project Analysis</option>
                </select>
                <textarea
                  rows={4}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
                />
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuotePage
