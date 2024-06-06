import { auth, signIn, signOut } from "@/lib/auth"
import Link from "next/link"

export default async function Nav() {
  const session = await auth()

  return (
    <nav className="flex h-20 items-center gap-4 bg-zinc-300 px-4">
      <Link href="/" className="text-2xl">
        Clofish
      </Link>
      <Link href="/new" className="text-2xl">
        New
      </Link>
      <Link href="/admin" className="text-2xl">
        Admin
      </Link>

      <form
        action={async () => {
          "use server"
          session ? await signOut() : await signIn()
        }}
        className="ml-auto"
      >
        <button
          type="submit"
          className="rounded-full bg-zinc-500 px-3 py-2 text-xl text-white"
        >
          Sign {session ? "Out" : "In"}
        </button>
      </form>
    </nav>
  )
}
