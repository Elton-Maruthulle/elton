import React from 'react'

const IconBox = ({ label }) => (
  <div className="p-2 bg-white rounded-md text-center text-xs shadow-sm hover:scale-105 transition-transform">
    {label}
  </div>
)

export default function Software() {
  return (
    <div className="grid grid-cols-3 gap-2 text-xs text-[#4a3863] animate-fadeIn">
      {/* Programming & Frameworks */}
      <IconBox label="JavaScript" />
      <IconBox label="TypeScript" />
      <IconBox label="React" />
      <IconBox label="Node.js" />
      <IconBox label="Express" />
      <IconBox label="Firebase" />
      <IconBox label="Spring Boot" />
      <IconBox label="Java" />
      <IconBox label="C++" />
      <IconBox label="SQL" />
      <IconBox label="MySQL" />
      <IconBox label="Git/GitHub" />
      <IconBox label="TailwindCSS" />
      <IconBox label="Docker" />
      <IconBox label="IBM Cloud" />

      {/* Tools */}
      <IconBox label="VS Code" />
      <IconBox label="IntelliJ IDEA" />
      <IconBox label="Eclipse" />
      <IconBox label="Photoshop" />
      <IconBox label="Figma" />
      <IconBox label="ChatGPT" />
    </div>
  )
}
