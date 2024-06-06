import { prisma } from "@/lib/prisma"
import { QRCodeSVG } from "qrcode.react"
import DimensionImage from "../components/DimensionImage"

interface Props {
  params: {
    number: string
  }
}

export default async function Number({ params: { number } }: Props) {
  const box = await prisma.box.findUnique({
    where: { number },
    include: { items: true },
  })
  if (!box) throw Error("Box not found")

  return (
    <div className="mx-auto w-3/5">
      {box.items.map((item) => {
        return (
          <div key={item.id}>
            <p>
              {item.name}: {item.amount}
            </p>
          </div>
        )
      })}

      <DimensionImage number={number} />

      <div className="flex w-min flex-col items-center rounded border px-2 pt-2">
        <QRCodeSVG value={"http://localhost:3000/" + number} />
        <p>{box.number.padStart(5, "0")}</p>
      </div>
    </div>
  )
}
