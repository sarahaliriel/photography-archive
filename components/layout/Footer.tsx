import Link from "next/link";

const footerLinks = ["about", "archive", "collections", "contact"] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 sarah aliriel</p>
      <nav aria-label="Footer navigation">
        {footerLinks.map((label) => (
          <Link href={`/${label}`} key={label}>
            {label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
