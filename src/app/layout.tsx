import "@/styles/globals.css"
import Nav from "./Nav"

export const metadata = {
  title: "Clofish",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="my-4">{children}</main>
      </body>
    </html>
  )
}
