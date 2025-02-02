'use client'

import { useEffect, useRef } from 'react'

const INSTAGRAM_POSTS = [
  'DFjgpJQueRO',
  'DFiUpyVu-nd',
  'DFgiSwiOU9L',
  'DFdiIPfyn-H',
  'DFdHoFCuvBx',
  'DFai97bOa_u',
  'DFZDYazuwBM',
  'DFXxCuDOBON',
  'DFWexLFOS8J',
  'DFSzUoQOIJr'
]

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Clean up
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // Trigger embed rendering when available
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Últimos Posts en Instagram
        </h2>
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((postId) => (
            <div key={postId} className="instagram-embed-container aspect-square">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  width: 'calc(100% - 2px)',
                }}
              >
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

