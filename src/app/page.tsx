import Image from "next/image";
import Link from "next/link";

const interactiveClass =
  "interactive-card w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2rem]";

const linkClass = `${interactiveClass} card-size`;

const bannerClass = interactiveClass;

const iconClass =
  "h-9 w-9 object-contain mix-blend-screen sm:h-10 sm:w-10";

const socialLinks = [
  {
    href: "https://www.instagram.com/Leaderchipsmaroc",
    label: "@Leaderchipsmaroc",
    icon: "/images/instagram.png",
    iconClass,
    className:
      "bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:brightness-[1.08]",
  },
  {
    href: "https://wa.me/212600000000",
    label: "Contactez nous sur WhatsApp!",
    icon: "/images/whatsapp.png",
    iconClass,
    className:
      "bg-gradient-to-r from-[#5bd066] to-[#25d366] hover:brightness-[1.06]",
  },
] as const;

export default function Home() {
  return (
    <main
      className="relative flex min-h-dvh w-full flex-col overflow-x-hidden bg-[#e31837] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bg-pattern.png')" }}
    >
      <header className="w-full px-4 pt-6 sm:px-6 sm:pt-8">
        <Image
          src="/images/logo.png"
          alt="Leader Chips"
          width={320}
          height={120}
          priority
          className="mx-auto h-auto w-full max-w-[160px] object-contain sm:max-w-[180px] md:max-w-[200px]"
        />
      </header>

      <div className="flex flex-1 items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
        <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:max-w-lg sm:gap-5 md:max-w-xl">
          <section className={bannerClass}>
            <Image
              src="/images/banner.png"
              alt="Leader Chips — deux ados à la plage"
              width={2400}
              height={789}
              priority
              className="h-auto w-full object-contain"
            />
          </section>

          <nav
            className="flex w-full flex-col gap-4 sm:gap-5"
            aria-label="Réseaux sociaux"
          >
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClass} flex items-center gap-3 px-5 sm:gap-4 sm:px-6 ${link.className}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={link.icon}
                    alt=""
                    width={40}
                    height={40}
                    className={link.iconClass}
                  />
                </span>
                <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                  {link.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
