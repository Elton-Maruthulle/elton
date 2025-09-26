import React from 'react'
import Contact from './Contact'
import Strengths from './Strengths'
import Section from './Section'
import profilePic from '../assets/elton.jpeg'
import LottieAnimation from './LottieAnimation' // ✅ import Lottie component

export default function RightPanel() {
  return (
    <aside className="flex flex-col gap-4">
      <Section title="CONTACT" variant="pink">
        <Contact />
      </Section>

      <div className="bg-white rounded-2xl p-2">
        <img src={profilePic} alt="profile" className="w-full rounded-xl object-cover" />
      </div>

      <Section title="STRENGTHS" variant="lavender">
        <Strengths />
      </Section>

      <Section title="" variant="teal">
        <LottieAnimation />
      </Section>
    </aside>
  )
}
