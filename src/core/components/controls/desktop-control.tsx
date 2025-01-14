import React, { useState } from 'react'
import CrashForm from './crash/form'
import If from '@/core/components/conditions/if'

type Props = {
  color: string
}

export default function DesktopControl({ color }: Props) {
  const [second, setSecond] = useState<boolean>(true)

  return (
    <div className=" w-[800px] gap-3 justify-center relative grid-flow-row">
      <CrashForm
        color={color}
        secondEnabled={second}
        toggleSecond={setSecond}
        position="left"
      />

      <If condition={second}>
        <CrashForm
          color={color}
          hideSelf={setSecond}
          position="right"
        />
      </If>
    </div>
  )
}
