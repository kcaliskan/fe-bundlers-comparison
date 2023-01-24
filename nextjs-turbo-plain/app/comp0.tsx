import { useEffect, useState } from 'react'

export function Comp0() {

  const [timestamp, setTimestamp] = useState(0)
  useEffect(() => {
    setTimestamp(Date.now())
  }, [])

  return <div>hello 0fsass123122132sf232sffasa
    Leaf: {timestamp}
  </div>
}