'use client'

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import {
  PreLoader,
  Landing,
  Description,
  Tools,
  Projects,
  Contact
} from "@/components"

import useStyles from '../styles/global.styles';

export default function Home() {
  const { classes } = useStyles()

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 4000)
      }
    )()
  }, [])
  return (
    <main>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Tools />
      <Projects />
      <Contact />
    </main>
  )
}
