/**
 * Global UI configuration for the storefront.
 *
 * Each page/section that opts into config-driven rendering reads its
 * values from here. Edit the objects below to change the rendered output
 * without touching component code.
 *
 * Type safety: every section has a corresponding interface, so typos or
 * missing fields are caught at compile time.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HeroConfig {
  /** Main headline text */
  title: string
  /** Secondary line below the title */
  subtitle: string
  /** Tailwind font-size classes per breakpoint */
  fontSize: { mobile: string; desktop: string }
  /** Background — solid color or image URL (leave empty for solid color) */
  backgroundImage: string
  /** CSS background-color value */
  backgroundColor: string
  /** CSS background-position when using an image */
  backgroundPosition: string
  /** CSS background-size when using an image */
  backgroundSize: string
  /** Text color (CSS value) */
  textColor: string
  /** Content alignment within the hero */
  alignment: "left" | "center" | "right"
  /** Vertical position of the content block */
  verticalPosition: "top" | "center" | "bottom"
  /** CTA button */
  cta: {
    label: string
    href: string
    variant: "primary" | "secondary" | "transparent"
  }
  /** Hero height in viewport units (e.g. "75vh", "60vh") */
  height: string
}

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------

export const heroConfig: HeroConfig = {
  title: "Medusa Store",
  subtitle: "Commerce without limits",
  fontSize: { mobile: "text-2xl", desktop: "text-5xl" },
  backgroundImage: "",
  backgroundColor: "#0f172a",
  backgroundPosition: "center",
  backgroundSize: "cover",
  textColor: "#f8fafc",
  alignment: "center",
  verticalPosition: "center",
  cta: {
    label: "Shop now",
    href: "/store",
    variant: "secondary",
  },
  height: "75vh",
}
