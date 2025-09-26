import React from 'react'

const VARIANT_STYLES = {
  pink: {
    bg: 'bg-gradient-to-br from-[#ffeef4] to-[#f8d6e6]',
    border: 'border-2 border-[#f5b4cf]'
  },
  lavender: {
    bg: 'bg-gradient-to-br from-[#f7f3ff] to-[#efe7ff]',
    border: 'border-2 border-[#d9cfff]'
  },
  violet: {
    bg: 'bg-gradient-to-br from-[#f3eefe] to-[#efe7ff]',
    border: 'border-2 border-[#cdbdf0]'
  },
  bubble: {
    bg: 'bg-gradient-to-br from-[#e7b0c5] to-[#e89db8]',
    border: 'border-4 border-white/20'
  },
  default: {
    bg: 'bg-white',
    border: 'border border-gray-200'
  }
}

export default function Section({title, children, variant='default', className=''}) {
  const style = VARIANT_STYLES[variant] || VARIANT_STYLES.default
  const thoughtClass = variant === 'bubble' ? 'thought' : ''
  return (
    <div className={`${style.bg} ${style.border} ${thoughtClass} rounded-2xl p-4 ${className}`}>
      {title && <div className="flex items-center justify-between mb-3">
        <h4 className={`font-bold ${variant==='bubble' ? 'text-white' : 'text-[#5b3f87]'}`}>{title}</h4>
        <div className="hidden sm:flex gap-2">
          <div className="w-3 h-3 rounded-full bg-white/30" />
          <div className="w-3 h-3 rounded-full bg-white/20" />
        </div>
      </div>}
      <div>{children}</div>
    </div>
  )
}
