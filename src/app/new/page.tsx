import Items from "./Items"

export default async function New() {
  // const session = await auth()
  // if (!session) redirect("/")

  return (
    <div className="mx-auto w-3/5">
      <Items />
    </div>
  )
}
