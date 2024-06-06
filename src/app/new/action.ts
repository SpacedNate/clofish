"use server"

import { prisma } from "@/lib/prisma"
import { put } from "@vercel/blob"
import { redirect } from "next/navigation"

export const action = async (
  items: {
    name: string
    amount: string
  }[],
  fd: FormData,
) => {
  const { tags, image } = Object.fromEntries(fd) as any

  const number = await prisma.$transaction(async (prisma) => {
    const { count } = await prisma.counter.findUniqueOrThrow({
      where: { id: "box" },
    })

    const number = count + 1

    await prisma.counter.update({
      where: { id: "box" },
      data: { count: number },
    })

    const box = await prisma.box.create({
      data: {
        number: number.toString(),
        tags: tags.split(",").map((tag: string) => tag.trim().toLowerCase()),
      },
    })

    for (const { name, amount } of items) {
      await prisma.item.create({
        data: {
          name,
          amount,
          boxId: box.id,
        },
      })
    }

    return number
  })

  await put(number.toString(), image, {
    access: "public",
    addRandomSuffix: false,
  })

  redirect("/" + number)
}
