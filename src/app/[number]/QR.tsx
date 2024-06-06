"use client"

import { QRCodeCanvas } from "qrcode.react"

interface Props {
  number: string
}

export default function QR({ number }: Props) {
  return (
    <>
      <QRCodeCanvas value={"http://localhost:3000/" + number} />
    </>
  )
}
