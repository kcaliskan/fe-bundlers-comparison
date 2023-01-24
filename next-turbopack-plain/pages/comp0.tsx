import { useEffect, useState } from 'react'

export function Comp0() {

  const [timestamp, setTimestamp] = useState(0)
  useEffect(() => {
    setTimestamp(Date.now())
  }, [])

  return <div>hello 213sfd232sa
    Leaf: {timestamp}
  </div>
}