import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-[500vh]">
      {/* Section 1 - Main Hero */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="mb-6 md:mb-8">
                <Image src="/images/logo.png" alt="CYKLADES" width={200} height={200} className="opacity-90" priority />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-wider mb-2 md:mb-4">
                  CYKLADES
                </h1>
                <p className="text-xs md:text-sm tracking-widest text-gray-400 font-light">ATHENS • GREECE</p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="text-center lg:text-right">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light tracking-wide leading-tight">
                  SOUNDS AND RHYTHMS
                  <br />
                  <span className="text-gray-400">FROM THE AEGEAN</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Philosophy */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 md:mb-8">
            HOUSE MUSIC
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 tracking-wide leading-relaxed px-4">
            Born from the intersection of ancient Mediterranean soul and contemporary electronic expression
          </p>
        </div>
      </section>

      {/* Section 3 - Vision */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 md:mb-8">
            CYCLICAL NATURE
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 tracking-wide leading-relaxed px-4">
            Music, life, and the eternal dance between tradition and innovation
          </p>
        </div>
      </section>

      {/* Section 4 - Location */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-6 md:mb-8">ATHENS</h2>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-400 tracking-wide leading-relaxed px-4">
            From the heart of Greece to dancefloors around the world
          </p>
        </div>
      </section>

      {/* Section 5 - Call to Action */}
      <section className="h-screen flex items-center justify-center px-4 md:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 md:mb-8">
            DISCOVER THE SOUND
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-light text-gray-400 tracking-wide mb-6 md:mb-8 leading-relaxed px-4">
            Explore our artists and releases
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a
              href="/artists"
              className="text-white hover:text-gray-400 transition-colors tracking-widest text-sm py-2 px-4 border border-white/20 rounded hover:border-white/40"
            >
              ARTISTS
            </a>
            <a
              href="/uploads"
              className="text-white hover:text-gray-400 transition-colors tracking-widest text-sm py-2 px-4 border border-white/20 rounded hover:border-white/40"
            >
              RELEASES
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
