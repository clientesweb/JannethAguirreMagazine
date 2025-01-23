import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/video-poster.jpg"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Tu navegador no soporta el tag de video.
      </video>
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Janneth Aguirre
          <span className="block text-[#FF0000] animate-pulse">Bienes Raíces Internacionales 2025</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
          Descubre el futuro del mercado inmobiliario en Ecuador, Panamá y Estados Unidos
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-[#FF0000] hover:bg-[#FF0000]/90 text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            Explorar Propiedades del Futuro
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            Análisis de Mercado 2025
          </Button>
        </div>
      </div>
    </div>
  )
}

