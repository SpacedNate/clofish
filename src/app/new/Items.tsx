"use client"

import { useState } from "react"
import { action } from "./action"

export default function Items() {
  const [items, setItems] = useState([{ name: "", amount: "" }])

  const updateUserWithItems = action.bind(null, items)

  const change = (i: number, field: string, value: string) => {
    setItems(
      items.map((item, index) =>
        index === i ? { ...item, [field]: value } : item,
      ),
    )
  }

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={() => setItems([...items, { name: "", amount: "" }])}
        className="mb-4 rounded bg-zinc-500 p-2 text-white"
      >
        Add Another Item
      </button>

      <form
        action={updateUserWithItems}
        className="flex flex-col justify-center"
      >
        <div className="flex flex-col gap-2">
          {items.map((item, i) => {
            return (
              <div key={i} className="flex gap-2">
                <input
                  value={items[i].name}
                  onChange={(e) => change(i, "name", e.target.value)}
                  placeholder="Name"
                  className="rounded border p-2"
                />
                <input
                  value={items[i].amount}
                  onChange={(e) => change(i, "amount", e.target.value)}
                  placeholder="Amount"
                  className="rounded border p-2"
                />
              </div>
            )
          })}
        </div>

        <input
          name="tags"
          placeholder="Tags"
          className="mt-2 rounded border p-2"
        />

        <input
          name="image"
          type="file"
          // onChange={(e) => {
          //   setImages([...images, ...Array.from(e.target.files!)])
          // }}
        />

        <button className="mt-4 rounded bg-zinc-500 p-2 text-white">
          Submit
        </button>
      </form>
    </div>
  )
}
