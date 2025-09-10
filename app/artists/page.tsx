'use client'

import { Instagram } from 'lucide-react'

export default function ArtistsPage() {
  const artists = [
    {
      name: 'Austrian',
      instagram: 'https://instagram.com/austrian___',
      soundcloud: 'https://soundcloud.com/austriancyklades',
    },
    {
      name: 'BE:KAS',
      instagram: 'https://instagram.com/be.kas__',
      soundcloud: 'https://soundcloud.com/be_kas',
    },
    // 👉 Add more artists here
  ]

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
  <div
    key={index}
    className="border-b border-white/10 pb-4 md:pb-6 flex flex-col lg:flex-row lg:items-center justify-between text-center lg:text-left"
  >
    <h3 className="block text-xl sm:text-2xl md:text-3xl font-light tracking-wide text-white">
      {artist.name}
    </h3>

    <div className="flex justify-center lg:justify-end mt-2 lg:mt-0 space-x-6">
      {/* Instagram Icon */}
      <a
        href={artist.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -1 24 24"
          width="22"
          height="22"
        >
          <defs>
            <linearGradient id="igGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f09433" />
              <stop offset="25%" stopColor="#e6683c" />
              <stop offset="50%" stopColor="#dc2743" />
              <stop offset="75%" stopColor="#cc2366" />
              <stop offset="100%" stopColor="#bc1888" />
            </linearGradient>
          </defs>
          <path
            fill="url(#igGradient)"
            d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.3 1.1.7 1.6 1.3.5.5 1 .9 1.3 1.6.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.3.6-.7 1.1-1.3 1.6-.5.5-.9 1-1.6 1.3-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.3-1.1-.7-1.6-1.3-.5-.5-1-.9-1.3-1.6-.2-.5-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.3-.6.7-1.1 1.3-1.6.5-.5.9-1 1.6-1.3.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.4 0-4.7.1-1 .1-1.5.2-1.9.4-.5.2-.9.5-1.3.9-.4.4-.7.8-.9 1.3-.1.4-.3.9-.4 1.9-.1 1.3-.1 1.6-.1 4.7s0 3.4.1 4.7c.1 1 .2 1.5.4 1.9.2.5.5.9.9 1.3.4.4.8.7 1.3.9.4.1.9.3 1.9.4 1.3.1 1.6.1 4.7.1s3.4 0 4.7-.1c1-.1 1.5-.2 1.9-.4.5-.2.9-.5 1.3-.9.4-.4.7-.8.9-1.3.1-.4.3-.9.4-1.9.1-1.3.1-1.6.1-4.7s0-3.4-.1-4.7c-.1-1-.2-1.5-.4-1.9-.2-.5-.5-.9-.9-1.3-.4-.4-.8-.7-1.3-.9-.4-.1-.9-.3-1.9-.4-1.3-.1-1.6-.1-4.7-.1zm0 3.8a5.2 5.2 0 1 1 0 10.4 5.2 5.2 0 0 1 0-10.4zm0 1.8a3.4 3.4 0 1 0 0 6.8 3.4 3.4 0 0 0 0-6.8zm5.4-1.5a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"
          />
        </svg>
      </a>

      {/* SoundCloud Icon */}
      <a
        href={artist.soundcloud}
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform hover:scale-110"
        aria-label="SoundCloud"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#ff5500"
          className="w-7 h-7"
        >
          <path d="M17.8 10.7c-.5 0-.9.1-1.3.3-.2-2.5-2.3-4.5-4.9-4.5-1.1 0-2 .4-2.8 1.1-.5.5-.9 1-1.1 1.7h-.1c-1.7 0-3 1.4-3 3s1.3 3 3 3h10.2c1.3 0 2.4-1.1 2.4-2.5s-1.1-2.5-2.4-2.5z" />
        </svg>
      </a>
    </div>
  </div>
))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
