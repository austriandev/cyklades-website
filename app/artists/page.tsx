export default function ArtistsPage() {
  const artists = ["Alexandros Voliotis", "Coming Soon", "TBA", "TBA"]

  return (
    <div className="min-h-screen pt-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* Left sidebar */}
          <div className="lg:col-span-3">
            <div className="sticky top-16 text-center lg:text-left">
              <h1 className="text-sm tracking-widest font-light text-gray-400 mb-2">A R T I S T S</h1>
              <h2 className="text-sm tracking-widest font-light text-gray-400">2 0 2 5</h2>
            </div>
          </div>

          {/* Main content */}
          <div className="lg:col-span-9">
            <div className="space-y-6 md:space-y-8">
              {artists.map((artist, index) => (
                <div key={index} className="border-b border-white/10 pb-4 md:pb-6 text-center lg:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wide hover:text-gray-400 transition-colors cursor-pointer">
                    {artist}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
