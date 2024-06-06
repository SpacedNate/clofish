"use client"

import Link from "next/link"
import { Fragment, useState } from "react"
import { useFormState } from "react-dom"
import { search } from "./actions"

export default function Search() {
  const [show, setShow] = useState(false)
  const [state, formAction] = useFormState(search, [])

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShow(!show)}
        className="w-80 rounded bg-zinc-500 p-2 text-white"
      >
        Search Items
      </button>

      {show && (
        <>
          <form action={formAction} className="my-4 flex flex-col items-center">
            <div>
              <span>Search by </span>
              <select name="type" className="rounded bg-zinc-300 p-2">
                <option value="item">Item</option>
                <option value="tag">Tag</option>
              </select>
            </div>

            <input name="query" className="my-2 rounded border p-2" />
            <button className="rounded bg-zinc-500 p-2 text-white">
              Search
            </button>
          </form>

          <div className="flex flex-col gap-2">
            {state.map((thing: any) => {
              return (
                <Fragment key={thing.id}>
                  {thing.boxId ? (
                    <p>
                      {thing.amount} {thing.name}s in{" "}
                      <Link href={"/" + thing.box.number} className="underline">
                        box {thing.box.number}
                      </Link>
                    </p>
                  ) : (
                    <Link href={"/" + thing.number} className="underline">
                      Box {thing.number}
                    </Link>
                  )}
                </Fragment>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
