import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ul>
          <li>
            <Link href="/a">A</Link>
          </li>
          <li>
            <Link href="/b">B</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
