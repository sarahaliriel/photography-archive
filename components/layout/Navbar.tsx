import Link from "next/link";

export function Navbar() {
  return (
    <nav className="hero-nav" aria-label="Primary navigation">
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
