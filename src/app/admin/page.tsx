import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import Member from "./Member"
import Search from "./Search"

export default async function Admin() {
  const session = await auth()
  if (!session) redirect("/")

  return (
    <div className="mx-auto flex w-3/5 flex-col items-center gap-4">
      <Search />
      <Member />
    </div>
  )
}
