import React from 'react'

const Bouncyballs = ({top, right, width, height, color}: {top: string, right: string, width: string, height: string, color: string}) => {
  return (
    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--primary)] rounded-full animate-bounce"></div>
  )
}

export default Bouncyballs