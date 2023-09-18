'use client'

import React from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Magnetic } from '..';
import Box from '@mui/material/Box';
import useStyles from './RoundedButton.styles';

export function RoundedButton({ children, backgroundColor, ...attributes }) {

  const { classes } = useStyles()

  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId: string | number | NodeJS.Timeout | null | undefined = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true })
    timeline.current
      .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
      .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit")
  }, [])

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId)
    timeline.current.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300)
  }

  return (
    <Magnetic>
      <Box className={classes.RoundedButton} style={{ overflow: "hidden" }} onMouseEnter={() => { manageMouseEnter() }} onMouseLeave={() => { manageMouseLeave() }} {...attributes}>
        {
          children
        }
        <Box ref={circle} style={{ backgroundColor }} className={classes.Circle}></Box>
      </Box>
    </Magnetic>
  )
}