export default function ContactPage() {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Left sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-16 text-center lg:text-left">
              <h1 className="text-sm tracking-widest font-light text-gray-400 mb-2">C O N T A C T</h1>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="space-y-8 md:space-y-12">
              <div className="text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-4">General</h3>
                <a
                  href="mailto:info@cyklades.com"
                  className="text-base md:text-lg font-light text-gray-300 hover:text-white transition-colors break-all"
                >
                  info@cyklades.com
                </a>
              </div>

              <div className="border-t border-white/10 pt-8 md:pt-12 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-4">Demos</h3>
                <a
                  href="mailto:demos@cyklades.com"
                  className="text-base md:text-lg font-light text-gray-300 hover:text-white transition-colors break-all"
                >
                  demos@cyklades.com
                </a>
              </div>

              <div className="border-t border-white/10 pt-8 md:pt-12 text-center lg:text-left">
                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-4">Social</h3>
                <div className="space-y-2">
                  <div>
                    <a
                      href="https://instagram.com/cyklades_official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-light text-gray-300 hover:text-white transition-colors"
                    >
                      Instagram
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://soundcloud.com/cyklades"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base md:text-lg font-light text-gray-300 hover:text-white transition-colors"
                    >
                      SoundCloud
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
