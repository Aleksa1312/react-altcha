"use client"

import React, { useEffect } from "react"
import { type Configure } from "../types"

export function Altcha(props: Configure) {
  // bind altcha script to the document head
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/altcha/dist/altcha.min.js"
    script.async = true
    script.defer = true
    script.type = "module"
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  return <altcha-widget {...props}></altcha-widget>
}
