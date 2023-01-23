import { watch } from 'node:fs'

watch('src/App.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})

watch('src/Leaf.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})