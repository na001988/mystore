import { Button, Heading } from "@modules/common/components/ui"
import { heroConfig } from "../../../../ui-config"

// Maps config values to Tailwind utility classes
const alignmentClasses: Record<string, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
}

const verticalClasses: Record<string, string> = {
  top: "justify-start",
  center: "justify-center",
  bottom: "justify-end",
}

const Hero = () => {
  const {
    title,
    subtitle,
    fontSize,
    backgroundImage,
    backgroundColor,
    backgroundPosition,
    backgroundSize,
    textColor,
    alignment,
    verticalPosition,
    cta,
    height,
  } = heroConfig

  const bgStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition,
        backgroundSize,
        backgroundColor,
      }
    : { backgroundColor }

  return (
    <div
      className="w-full border-b border-ui-border-base relative"
      style={{ ...bgStyle, height }}
    >
      <div
        className={`absolute inset-0 z-10 flex flex-col small:p-32 gap-6 ${alignmentClasses[alignment]} ${verticalClasses[verticalPosition]}`}
        style={{ color: textColor }}
      >
        <span>
          <Heading
            level="h1"
            className={`${fontSize.desktop} leading-tight font-normal`}
          >
            {title}
          </Heading>
          <Heading
            level="h2"
            className={`${fontSize.desktop} leading-tight font-normal opacity-80`}
          >
            {subtitle}
          </Heading>
        </span>
        <a href={cta.href}>
          <Button variant={cta.variant}>{cta.label}</Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
