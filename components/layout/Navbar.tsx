import Image from "next/image";
import Link from "next/link";
import { SoundControl } from "@/components/layout/SoundControl";

type NavbarProps = {
  tone?: "light" | "dark";
};

export function Navbar({ tone = "light" }: NavbarProps) {
  return (
    <nav
      className={`hero-nav${tone === "dark" ? " hero-nav--dark" : ""}`}
      aria-label="Primary navigation"
    >
      <div className="hero-nav__links">
        <Link className="hero-nav__logo" href="/" aria-label="Home">
          <Image className="hero-nav__logo-default" src="/images/logo-light.png" alt="" width={1254} height={1254} priority />
          <Image className="hero-nav__logo-hover" src="/images/logo-light-hover.png" alt="" width={1254} height={1254} priority />
        </Link>
        <Link href="/about">about</Link>
        <Link href="/archive">archive</Link>
        <Link href="/collections">collections</Link>
      </div>

      <div className="hero-nav__end">
        <SoundControl />
        <a href="https://www.sarahaliriel.tech/" aria-label="Sarah Aliriel portfolio">
          sarah aliriel
        </a>
      </div>
    </nav>
  );
}
