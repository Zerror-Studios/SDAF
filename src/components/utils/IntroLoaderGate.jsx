"use client"

import { useEffect, useState } from "react"
import IntroLoader from "@/components/common/IntroLoader"

export default function IntroLoaderGate() {
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("sdaf_intro_seen")

    if (!hasSeenIntro) {
      setShowIntro(true)
      sessionStorage.setItem("sdaf_intro_seen", "true")
    }
  }, [])

  if (!showIntro) return null

  return <IntroLoader />
}
