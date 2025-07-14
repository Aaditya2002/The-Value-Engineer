"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your construction estimating assistant. I can help you understand our services, get quick estimates, or guide you through the quote process. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const quickReplies = [
    "Get a quick estimate",
    "Learn about services",
    "View portfolio",
    "Schedule consultation",
    "Pricing information",
  ]

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue)
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("estimate") || lowerInput.includes("cost") || lowerInput.includes("price")) {
      return "I'd be happy to help with an estimate! Our instant quote calculator can give you a ballpark figure in seconds. For detailed estimates, we typically need: project type, size, location, and timeline. Would you like to use our quick calculator or schedule a consultation for a detailed estimate?"
    }

    if (lowerInput.includes("service") || lowerInput.includes("what do you do")) {
      return "We offer 6 core construction estimating services: Civil Estimating, Quantity Takeoffs, Cost Planning, Value Engineering, Risk Assessment, and Project Analysis. Each service is designed to help you save money and avoid cost overruns. Which service interests you most?"
    }

    if (lowerInput.includes("portfolio") || lowerInput.includes("projects") || lowerInput.includes("examples")) {
      return "We've completed 500+ projects worth $2.8B total value with 99.2% accuracy! Our portfolio includes commercial complexes, residential communities, infrastructure projects, and more. You can view detailed case studies on our portfolio page. Would you like to see projects similar to yours?"
    }

    if (lowerInput.includes("consultation") || lowerInput.includes("meeting") || lowerInput.includes("call")) {
      return "Great! We offer free 30-minute phone consultations or 45-minute video calls. For complex projects, we also provide on-site visits ($200, credited to your project). Our team is available Mon-Fri, 7AM-7PM EST. Would you like to schedule now?"
    }

    return "Thanks for your question! I'm here to help with construction estimating queries. You can ask me about our services, get quick estimates, view our portfolio, or schedule a consultation. For complex questions, I can connect you with our expert team. What would you like to know more about?"
  }

  const handleQuickReply = (reply: string) => {
    setInputValue(reply)
    handleSendMessage()
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-pastel-orange-500 rounded-full shadow-lg flex items-center justify-center text-white transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100 hover:scale-110"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-md h-[500px] bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden sm:max-w-md max-w-[calc(100vw-2rem)] sm:right-6 right-2"
            style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.25)' }}
          >
            {/* Header */}
            <div className="bg-pastel-orange-500 p-4 flex items-center justify-between shadow-md">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Construction Assistant</h3>
                  <p className="text-white/80 text-xs">Online now</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-white/70">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${
                      message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center ${
                        message.sender === "user" ? "bg-pastel-orange-500" : "bg-pastel-orange-400"
                      }`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-3 h-3 text-white" />
                      ) : (
                        <Bot className="w-3 h-3 text-white" />
                      )}
                    </div>
                    <div
                      className={`px-3 py-2 rounded-lg text-sm shadow-sm ${
                        message.sender === "user"
                          ? "bg-pastel-orange-500 text-white border border-pastel-orange-600"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => handleQuickReply(reply)}
                      className="px-3 py-1 text-xs bg-pastel-orange-500 text-white rounded-full border border-pastel-orange-600 shadow-sm hover:bg-pastel-orange-600 transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white/90">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pastel-orange-500 text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-4 py-2 bg-pastel-orange-500 text-white rounded-lg hover:bg-pastel-orange-600 hover:shadow-md transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatBot
