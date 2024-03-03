import React from 'react'
import clsx from 'clsx'
export default function Hr({className}: {className?: string}) {
  return (
    <hr className={clsx(className, 'bg-grey border-1 border-grey w-full')}/>
  )
}
