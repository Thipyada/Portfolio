'use client'

import React from 'react'
import Typography from '@mui/material/Typography'

import Box from '@mui/material/Box'
import useStyles from './Landing.styles'
import { Typewriter } from '@/effects'

export function Landing() {
  const { classes } = useStyles()
  // const Phrases = ["Developer", "Student", "Learner"];

  return (
    <Box className={classes.Section}>
      <Box className={classes.Container}>
        <Box className={classes.InnerContainer}>
          <Typography
            variant='h1'
            style={{
              fontFamily: 'Monoton',
              textTransform: 'uppercase',
              textAlign: 'left',
            }}
          >
            Welcome !
          </Typography>
          <Typography
            variant='h1'
            style={{
              fontFamily: 'Monoton',
              textTransform: 'uppercase',
              textAlign: 'right',
            }}
          >
            This is Gigi
          </Typography>
          <Typography
            variant='h1'
            style={{
              fontFamily: 'Monoton',
              textTransform: 'uppercase',
            }}
          >
            I&apos;m a <span><Typewriter text="Developer" delay={300} infinite={true} /></span>
          </Typography>
        </Box>
        <Box className={classes.Line} style={{ width: '100%' }}></Box>
      </Box>
    </Box>
  )
}