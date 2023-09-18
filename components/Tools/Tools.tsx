'use client'
import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { MY_TOOLS } from '@/consts'

import useStyles from './Tools.styles'
import { RoundedButton } from '@/effects'

export function Tools() {
  const { classes } = useStyles()

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover((prev) => (true))
  const handleMouseLeave = () => setIsHover((prev) => (false))

  return (
    <Box className={classes.Section}>
      <Box className={classes.InnerContainer}>
        <Box className={classes.ToolsTitle}>
          <Typography
            variant='h2'
            style={{
              fontFamily: 'sans-serif',
              textTransform: 'uppercase',
            }}
          >
            All the technology
            I have been working with
          </Typography>
          <Typography variant='body1'>
            Front-End,
            Back-End,
            Collaboration,
            Design
          </Typography>
          <Box
            style={{
              position: 'relative',
              height: '30vh',
              padding: '100px 0'
            }}
          >
            <Box
              data-scroll
              data-scroll-speed={0.1}
            >
              <RoundedButton
                className={classes.button}
                onMouseOver={handleHover}
                onMouseLeave={handleMouseLeave}
                backgroundColor={isHover ? '#ece7e1' : '#1C1D20'}
              >
                <Typography
                  variant='body2'
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    transition: 'color 0.4s linear',
                  }}
                  className={`${isHover ? classes.Text : null}`}
                >
                  Technology
                </Typography>
              </RoundedButton>
            </Box>
          </Box>
        </Box>
        <Box className={classes.Wrapper}>
          {MY_TOOLS.map((item, i) => (
            <Box className={`${classes.card}`} key={i}>
              <Typography variant='body2'>
                {item?.title}
              </Typography>
              <Box className={classes.List}>
                {item?.list.map((item, i) => (
                  <Typography key={i} variant='body1'>
                    {item?.name}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}