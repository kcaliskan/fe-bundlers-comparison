import { watch } from 'node:fs'

watch('src/App.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})

watch('src/components/comp0.tsx', (e, filename) => {
  console.log(Date.now(), filename)
})