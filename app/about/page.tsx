export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Left sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-16 text-center lg:text-left">
              <h1 className="text-sm tracking-widest font-light text-gray-400 mb-2">A B O U T</h1>
              <h2 className="text-sm tracking-widest font-light text-gray-400">C Y K L A D E S</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="space-y-8 md:space-y-12">
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mb-6 md:mb-8 text-center lg:text-left">
                  About the Label
                </h3>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-300 mb-6 md:mb-8">
                  CYKLADES Records was born from a passion for house music and the rich cultural heritage of Greece.
                  Founded in Athens Greece, our label represents the intersection of ancient
                  underground soul and contemporary electronic expression.
                </p>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-300">
                  Named after the iconic Greek island chain, CYKLADES embodies the cyclical nature of music, life, and
                  the eternal dance between tradition and innovation.
                </p>
              </div>
              <div className="border-t border-white/10 pt-8 md:pt-12">
                <h4 className="text-lg md:text-xl font-light tracking-wide mb-4 text-center lg:text-left">Location</h4>
                <p className="text-base md:text-lg font-light text-gray-300">Athens, Greece</p>
                <p className="text-base md:text-lg font-light text-gray-400 opacity-60 italic">
                  Hamburg, Germany – soon
                </p>
                <p className="text-base md:text-lg font-light text-gray-400 opacity-60 italic">
                  London, UK – soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
