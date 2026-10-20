import whyRuchiImage from "@/imports/why-ruchi-exists.jpg"
import Lenis from "lenis"
import { useEffect, useRef, useState, type ReactNode } from "react"
import FaqSection, { type FaqData } from "./components/ui/habit-faq-scroller"
import mistakeScreen from "./Images/a-mistake.png"
import stepScreen from "./Images/a-step.png"
import timerScreen from "./Images/a-timer.png"
import andhraBhojanamImage from "./Images/andhra-bhojanam.jpg"
import appLogo from "./Images/app-logo.png"
import everydayLifeImage from "./Images/built-for-everyday-life.jpg"
import comingToKitchenImage from "./Images/coming-to-your-kitchen.png"
import findDishScreen from "./Images/find-your-dish.png"
import gonguraImage from "./Images/gongura-pachadi.jpg"
import guttiVankayaImage from "./Images/gutti-vankaya.jpg"
import homePageScreen from "./Images/home-page.png"
import idliSambarImage from "./Images/idli-sambar.jpg"
import karamDosaImage from "./Images/karam-dosa.jpg"
import kollamRangoli from "./Images/kollam-rangoli.png"
import nimmakayaPulihoraImage from "./Images/nimmakaya-pulihora.jpg"
import peruguAnnamImage from "./Images/perugu-annam.jpg"
import pesarattuImage from "./Images/Pesaratu.jpg"
import pindiVantaluImage from "./Images/Pindivantalu.jpg"
import pulihoraImage from "./Images/Pullihora.jpg"
import punuguluImage from "./Images/punugulu-recipe.jpg"
import rasamAnnamImage from "./Images/rasam-annam.jpg"
import startCookingScreen from "./Images/start-cooking.png"
import talkCookScreen from "./Images/talk-ask-and-cook.png"
import tomatoPappuImage from "./Images/tomato-pappu.jpg"
import vankayaPulusuImage from "./Images/vankaya-pulusu.jpg"
import verusenagaChutneyImage from "./Images/verusenaga-chutney.jpg"

const images = {
  hero: "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=1200&q=85",
}

const navItems = [
  ["How it works", "how"],
  ["Pricing", "pricing"],
  ["Community", "community"],
  ["FAQ", "faq"],
]

