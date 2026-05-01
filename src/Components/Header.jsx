import React from 'react'

export default function Header({text,animate}) {
  return (
    <div className={`text-center text-2xl ${animate} font-bold py-7`}>{text}</div>
  )
}
