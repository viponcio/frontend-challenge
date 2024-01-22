import React from 'react'
import MobileControl from './mobile-control'
import DesktopControl from './desktop-control'

type Props = {
  color: string
}

export default function CrashControl({ color }: Props) {
  return (
    <div className="ml-8 w-[800px] gap-3 justify-center relative grid-flow-row">
      <MobileControl color={color} />

      <DesktopControl color={color} />
    </div>
  )
}
