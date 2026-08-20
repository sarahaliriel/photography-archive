import Link from "next/link";

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
        <Link href="/archive">archive</Link>
        <Link href="/collections">collections</Link>
      </div>

      <Link href="/" aria-label="Sarah Aliriel, home">
        sarah aliriel
      </Link>
    </nav>
  );
}
