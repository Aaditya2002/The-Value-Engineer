"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, ArrowRight } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Civil Estimating", href: "/services#civil" },
      { name: "Quantity Takeoffs", href: "/services#quantity" },
      { name: "Cost Planning", href: "/services#cost-planning" },
      { name: "Value Engineering", href: "/services#value-engineering" },
      { name: "Risk Assessment", href: "/services#risk" },
      { name: "Project Analysis", href: "/services#analysis" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/quote" },
    ],
    Resources: [
      { name: "Case Studies", href: "/portfolio" },
      { name: "Industry Insights", href: "/blog" },
      { name: "Cost Calculator", href: "/quote" },
      { name: "Documentation", href: "/resources" },
      { name: "Support", href: "/support" },
    ],
  }

  const certifications = ["AACE International", "RICS Certified", "ISO 9001:2015", "PMI Member"]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl font-bold mb-4">Stay Updated with Industry Insights</h3>
              <p className="text-gray-300 text-lg">
                Get the latest construction estimating trends, cost-saving tips, and project insights delivered to your
                inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pale-sage-500"
              />
              <button className="bg-gradient-to-r from-pale-sage-500 to-muted-coral-500 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 luxury-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <div>
                <h1 className="font-serif text-2xl font-bold text-white">Value Engineer Pro</h1>
                <p className="text-xs text-gray-400 -mt-1">Precision You Can Build On</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Professional construction estimating services trusted by developers and contractors across 500+ successful
              projects with 99.2% accuracy.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-pale-sage-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-pale-sage-400" />
                <span>quotes@valueengineerpro.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 mt-1 text-pale-sage-400" />
                <span>
                  123 Construction Ave, Suite 456
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-lg mb-6 text-white">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-pale-sage-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="font-semibold text-white mb-4">Certifications & Memberships</h4>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-600"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Value Engineer Pro. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pale-sage-500 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pale-sage-500 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-pale-sage-500 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </Link>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
