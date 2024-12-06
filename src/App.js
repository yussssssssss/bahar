import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Cake, Sparkles, Gift, ChevronLeft, ChevronRight } from 'lucide-react'
import './App.css'

// Fotoğrafları import ediyoruz
import bahar1 from './images/WhatsApp Image 2024-12-06 at 09.34.34.jpeg'
import bahar2 from './images/WhatsApp Image 2024-12-06 at 09.34.35.jpeg'
import bahar3 from './images/WhatsApp Image 2024-12-06 at 09.34.35 (1).jpeg'
import bahar4 from './images/WhatsApp Image 2024-12-06 at 09.34.35 (2).jpeg'
import bahar5 from './images/WhatsApp Image 2024-12-06 at 09.34.36.jpeg'
import bahar6 from './images/WhatsApp Image 2024-12-06 at 09.34.36 (1).jpeg'
import bahar7 from './images/WhatsApp Image 2024-12-06 at 09.34.36 (2).jpeg'
import bahar8 from './images/WhatsApp Image 2024-12-06 at 09.34.37.jpeg'
import bahar9 from './images/WhatsApp Image 2024-12-06 at 09.34.37 (1).jpeg'
import bahar10 from './images/WhatsApp Image 2024-12-06 at 09.34.37 (2).jpeg'

const quotes = [
  "Miroya girsene fikirleri",
  "Gamelab kendini kulüp sanıyor",
  "Konuyu açıklamaya gir",
  "Başkan gibi başkan"
]

const photos = [
  bahar1, bahar2, bahar3, bahar4, bahar5,
  bahar6, bahar7, bahar8, bahar9, bahar10
]

function App() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [currentPhoto, setCurrentPhoto] = useState(0)

  useEffect(() => {
    const quoteTimer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 3000)
    return () => clearInterval(quoteTimer)
  }, [])

  const nextPhoto = () => {
    setCurrentPhoto((prev) => (prev + 1) % photos.length)
  }

  const prevPhoto = () => {
    setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl font-bold text-purple-800 flex items-center justify-center gap-4">
            <Cake className="w-12 h-12" />
            İyi ki Doğdun Bahar!
            <Cake className="w-12 h-12" />
          </h1>
          <p className="text-2xl text-purple-600">
            <Sparkles className="inline-block mr-2" />
            En Güzel Günler Senin Olsun!
          </p>
        </motion.div>

        {/* Photo Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative aspect-video bg-white rounded-lg shadow-xl overflow-hidden"
        >
          <img
            src={photos[currentPhoto]}
            alt={`Bahar'ın fotoğrafı ${currentPhoto + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full"
            onClick={prevPhoto}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full"
            onClick={nextPhoto}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </motion.div>

        {/* Quotes Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: currentQuote === index ? 1 : 0.5,
                scale: currentQuote === index ? 1 : 0.9,
              }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6 bg-white/80 backdrop-blur shadow-xl hover:shadow-2xl transition-all rounded-lg">
                <p className="text-xl font-medium text-purple-700 italic">
                  "{quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Birthday Message */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center bg-white/90 backdrop-blur rounded-lg p-8 shadow-xl"
        >
          <Gift className="w-16 h-16 mx-auto mb-4 text-purple-600" />
          <p className="text-xl text-purple-800 leading-relaxed">
            Sevgili Bahar, bu özel gününde tüm güzelliklerin seninle olması dileğiyle! 
            Her zaman enerjin, neşen ve muhteşem espri anlayışınla etrafına ışık saçmaya devam et.
            Nice mutlu, sağlıklı ve başarılı yıllara!
          </p>
        </motion.div>

        {/* Interactive Buttons */}
        <div className="text-center space-x-4">
          <button 
            className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-2 rounded-lg text-lg font-semibold"
            onClick={() => setCurrentQuote((prev) => (prev + 1) % quotes.length)}
          >
            <Sparkles className="inline-block mr-2" />
            Yeni Söz Göster
          </button>
          <button 
            className="bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded-lg text-lg font-semibold"
            onClick={nextPhoto}
          >
            <Gift className="inline-block mr-2" />
            Sonraki Fotoğraf
          </button>
        </div>
      </div>
    </div>
  )
}

export default App