function Icon({ name, size = 20 }: { name: string; size?: number }) {
  const paths: Record<string, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    mic: (
      <>
        <rect x="9" y="3" width="6" height="12" rx="3" />
        <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
      </>
    ),
    play: <path d="m9 7 8 5-8 5V7Z" />,
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    chevron: <path d="m6 9 6 6 6-6" />,
    chat: (
      <>
        <path d="M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12Z" />
        <path d="M8.5 10.5h7M8.5 14h4" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    pot: (
      <>
        <path d="M5 10h14l-1 9H6l-1-9Z" />
        <path d="M8 10V8h8v2M3 12h2m14 0h2" />
      </>
    ),
    spark: (
      <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" />
    ),
    leaf: (
      <>
        <path d="M19 4C10 4 5 9 5 16c5 1 12-2 14-12Z" />
        <path d="M5 19c2-5 6-8 11-11" />
      </>
    ),
    heart: (
      <path d="M20 8c0 5-8 11-8 11S4 13 4 8a4 4 0 0 1 7-2 4 4 0 0 1 9 2Z" />
    ),
    pause: (
      <>
        <path d="M9 8v8M15 8v8" />
      </>
    ),
    headphones: (
      <>
        <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 14h3v6H5a1 1 0 0 1-1-1v-5Zm16 0h-3v6h2a1 1 0 0 0 1-1v-5Z" />
      </>
    ),
    }
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

function Button({
  children,
  href = "#download",
  secondary = false,
  onClick,
}: {
  children: ReactNode
  href?: string
  secondary?: boolean
  onClick?: () => void
}) {
  return (
    <a
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
      onClick={onClick}
    >
      {children}
      <Icon name="arrow" size={18} />
    </a>
  )
}

function AppLogo() {
  return <img className="app-logo" src={appLogo} alt="Ruchi" />
}

function Kolam({ className = "" }: { className?: string }) {
  return (
    <img
      className={`kolam ${className}`}
      src={kollamRangoli}
      alt=""
      aria-hidden="true"
    />
  )
}

function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "center",
}: {
  eyebrow?: string
  title: ReactNode
  copy?: string
  align?: "center" | "left"
}) {
  return (
    <div
      className={`section-heading reveal ${
        align === "left" ? "align-left" : ""
      }`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}

function Waveform({ small = false }: { small?: boolean }) {
  return (
    <div className={`waveform ${small ? "wave-small" : ""}`} aria-hidden="true">
      {[4, 9, 15, 22, 12, 26, 18, 8, 16, 5].map((height, index) => (
        <i
          key={index}
          style={
            {
              "--bar": `${height}px`,
              "--delay": `${index * 0.07}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}

function HeroTimer() {
  const [remaining, setRemaining] = useState(105)

  useEffect(() => {
    const timer = window.setInterval(
      () => setRemaining((value) => (value <= 0 ? 105 : value - 1)),
      1000,
    )
    return () => window.clearInterval(timer)
  }, [])

  const minutes = Math.floor(remaining / 60)
  const seconds = String(remaining % 60).padStart(2, "0")

  return (
    <strong>
      {String(minutes).padStart(2, "0")}:{seconds}
    </strong>
  )
}

function HomeScreenPhone() {
  return (
    <div className="phone home-screen-phone">
      <img
        src={homePageScreen}
        decoding="async"
        alt="Ruchi app home screen with recipe search, quick actions, family recipes, and navigation"
      />
    </div>
  )
}

function CountryDropdown({
  country,
  onChange,
}: {
  country: Country
  onChange: (country: Country) => void
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".country-drop")) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("click", onClick)
    }
  }, [open])

  return (
    <div className="country-drop">
      <button
        type="button"
        className="country-btn"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label="Choose country"
        aria-controls="country-menu"
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
            e.preventDefault()
            setOpen(true)
            requestAnimationFrame(() => {
              const options = document.querySelectorAll<HTMLLIElement>(
                ".country-menu [role=option]",
              )
              const first =
                e.key === "ArrowUp" || e.key === "End" ? options.length - 1 : 0
              options[first]?.focus()
              options[first]?.click()
            })
          }
        }}
      >
        {COUNTRIES.find((c) => c.id === country)?.label}
        <Icon name="chevron" size={14} />
      </button>
      <ul
        id="country-menu"
        className={`country-menu ${open ? "open" : ""}`}
        role="listbox"
        aria-label="Country"
        onKeyDown={(e) => {
          const options = Array.from(
            e.currentTarget.querySelectorAll<HTMLLIElement>("[role=option]"),
          )
          const current = options.findIndex(
            (o) => o.getAttribute("aria-selected") === "true",
          )
          const last = options.length - 1
          if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            e.preventDefault()
            const step = e.key === "ArrowDown" ? 1 : -1
            const next =
              current < 0
                ? step > 0
                  ? 0
                  : last
                : Math.min(last, Math.max(0, current + step))
            options[next]?.focus()
            options[next]?.click()
          } else if (e.key === "Home" || e.key === "End") {
            e.preventDefault()
            const next = e.key === "Home" ? 0 : last
            options[next]?.focus()
            options[next]?.click()
          }
        }}
      >
        {COUNTRIES.map((c) => (
          <li
            key={c.id}
            role="option"
            tabIndex={open && country === c.id ? 0 : -1}
            aria-selected={country === c.id}
            className={`country-option ${
              country === c.id ? "is-selected" : ""
            }`}
            onClick={() => {
              onChange(c.id)
              setOpen(false)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onChange(c.id)
                setOpen(false)
              }
            }}
          >
            {c.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Navbar({
  country,
  onCountryChange,
}: {
  country: Country
  onCountryChange: (country: Country) => void
}) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 24)
    }
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".nav-wrap")) setOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("click", onClick)
    }
  }, [open])
  return (
    <header className={`nav-wrap ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="logo" href="#top" aria-label="Ruchi home">
          <AppLogo />
        </a>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="mobile-download"
            href="#download"
            onClick={() => setOpen(false)}
          >
            Download app
          </a>
        </div>
        <CountryDropdown country={country} onChange={onCountryChange} />
        <a className="nav-cta" href="#download">
          Download app <Icon name="arrow" size={17} />
        </a>
        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>
    </header>
  )
}

const problems = [
  [
    "play",
    "Pause Rewind Repeat",
    "Recipe videos aren't designed for hands covered in atta",
  ],
  [
    "spark",
    "No one to ask",
    "Small doubts can turn into a dinner-sized problem",
  ],
  [
    "leaf",
    "What can I make",
    "Good ingredients wait while inspiration runs out",
  ],
  [
    "pot",
    "Too many things at once",
    "Timers, pans, and steps are easy to lose track of",
  ],
]

const conversations = [
  {
    tab: "A step",
    title: "A Step interface",
    image: stepScreen,
    user: "Ruchi, next enti",
    answer: "Now add the onions and sauté until they turn soft",
  },
  {
    tab: "A mistake",
    title: "A Mistake interface",
    image: mistakeScreen,
    user: "Ruchi, paneer overcook iyindhi",
    answer:
      "Parledu, let's see how we can fix it Remove the unburnt pieces without scraping the pan",
  },
  {
    tab: "A timer",
    title: "A Timer interface",
    image: timerScreen,
    user: "Remind me in five minutes",
    answer: "Done I'll let you know when your pappu is ready to check",
  },
]

const canTrackPointer =
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches

type Billing = "monthly" | "yearly"

const YEARLY_DISCOUNT = "Save 20%"

type Country = "india" | "us"

const COUNTRIES: { id: Country; label: string }[] = [
  { id: "india", label: "India" },
  { id: "us", label: "US" },
]

const PRICING: Record<
  Country,
  { price: Record<Billing, string>; billed: Record<Billing, string> }
> = {
  india: {
    price: { monthly: "Rs 499/month", yearly: "Rs 399/month" },
    billed: { monthly: "Billed monthly", yearly: "Rs 4,788 billed yearly" },
  },
  us: {
    price: { monthly: "$4.99/month", yearly: "$3.99/month" },
    billed: { monthly: "Billed monthly", yearly: "$47.88 billed yearly" },
  },
}

const PLANS = [
  {
    name: "Free",
    description: "Everyday cooking support for getting started",
    price: { monthly: "Free", yearly: "Free" },
    billed: { monthly: "No payment required", yearly: "No payment required" },
    cta: "Get started",
    featured: false,
    features: [
      "Core Recipe Discovery",
      "Quick Recipes",
      "Basic Voice Companion",
    ],
  },
  {
    name: "Premium",
    description: "More guidance for confident everyday cooking",
    price: { monthly: "Rs 499/month", yearly: "Rs 399/month" },
        billed: { monthly: "Billed monthly", yearly: "Rs 4,788 billed yearly" },
    cta: "Choose Premium",
    featured: true,
    features: [
      "Unlimited Voice Guidance",
      "Ad-Free Experience",
      "Family Meal Planner",
    ],
  },
] as const

function PricingSection({ country }: { country: Country }) {
  const [billing, setBilling] = useState<Billing>("monthly")

  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <SectionHeading
          eyebrow="SIMPLE, HONEST PLANS"
          title="Choose a plan that fits your kitchen"
          copy="Start with the essentials, or unlock unlimited guidance with Premium"
        />

        <div
          className="plan-toggle-wrap reveal"
          style={{ "--stagger": "60ms" } as React.CSSProperties}
        >
          <fieldset>
            <legend className="sr-only">Billing period</legend>
            <div className="plan-toggle">
              {(["monthly", "yearly"] as const).map((option) => (
                <label
                  key={option}
                  className={`plan-toggle-opt ${
                    billing === option ? "is-checked" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="pricing-billing"
                    value={option}
                    checked={billing === option}
                    onChange={() => setBilling(option)}
                  />
                  {option === "monthly" ? "Monthly" : "Yearly"}
                  {option === "yearly" && (
                    <span className="plan-toggle-badge">
                      {YEARLY_DISCOUNT}
                    </span>
                  )}
                </label>
              ))}
            </div>
          </fieldset>
        </div>

        {/* Announces the change once, instead of every price reading out */}
        <p aria-live="polite" className="sr-only">
          {billing === "yearly"
            ? "Showing yearly billing prices, 20% off."
            : "Showing monthly billing prices."}
        </p>

        <div className="plan-grid">
          {PLANS.map((plan, i) => (
            <article
              key={plan.name}
              className={`plan-card reveal ${plan.featured ? "featured" : ""}`}
              style={
                { "--stagger": `${150 + i * 80}ms` } as React.CSSProperties
              }
            >
              {plan.featured && (
                <span className="plan-badge">Most popular</span>
              )}

              <div className="plan-head">
                <h3>{plan.name}</h3>
              </div>
              <p className="plan-desc">{plan.description}</p>

              <p className="plan-price">
                <span>
                  {plan.featured
                    ? PRICING[country].price[billing]
                    : plan.price[billing]}
                </span>
              </p>
              <p className="plan-billed">
                {plan.featured
                  ? PRICING[country].billed[billing]
                  : plan.billed[billing]}
              </p>

              <ul className="plan-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="check" size={16} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button secondary={!plan.featured} href="#download">
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function DemoSection() {
  const [active, setActive] = useState(1)
  const tabsRef = useRef<HTMLDivElement>(null)
  const [pill, setPill] = useState({ x: 0, w: 0, s: 1 })

  const measurePill = () => {
    const tabs = tabsRef.current
    const btn = tabs?.querySelector<HTMLButtonElement>(
      '[role="tab"][aria-selected="true"]',
    )
    const base = tabs?.querySelector<HTMLButtonElement>('[role="tab"]')
    if (!tabs || !btn || !base) return
    setPill({
      x: btn.offsetLeft - 6,
      w: base.offsetWidth,
      s: btn.offsetWidth / base.offsetWidth,
    })
  }

  useEffect(() => {
    measurePill()
  }, [active])

  useEffect(() => {
    window.addEventListener("resize", measurePill)
    return () => window.removeEventListener("resize", measurePill)
  }, [])

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return
    const tabs = tabsRef.current?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    )
    if (!tabs || tabs.length === 0) return
    e.preventDefault()
    const current = Array.from(tabs).findIndex(
      (tab) => tab.getAttribute("aria-selected") === "true",
    )
    const last = tabs.length - 1
    const select = (i: number) => {
      tabs[i].focus()
      setActive(i)
    }
    if (e.key === "Home") select(0)
    else if (e.key === "End") select(last)
    else if (e.key === "ArrowRight") select(current >= last ? 0 : current + 1)
    else select(current <= 0 ? last : current - 1)
  }

  return (
    <section className="section meet" id="demo">
      <Kolam className="meet-kolam" />
      <div className="container meet-grid">
        <div className="demo-stage reveal">
          <div className="phone-backdrop" />
          <div
            className="demo-image-frame"
            role="tabpanel"
            id="demo-panel"
            aria-labelledby={`demo-tab-${active}`}
          >
            {conversations.map((conversation, index) => (
              <div
                key={conversation.tab}
                className={`demo-layer ${index === active ? "is-active" : ""}`}
                aria-hidden={index !== active}
                style={
                  {
                    "--layer-dir": index < active ? -1 : 1,
                  } as React.CSSProperties
                }
              >
                {conversation.image ? (
                  <img
                    src={conversation.image}
                    alt={`${conversation.title} screen`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="demo-image-placeholder">
                    <span className="placeholder-icon">
                      <Icon name="spark" size={28} />
                    </span>
                    <span className="placeholder-label">INTERFACE IMAGE</span>
                    <strong>{conversation.title}</strong>
                    <p>Replace this placeholder with your app screen</p>
                    <small>Recommended: portrait PNG</small>
                  </div>
                )}
                <div className="demo-caption demo-caption-user">
                  {conversation.user}
                </div>
                <div className="demo-caption demo-caption-ruchi">
                  <span>R</span>
                  <p>{conversation.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="meet-copy reveal">
          <span className="eyebrow">A CONVERSATION, NOT A CHECKLIST</span>
          <h2>Meet Ruchi More than a recipe app</h2>
          <p>
            Ask questions the way you would in your own kitchen Ruchi remembers
            where you are in the recipe and responds with practical, contextual
            help
          </p>
        </div>
        <div className="meet-options reveal">
          <div
            className="demo-tabs"
            ref={tabsRef}
            role="tablist"
            aria-label="Example conversations"
            onKeyDown={onKeyDown}
          >
            <span
              className="demo-tab-pill"
              aria-hidden="true"
              style={
                pill.w
                  ? {
                      width: pill.w,
                      transform: `translateX(${pill.x}px) scaleX(${pill.s})`,
                    }
                  : undefined
              }
            />
            {conversations.map((conversation, index) => (
              <button
                key={conversation.tab}
                id={`demo-tab-${index}`}
                role="tab"
                aria-selected={active === index}
                aria-controls="demo-panel"
                tabIndex={active === index ? 0 : -1}
                onClick={() => setActive(index)}
              >
                {conversation.tab}
              </button>
            ))}
          </div>
          <div className="list-benefits">
            <span>
              <Icon name="check" /> Repeat or clarify any step
            </span>
            <span>
              <Icon name="check" /> Pause and manage timers by voice
            </span>
            <span>
              <Icon name="check" /> Get help without losing your place
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

const howSteps = [
  ["01", "Find your dish", "Search a recipe or explore dishes using what you have", findDishScreen],
  ["02", "Start cooking", "Follow one calm, clear instruction at a time", startCookingScreen],
  ["03", "Talk, ask, and cook", "Clarify steps, pause, set timers, and ask for help", talkCookScreen],
] as const

function HowSection() {
  return (
    <section className="section how" id="how">
      <Kolam className="how-kolam" />
      <div className="container">
        <SectionHeading
          eyebrow="HOW IT WORKS"
          title="From craving to cooking, in three simple steps"
        />
        <div className="steps">
          {howSteps.map(([num, title, copy, screen], i) => (
            <article
              className="step reveal"
              style={{ "--stagger": `${i * 90}ms` } as React.CSSProperties}
              key={num}
              data-step={i}
            >
              <div className="step-number">{num}</div>
              <div className="how-phone">
                <img
                  src={screen}
                  alt={`${title} Ruchi app screen`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function App() {
  const [country, setCountry] = useState<Country>("india")

  useEffect(() => {
    const lenis = new Lenis({
          autoRaf: true,
          anchors: { offset: -96 },
          respectReducedMotion: false,
        })
    return () => lenis.destroy()
  }, [])

  useEffect(() => {
    document.documentElement.classList.add("reveal-ready")
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -10% 0px" },
    )
    const sections = document.querySelectorAll("main > section:not(.hero)")
    sections.forEach((section) => section.classList.add("section-reveal"))
    document
      .querySelectorAll(".reveal, .section-reveal")
      .forEach((element) => observer.observe(element))

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    const howSection = document.querySelector<HTMLElement>(".how")
    const howPhones =
      howSection?.querySelectorAll<HTMLElement>(".how-phone") ?? []
    const howKolam = howSection?.querySelector<HTMLElement>(".how-kolam")
    let parallaxFrame = 0

    const updateHowParallax = () => {
      parallaxFrame = 0
      if (!howSection || reducedMotion) return

      const rect = howSection.getBoundingClientRect()
      const progress = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      )
      const distance = (progress - 0.5) * 2
      const directions = [1, -0.75, 0.9]

      howPhones.forEach((phone, index) => {
        phone.style.setProperty(
          "--how-parallax-y",
          `${distance * 34 * directions[index]}px`,
        )
      })
      howKolam?.style.setProperty("--how-kolam-y", `${distance * -45}px`)
    }

    const requestHowParallax = () => {
      if (!parallaxFrame) {
        parallaxFrame = window.requestAnimationFrame(updateHowParallax)
      }
    }

    if (!reducedMotion) {
      updateHowParallax()
      window.addEventListener("scroll", requestHowParallax, { passive: true })
      window.addEventListener("resize", requestHowParallax)
    }

    return () => {
      observer.disconnect()
      if (parallaxFrame) window.cancelAnimationFrame(parallaxFrame)
      window.removeEventListener("scroll", requestHowParallax)
      window.removeEventListener("resize", requestHowParallax)
      document.documentElement.classList.remove("reveal-ready")
    }
  }, [])

  return (
    <div id="top">
      <Navbar country={country} onCountryChange={setCountry} />
      <main>
        <section className="hero">
          <Kolam className="hero-kolam" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow hero-in hero-1">
                YOUR AI COOKING COMPANION
              </span>
              <h1 className="hero-in hero-2">
                A little help in the kitchen
                <br />
                <em>A feeling of home</em>
              </h1>
              <p className="hero-in hero-3">
                Talk, cook, and create delicious meals with Ruchi — your
                conversational cooking companion for patient, step-by-step help
                in Telugu or English
              </p>
              <div className="hero-actions hero-in hero-4">
                <Button>Download Ruchi</Button>
                <Button secondary href="#how">
                  See how it works
                </Button>
              </div>
              <div className="benefit-row hero-in hero-5">
                <span>
                  <Icon name="mic" /> Voice-guided
                </span>
                <span>అ + A Telugu & English</span>
                <span>
                  <Icon name="pot" /> Hands-free
                </span>
              </div>
            </div>
            <div className="hero-visual hero-in hero-phone">
              <div className="hero-photo">
                <img
                  src={images.hero}
                  srcSet="https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=480&q=85 480w, https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=768&q=85 768w, https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=1200&q=85 1200w"
                  sizes="(max-width: 760px) 280px, 330px"
                  fetchPriority="high"
                  decoding="async"
                  alt="Freshly prepared dosa served with South Indian chutneys"
                />
                <span>Made for real Indian kitchens</span>
              </div>
              <HomeScreenPhone />
              <div className="floating-card float-timer">
                <Icon name="clock" />
                <div>
                  <span>DOSA TIMER</span>
                  <HeroTimer />
                </div>
              </div>
              <div className="floating-card float-voice">
                <span className="status-dot" />
                <span className="listening-label">LISTENING</span>
                <Waveform small />
              </div>
            </div>
          </div>
        </section>

        <section className="section problems">
          <div className="container">
            <SectionHeading
              eyebrow="A BETTER WAY TO COOK"
              title="Cooking shouldn't be complicated"
              copy="You shouldn't have to keep checking videos with messy hands, guess what comes next, or give up when something goes wrong"
            />
            <div className="problem-grid">
              {problems.map(([icon, title, copy], i) => (
                <article
                  className="problem-card reveal"
                  style={{ "--stagger": `${i * 80}ms` } as React.CSSProperties}
                  key={title}
                >
                  <span className="number">0{i + 1}</span>
                  <div className="line-icon">
                    <Icon name={icon} />
                  </div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <DemoSection />

        <HowSection />

        <section className="section audiences">
          <div className="container">
            <SectionHeading
              eyebrow="BUILT FOR EVERYDAY LIFE"
              title="Made for real kitchens and real lives"
            />
            <div className="audience-grid">
              <div className="audience-image reveal">
                <img
                  src={everydayLifeImage}
                  loading="lazy"
                  decoding="async"
                  alt="People preparing a meal together in a home kitchen"
                />
                <div>
                  <strong>Cooking feels easier with a little company</strong>
                  <span>Patient help, at your pace</span>
                </div>
              </div>
              <div className="audience-list">
                {[
                  [
                    "01",
                    "Students",
                    "Learn everyday cooking without the overwhelm",
                  ],
                  [
                    "02",
                    "Busy professionals",
                    "Get dinner moving while you multitask",
                  ],
                  [
                    "03",
                    "New cooks",
                    "Ask every small question without hesitation",
                  ],
                  [
                    "04",
                    "Hands-free cooks",
                    "Keep messy hands away from the screen",
                  ],
                  [
                    "05",
                    "Families",
                    "Preserve recipes in the words you remember",
                  ],
                ].map(([num, title, copy], i) => (
                  <div
                    className="audience-item reveal"
                    style={
                      { "--stagger": `${i * 70}ms` } as React.CSSProperties
                    }
                    key={title}
                  >
                    <span>{num}</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

                <PricingSection country={country} />

                <section className="story">
          <div className="story-image reveal">
            <img
              src={whyRuchiImage}
              loading="lazy"
              decoding="async"
              alt="Family members preparing food together in a warm home kitchen"
            />
          </div>
          <div className="story-copy reveal">
            <Kolam />
            <span className="eyebrow">WHY RUCHI EXISTS</span>
            <h2>More than food It's family, culture, and memories</h2>
            <p>
              Every kitchen has its own stories, little traditions, and recipes
              passed from one generation to the next Ruchi helps you explore
              new dishes and preserve the flavours and memories that make
              cooking personal
            </p>
            <blockquote>
              “A pinch” and “until it smells right” are part of the recipe too
            </blockquote>
          </div>
        </section>

        <RecipeDiscovery />

        <Faq />

        <section className="download" id="download">
          <Kolam className="download-kolam left" />
          <Kolam className="download-kolam right" />
          <div className="download-food reveal">
            <img
              src={comingToKitchenImage}
              loading="lazy"
              decoding="async"
              alt="A warm Telugu food composition for Ruchi"
            />
          </div>
          <div className="download-copy reveal">
            <span className="eyebrow">COMING TO YOUR KITCHEN</span>
            <h2>Your next favourite dish starts with a conversation</h2>
            <p>
              Bring a little more confidence, creativity, and joy to your
              everyday cooking
            </p>
            <a
              className="button light-button"
              href="mailto:hello@ruchi.app?subject=Ruchi%20early%20access"
            >
              Join the early access list <Icon name="arrow" size={18} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const recipes = [
  [
    pesarattuImage,
    "Pesarattu",
    "Andhra • Breakfast",
    "Crisp green gram crepes",
  ],
  [pulihoraImage, "Pulihora", "Telugu • Festive", "Tangy tamarind rice"],
  [
    gonguraImage,
    "Gongura Pachadi",
    "Andhra • Classic",
    "Bold, leafy, and bright",
  ],
  [
    pindiVantaluImage,
    "Pindi Vantalu",
    "South Indian • Traditional",
    "Made slowly, shared warmly",
  ],
  [
    guttiVankayaImage,
    "Gutti Vankaya",
    "Andhra • Curry",
    "Stuffed brinjal in a rich masala",
  ],
  [
    tomatoPappuImage,
    "Tomato Pappu",
    "Telugu • Comfort",
    "Homely dal with a bright tempering",
  ],
  [
    karamDosaImage,
    "Karam Dosa",
    "Andhra • Tiffin",
    "Crisp dosa with a fiery red chutney",
  ],
  [
    andhraBhojanamImage,
    "Andhra Bhojanam",
    "Andhra • Lunch",
    "A generous everyday meal with rice",
  ],
  [
    idliSambarImage,
    "Idli Sambar",
    "South Indian • Breakfast",
    "Soft idlis with warm, comforting sambar",
  ],
  [
    nimmakayaPulihoraImage,
    "Nimmakaya Pulihora",
    "Andhra • Rice",
    "Bright lemon rice with a fragrant tempering",
  ],
  [
    rasamAnnamImage,
    "Rasam Annam",
    "Telugu • Comfort",
    "Peppery rasam folded through hot rice",
  ],
  [
    vankayaPulusuImage,
    "Vankaya Pulusu",
    "Andhra • Curry",
    "Tender brinjal in a tangy tamarind gravy",
  ],
  [
    verusenagaChutneyImage,
    "Verusenaga Chutney",
    "Telugu • Chutney",
    "Creamy peanut chutney for hot tiffins",
  ],
  [
    "https://images.unsplash.com/photo-1743517894265-c86ab035adef?auto=format&fit=crop&w=900&q=82",
    "Masala Dosa",
    "South Indian • Tiffin",
    "Golden dosa with a spiced potato filling",
  ],
  [
    peruguAnnamImage,
    "Perugu Annam",
    "Telugu • Comfort",
    "Cooling curd rice for the end of a meal",
  ],
  [
    punuguluImage,
    "Punugulu",
    "Andhra • Snack",
    "Crisp, fluffy bites served with chutney",
  ],
]

function RecipeDiscovery() {
  const viewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const reducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    // Auto-pan for precise pointers; touch users scroll the strip
        // themselves, so the motion always has a user-controlled alternative.
        // Under reduced motion the strip stays still but natively scrollable.
        el.classList.toggle("recipe-auto-pan", canTrackPointer && !reducedMotion)
        if (!canTrackPointer || reducedMotion) return
    let target = el.scrollLeft
    let raf = 0
    const tick = () => {
      raf = 0
      const current = el.scrollLeft
      if (Math.abs(target - current) > 0.5) {
        el.scrollLeft = current + (target - current) * 0.14
        raf = requestAnimationFrame(tick)
      } else {
        el.scrollLeft = target
      }
    }
    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()
      const max = el.scrollWidth - el.clientWidth
      target = Math.min(Math.max(0, target + e.deltaY + e.deltaX), max)
      if (!raf) raf = requestAnimationFrame(tick)
    }
    el.addEventListener("wheel", onWheel, { passive: false })
    return () => {
      el.removeEventListener("wheel", onWheel)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="section community" id="community">
      <div className="container">
        <SectionHeading
          eyebrow="RECIPE DISCOVERY"
          title="Discover something delicious"
          copy="A thoughtful mix of Telugu favourites and everyday South Indian comfort food"
        />
      </div>
      <div
        className="recipe-viewport reveal"
        ref={viewportRef}
        data-lenis-prevent
      >
          <div className="recipe-grid">
            {[...recipes, ...recipes].map(
              ([image, title, category, copy], i) => {
                const duplicate = i >= recipes.length
                return (
                  <article
                    className="recipe-card"
                    style={
                      {
                        "--card-order": i % recipes.length,
                      } as React.CSSProperties
                    }
                    aria-hidden={duplicate}
                    key={`${title}-${i}`}
                  >
                    <div className="recipe-image">
                      <img
                        src={image}
                        alt={`${title}, ${copy}`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <span>{category}</span>
                    <h3>{title}</h3>
                    <p>{copy}</p>
                    <a href="#download" tabIndex={duplicate ? -1 : 0}>
                      Explore with Ruchi <Icon name="arrow" size={16} />
                    </a>
                  </article>
                )
              },
            )}
          </div>
        </div>
    </section>
  )
}

const faqData: FaqData = {
  mainTitle: "Got questions Let's clear them up",
  mainSubtitle:
    "Everything we can confirm today, without the fine-print fog Still unsure Write to us at hello@ruchi.app",
  rows: [
    {
      id: "row1",
      speed: "60s",
      direction: "left",
      items: [
        {
          id: "q1",
          question: "Is Ruchi free to use",
          answer:
            "Ruchi will include a free way to explore the core experience Final limits and paid plan details will be published before launch",
        },
        {
          id: "q2",
          question: "Does Ruchi support Telugu",
          answer:
            "Yes Ruchi is designed for natural cooking guidance in Telugu and English",
        },
      ],
    },
    {
      id: "row2",
      speed: "45s",
      direction: "right",
      items: [
        {
          id: "q3",
          question: "Do I need to know how to cook",
          answer:
            "Not at all Ruchi breaks recipes into clear steps and lets you ask for clarification whenever you need it",
        },
        {
          id: "q4",
          question: "Can I use Ruchi while my hands are busy",
          answer:
            "Voice-guided cooking is central to Ruchi, so you can move through steps and manage timers with less screen touching",
        },
      ],
    },
    {
      id: "row3",
      speed: "70s",
      direction: "left",
      items: [
        {
          id: "q5",
          question: "What happens if I make a cooking mistake",
          answer:
            "Ruchi can suggest practical ways to recover from common issues such as a dish being too salty, spicy, watery, bland, or slightly burnt",
        },
        {
          id: "q6",
          question: "Is Ruchi available for Android and iOS",
          answer:
            "Platform availability is still being confirmed Join early access for verified launch updates",
        },
      ],
    },
    {
      id: "row4",
      speed: "50s",
      direction: "right",
      items: [
        {
          id: "q7",
          question: "What is included in the paid plans",
          answer:
            "Free covers the everyday essentials — core recipe discovery, quick recipes and basic voice support Premium from Rs 399/month adds unlimited voice guidance, an ad-free experience and a family meal planner",
        },
        {
          id: "q8",
          question: "Can I cancel my subscription",
          answer:
            "Cancellation terms will be published with the final subscription policy before paid plans launch",
        },
      ],
    },
  ],
}

function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="faq-marquee">
          <FaqSection data={faqData} />
        </div>
        <FaqAccordion />
      </div>
    </section>
  )
}

/** Accordion FAQ, shown on phones only; desktop keeps the marquee rows. */
function FaqAccordion() {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq-accordion">
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="faq-badge">
          <Icon name="spark" size={13} />
          FAQ
        </span>
        <h2>{faqData.mainTitle}</h2>
        <p className="faq-subtitle">{faqData.mainSubtitle}</p>
      </div>
      <div className="faq-list">
        {faqData.rows.flatMap((row) => row.items).map((item, index) => (
          <article
            className={`faq-item ${open === index ? "open" : ""}`}
            key={item.id}
          >
            <button
              type="button"
              aria-expanded={open === index}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span>{item.question}</span>
              <Icon name="chevron" />
            </button>
            <div
              className="faq-answer"
              id={`faq-answer-${index}`}
              aria-hidden={open !== index}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="faq-cta">
        <span className="faq-cta-icon">
          <Icon name="chat" size={16} />
        </span>
        <div className="faq-cta-copy">
          <p>Still have a question</p>
          <p>We reply within four business hours</p>
        </div>
        <a className="button" href="mailto:hello@ruchi.app">
          Ask us anything <Icon name="arrow" size={15} />
        </a>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <a className="logo" href="#top" aria-label="Ruchi home">
            <AppLogo />
          </a>
          <p>
            A conversational cooking companion for real kitchens, familiar
            flavours, and everyday confidence
          </p>
        </div>
        <div>
          <strong>Product</strong>
          <a href="#how">How it works</a>
          <a href="#pricing">Pricing</a>
        </div>
        <div>
          <strong>Explore</strong>
          <a href="#demo">Voice demo</a>
          <a href="#faq">FAQ</a>
        </div>
        <div>
          <strong>Contact</strong>
          <a href="mailto:hello@ruchi.app">hello@ruchi.app</a>
          <span>Privacy — coming soon</span>
          <span>Terms — coming soon</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Ruchi Built with care</span>
      </div>
    </footer>
  )
}

export default App
