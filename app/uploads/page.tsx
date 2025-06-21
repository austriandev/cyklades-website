'use client'

export default function UploadsPage() {
  const releases = [
    { title: 'RADIOSHOW: Austrian - For the kids, to dance [EP. 001] coming 25/06', link: '' },
  ]

  return (
    <div className="min-h-screen pt-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Left sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-16 text-center lg:text-left">
              <h1 className="text-sm tracking-widest font-light text-gray-400 mb-2">R E L E A S E S</h1>
              <h2 className="text-sm tracking-widest font-light text-gray-400">2 0 2 5</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="space-y-6 md:space-y-8">
              {releases.map((release, index) => (
                <div
                  key={index}
                  className="border-b border-white/10 pb-4 md:pb-6 text-center lg:text-left"
                >
                  {release.link ? (
                    <a
                      href={release.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xl sm:text-2xl md:text-3xl font-light tracking-wide hover:text-gray-400 transition-colors cursor-pointer"
                    >
                      {release.title}
                    </a>
                  ) : (
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-gray-500 italic">
                      {release.title}
                    </h3>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
