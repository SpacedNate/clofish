"use client"

import { useState } from "react"
import { member } from "./actions"

export default function Member() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setShow(!show)}
        className="w-80 rounded bg-zinc-500 p-2 text-white"
      >
        Add Members
      </button>

      {show && (
        <form action={member} className="my-2">
          <input
            name="email"
            placeholder="Email"
            className="mr-2 rounded border p-2"
          />
          <button className="rounded bg-zinc-500 p-2 text-white">Submit</button>
        </form>
      )}
    </div>
  )
}
