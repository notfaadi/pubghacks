import { useEffect, useRef, useState } from 'react'
import { PUBG_HOME_VIDEO } from '../data/media'

const HERO_POSTER_ALT =
  'PUBG PC gameplay wallpaper background on the PUBG Hacks homepage hero section'

/** Full-viewport PUBG live wallpaper — muted loop MP4, edge-to-edge cover. */
export function HeroLiveWallpaper() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const markReady = () => setReady(true)
    if (video.readyState >= 2) markReady()
    else {
      video.addEventListener('loadeddata', markReady, { once: true })
      video.addEventListener('canplay', markReady, { once: true })
    }
    return () => {
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
    }
  }, [])

  return (
    <div className="hero-live-wallpaper pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <img
        src={PUBG_HOME_VIDEO.poster}
        alt={HERO_POSTER_ALT}
        title={HERO_POSTER_ALT}
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        className={`hero-live-wallpaper__poster absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          ready ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <video
        ref={videoRef}
        className={`hero-live-wallpaper__video absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
          ready ? 'opacity-100' : 'opacity-0'
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="Looping PUBG PC gameplay video background for the homepage hero"
      >
        <source src={PUBG_HOME_VIDEO.src} type="video/mp4" />
      </video>
      <div className="hero-live-wallpaper__shade" />
      <div className="hero-live-wallpaper__vignette" />
      <div className="hero-live-wallpaper__bottom-fade" />
    </div>
  )
}
