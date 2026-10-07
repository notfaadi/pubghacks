import { PUBG_HOME_VIDEO } from '../data/media'

/** Full-viewport PUBG live wallpaper — muted loop MP4, edge-to-edge cover. */
export function HeroLiveWallpaper() {
  return (
    <div className="hero-live-wallpaper pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <video
        className="hero-live-wallpaper__video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={PUBG_HOME_VIDEO.poster}
        aria-hidden
      >
        <source src={PUBG_HOME_VIDEO.src} type="video/mp4" />
      </video>
      <div className="hero-live-wallpaper__shade" />
      <div className="hero-live-wallpaper__vignette" />
      <div className="hero-live-wallpaper__bottom-fade" />
    </div>
  )
}
