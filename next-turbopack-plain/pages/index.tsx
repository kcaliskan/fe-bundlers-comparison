'use client'

import Car from './Car';
import Car01 from './Car01';
import Car02 from './Car02';
import Car03 from './Car03';
import Car04 from './Car04';
import Car05 from './Car05';
import Car06 from './Car06';
import Car07 from './Car07';
import Car08 from './Car08';
import Car09 from './Car09';
import Car10 from './Car10';
import Car11 from './Car11';
import Car12 from './Car12';
import Car13 from './Car13';
import Car14 from './Car14';
import { Comp0 } from './comp0'

import { useEffect, useState } from 'react'

export default function Home() {
  const [timestamp, setTimestamp] = useState(0)
  useEffect(() => {
    setTimestamp(Date.now())
  }, [])

  return <div>
    <p>Rootzsa1231232fasdsa21</p>
    root: {timestamp}
    <Comp0 />
    <Car />
    <Car01 />
    <Car02 />
    <Car03 />
    <Car04 />
    <Car05 />
    <Car06 />
    <Car07 />
    <Car08 />
    <Car09 />
    <Car10 />
    <Car11 />
    <Car12 />
    <Car13 />
    <Car14 />
  </div>
}