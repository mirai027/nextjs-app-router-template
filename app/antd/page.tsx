import { Metadata } from 'next'
import Container from './Container'

export const metadata: Metadata = {
  title: 'Create Next App 000',
  description: 'Generated by create next app',
}

export default async function Page() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const data = await res.json()
  return (
    <>
      <Container data={data} />
    </>
  )
}
