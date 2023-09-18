'use client';
import { useState, useRef } from 'react';

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Magnetic } from '@/effects';
import useStyles from './Header.styles';
import Link from 'next/link';

export function Header() {
  const header = useRef(null);

  const { classes } = useStyles()

  const [isHover, setIsHover] = useState({
    work: false,
    about: false,
    contact: false,
  });

  const handleHover = (link: string) => {
    setIsHover((prevState) => ({
      ...prevState,
      [link]: true,
    }));
  };

  const handleMouseLeave = (link: string) => {
    setIsHover((prevState) => ({
      ...prevState,
      [link]: false,
    }));
  };


  return (
    <>
      <Box ref={header} className={classes.Header}>
        {/* <div className={classes.Logo}>
          <Typography style={{ textTransform: 'uppercase' }}>Thipyada Sae-zheng</Typography>
        </div > */}
        <Box className={classes.Nav}>
          {/* <Magnetic>
            <Box className={classes.Li}
              onMouseOver={() => handleHover('work')}
              onMouseLeave={() => handleMouseLeave('work')}
            >
              <Typography className={classes.Link}>Work</Typography>
              <Box className={`${classes.Indicator} ${isHover.work ? classes.HoverIndicator : null}`}></Box>
            </Box>
          </Magnetic> */}
          <Magnetic>
            <Box className={classes.Li} onMouseOver={() => handleHover('about')} onMouseLeave={() => handleMouseLeave('about')}>
              <Link
                href='/ThipyadaGigi_Saezheng_Resume.pdf' style={{ all: 'unset', cursor: 'pointer' }}
                target='_blank'
              >
                <Typography className={classes.Link}>Resume</Typography>
              </Link>
              <Box className={`${classes.Indicator} ${isHover.about ? classes.HoverIndicator : null}`}></Box>
            </Box>
          </Magnetic>
          <Magnetic>
            <Link
              href='mailto:gsaezhen@uwaterloo.ca'
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              <Box className={classes.Li} onMouseOver={() => handleHover('contact')} onMouseLeave={() => handleMouseLeave('contact')}>
                <Typography className={classes.Link}>Contact</Typography>
                <Box className={`${classes.Indicator} ${isHover.contact ? classes.HoverIndicator : null}`}></Box>
              </Box>
            </Link>
          </Magnetic>
        </Box >
      </Box >
    </>
  )
}