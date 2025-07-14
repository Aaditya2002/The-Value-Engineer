"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, Users, Target, TrendingUp, ChevronLeft, ChevronRight, Star, Quote, Check, Globe } from "lucide-react"
import Image from "next/image"

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-0">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-8">Who We Are</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At The Value Engineering, we bridge the gap between precision and performance. We're not just a team of estimators – we're construction professionals who understand how real-world building decisions start on the drawing board.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-pastel-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Quote className="w-12 h-12 text-pastel-orange-600 mx-auto mb-6" />
              <p className="text-2xl text-gray-700 font-medium italic mb-6">
                "We are selling peace of mind."
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                When you know your estimates are accurate, formatted your way, and delivered on time, you can focus on what really matters: building. Because when you work with The Value Engineering, you're not just outsourcing—you're upgrading.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-pastel-orange-50 rounded-xl p-8 shadow-lg text-center">
              <Target className="w-12 h-12 text-pastel-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Mirror Your Workflow</h3>
              <p className="text-gray-700">
                CSI divisions, custom cost codes, your templates. We adapt to your existing processes seamlessly.
              </p>
                  </div>
            <div className="bg-pastel-orange-50 rounded-xl p-8 shadow-lg text-center">
              <Users className="w-12 h-12 text-pastel-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Extension of Your Team</h3>
              <p className="text-gray-700">
                No overhead, no training, no compromise. Just plug and play with your remote estimating department.
              </p>
                </div>
            <div className="bg-pastel-orange-50 rounded-xl p-8 shadow-lg text-center">
              <Globe className="w-12 h-12 text-pastel-orange-600 mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Global Reach</h3>
              <p className="text-gray-700">
                Serving clients across the US, Canada, UK, and Australia with consistent quality and reliability.
              </p>
                </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-12">Why Choose The Value Engineering</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Excellence */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-pastel-orange-600 mb-6 text-center">Service Excellence</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom Estimating Support – Designed to fit your workflow</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Tailored to Your Process – Templates, naming, cost codes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Multi-Trade Expertise – Drywall to electrical, we handle all</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Custom Deliverables – Excel, Bluebeam, PlanSwift, PDFs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Fast Turnarounds – Meet tight bidding deadlines</span>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="font-serif text-2xl font-bold text-pastel-orange-600 mb-6 text-center">Value Proposition</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Team for the Price of One – Your remote estimating department</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Field-Smart Estimators – We understand what we measure</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Responsive Communication – Email, WhatsApp, Zoom</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">No Upfront Risk – Free sample project available</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-pastel-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Accuracy You Can Count On – Every quantity is double-checked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-pastel-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-gray-900 mb-6">Ready to Upgrade Your Estimating?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience the difference of working with field-smart estimators who understand your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-pastel-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-pastel-orange-700 transition-colors">
              Get Your Free Sample
              </button>
            <button className="border-2 border-pastel-orange-600 text-pastel-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-pastel-orange-600 hover:text-white transition-colors">
              Schedule a Consultation
              </button>
            </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage