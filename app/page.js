import Image from 'next/image'
import Header from './components/Header/Header'
import Companies from './components/Companies/Companies'
import HowItWorks from './components/HowItWorks/HowItWorks'
import PathWay from './components/PathWay/PathWay'
import Testimonial from './components/Testimonial/Testimonial'
import CTA from './components/CTA/CTA'

export default function Home() {
  return (
    <main className="">
      <Header/>
      <Companies/>
      <HowItWorks/>
      <PathWay/>
      <Testimonial/>
      <CTA/>
    </main>
  )
}
