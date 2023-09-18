'use client'

import Link from 'next/link'
import React, { useState } from 'react'


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { RoundedButton } from '@/effects'

import useStyles from './Contact.styles'

export function Contact() {
  const { classes } = useStyles()

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover((prev) => (true))
  const handleMouseLeave = () => setIsHover((prev) => (false))
  return (
    <Box className={classes.Section}>
      <Box className={classes.InnerContainer}>
        <Box
          style={{
            position: 'relative',
            height: '30vh',
            padding: '130px 0'
          }}
        >
          <Box
            data-scroll
            data-scroll-speed={0.1}
          >
            <RoundedButton
              backgroundColor={isHover ? '#ece7e1' : '#1C1D20'}
              className={classes.button}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <Link href='mailto:gsaezhen@uwaterloo.ca' style={{ all: 'unset', cursor: 'pointer' }}>
                <Typography
                  variant='body2'
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.4s linear',
                  }}
                  className={`${isHover ? classes.Text : null}`}
                >
                  Contact ME
                </Typography>
              </Link>
            </RoundedButton>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}