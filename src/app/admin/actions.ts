"use server"

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation"

export const search = async (prev: any, fd: FormData) => {
  const { query, type } = Object.fromEntries(fd)

  if (type === "item") {
    return await prisma.item.findMany({
      where: {
        name: {
          equals: query as string,
          mode: "insensitive",
        },
      },
      include: { box: true },
    })
  }

  return await prisma.box.findMany({
    where: {
      tags: { has: query as string },
    },
  })
}

export const member = async (fd: FormData) => {
  await prisma.user.create({
    data: {
      email: fd.get("email") as string,
    },
  })

  redirect("/")
}
