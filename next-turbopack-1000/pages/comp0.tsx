import { useEffect, useState } from 'react'

export function Comp0() {

  const [timestamp, setTimestamp] = useState(0)
  useEffect(() => {
    setTimestamp(Date.now())
  }, [])

  return <div>hello23fsaz2fz2423xszf22zv2341qs
    Leaf: {timestamp}
  </div>
}