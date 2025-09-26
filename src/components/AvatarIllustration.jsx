import React from 'react'
import MyAvatar from '../assets/eltoncartoon.png' 

export default function AvatarIllustration() {
  return (
    <div className="flex items-center gap-4">
      <div className="w-36 h-36 sm:w-52 sm:h-52 rounded-full bg-palePink p-2 avatar-border flex items-center justify-center overflow-hidden">
        <img 
          src={MyAvatar} 
          alt="Avatar" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="hidden sm:block">
        <div className="text-sm text-[#6b5a7c]">Aspiring software engineer</div>
        <div className="mt-1 text-xs text-[#a79ab2]">loops, logic & less breaks</div>
      </div>
    </div>
  )
}
