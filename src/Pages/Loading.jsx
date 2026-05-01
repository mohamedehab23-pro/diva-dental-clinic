import React from 'react'
import {CircularProgress} from "@heroui/react";

export default function Loading() {
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <CircularProgress aria-label="Loading..." />

    </div>
  )
}
