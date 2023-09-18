'use client'

import { useInView, motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { slideUp, opacity } from './anim';

import Box from '@mui/material/Box'
import useStyles from './Description.styles';
import Typography from '@mui/material/Typography';
import { RoundedButton } from '@/effects';


export function Description() {
  const { classes } = useStyles()

  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover((prev) => (true))
  const handleMouseLeave = () => setIsHover((prev) => (false))


  const phrase = "As a web developer, I craft digital experiences that seamlessly blend creativity and functionality.";
  const splitWords = phrase.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const item of splitWords) {
    words.push([...item, "\u00A0"]);
  }

  const description = useRef(null);
  const isInView = useInView(description)
  return (
    <Box ref={description}
      className={classes.Section}
    >
      <Box
        className={classes.InnerContainer}
      >
        <Typography variant='body1'>
          {
            words.map((word, index) => {
              return <span className={classes.mask} key={index}>
                <motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"}>{word}</motion.span>
              </span>
            })
          }
        </Typography>
        {/* <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the web design world.</motion.p> */}
        <Box data-scroll data-scroll-speed={0.1}>
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
              About me
            </Typography>
          </RoundedButton>
        </Box>
      </Box>
    </Box>
  )
}