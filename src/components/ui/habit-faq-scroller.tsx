import { useRef, type CSSProperties, type ReactNode } from "react"

/**
 * FaqCard
 * Reusable card for a single FAQ item, themed to the Ruchi palette.
 */
export type FaqItem = { id: string; question: string; answer: string }

export function FaqCard({ question, answer }: FaqItem) {
  return (
    <div className="faq-card flex flex-col items-start gap-4 p-6 w-80 flex-shrink-0">
      <h3>{question}</h3>
      <p>{answer}</p>
    </div>
  )
}

/**
 * HorizontalScroller
 * Wraps children and creates a seamless horizontal looping animation.
 * The half-width translateX(-50%) loop is seamless because the same content
 * is rendered twice; the second copy is hidden from assistive tech.
 */
export type FaqRowData = {
  id: string
  speed: string
  direction: "left" | "right"
  items: FaqItem[]
}

export function HorizontalScroller({
  children,
  speed = "40s",
  direction = "left",
}: {
  children: ReactNode
  speed?: string
  direction?: "left" | "right"
}) {
  const animationClass =
    direction === "right"
      ? "animate-scroll-horizontal-reverse"
      : "animate-scroll-horizontal"
  const style = { "--scroll-duration": speed } as CSSProperties
  const trackRef = useRef<HTMLDivElement>(null)

  // Pause while the user holds the row (touch or mouse). Lifting resumes
  // it; reduced-motion already kills the animation in CSS.
  const pause = () => {
    trackRef.current?.style.setProperty("animation-play-state", "paused")
  }
  const resume = () => {
    trackRef.current?.style.removeProperty("animation-play-state")
  }

  return (
    <div
      className="scroller-mask w-full overflow-hidden group relative"
      onPointerDown={pause}
      onPointerUp={resume}
      onPointerLeave={resume}
      onPointerCancel={resume}
    >
      <div ref={trackRef} className={`flex ${animationClass}`} style={style}>
        <div className="flex items-stretch justify-center flex-shrink-0 gap-8 px-4">
          {children}
        </div>
        {/* duplicate for seamless loop */}
        <div
          className="flex items-stretch justify-center flex-shrink-0 gap-8 px-4"
          aria-hidden="true"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/**
 * FaqSection
 * Assembles title, subtitle, and multiple horizontal rows.
 */
export type FaqData = {
  mainTitle: string
  mainSubtitle: string
  rows: FaqRowData[]
}

export default function FaqSection({ data }: { data: FaqData }) {
  return (
    <div className="relative flex flex-col items-center gap-12 w-full">
      <div className="flex flex-col items-center gap-6 text-center z-10 max-w-2xl">
        <h2
          className="faq-fadein"
          style={{ animation: "fadeInUp .7s ease-out .2s forwards" }}
        >
          {data.mainTitle}
        </h2>
        <p
          className="faq-fadein"
          style={{ animation: "fadeInUp .7s ease-out .4s forwards" }}
        >
          {data.mainSubtitle}
        </p>
      </div>

      <div className="flex flex-col gap-8 z-10 w-full">
        {data.rows.map((row, i) => (
          <div
            key={row.id}
            className="reveal"
            style={{ "--stagger": `${80 + i * 70}ms` } as CSSProperties}
          >
            <HorizontalScroller speed={row.speed} direction={row.direction}>
              {row.items.map((item) => (
                <FaqCard key={item.id} {...item} />
              ))}
            </HorizontalScroller>
          </div>
        ))}
      </div>
    </div>
  )
}