import React from 'react'
import AvatarIllustration from './AvatarIllustration'
import Section from './Section'
import Education from './Education'
import Language from './Language'
import Experience from './Experience'
import Software from './Software'

export default function LeftPanel(){
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <AvatarIllustration />
        <div>
          <h2 className="text-2xl font-bold text-textPurple">Elton Maruthulle</h2>
          <p className="text-sm text-[#6b5a7c] mt-1">📍 Boksburg, JHB</p>
        </div>
      </div>

      <Section variant="bubble" title="HEY THERE!" className="text-white">
        <p className="text-sm">
          I am <strong>Elton Maruthulle</strong>, an <strong>aspiring software engineer</strong> passionate about building web apps, learning new technologies, and solving real-world problems through code. I enjoy creating clean, functional, and beautiful software that makes life easier.
        </p>
      </Section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="EDUCATION" variant="lavender">
          <Education />
        </Section>
        <Section title="PROGRAMMING LANGUAGES" variant="pink">
          <Language />
        </Section>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Section title="EXPERIENCE" variant="violet">
          <Experience />
        </Section>
        <Section title="TOOLS & LANGUAGES" variant="lavender">
          <Software />
        </Section>
      </div>
    </div>
  )
}
