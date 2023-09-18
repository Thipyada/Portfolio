'use client'

import Link from 'next/link'
import React, { useState } from 'react'


import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { MY_PROJECTS } from '@/consts'
import { Magnetic, RoundedButton } from '@/effects'

import useStyles from './Projects.styles'

export function Projects() {
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
                Projects
              </Typography>
            </RoundedButton>
          </Box>
        </Box>

        <Box
          style={{
            padding: '130px 0'
          }}
        // className={classes.Wrapper}
        >
          {MY_PROJECTS.map((item, i) => (
            <Box key={i} className={classes.EachProject}>
              <Link
                href={item?.link}
                target='_blank'
                rel="noopener noreferrer"
                style={{
                  color: '#ece7e1',
                  textDecoration: 'none'
                }}
                className={classes.Link}
              >
                <Magnetic>
                  <Typography
                    variant='h1'
                    style={{
                      fontFamily: 'Montserrat',
                      fontSize: 'clamp(1.8125rem, .5692rem + 6.238vw, 5.125rem)',
                      width: 'fit-content'
                    }}>
                    {item?.name}
                  </Typography>
                </Magnetic>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}