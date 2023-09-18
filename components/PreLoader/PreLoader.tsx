'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

import useStyles from './PreLoader.styles';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Welcome"]

export function PreLoader() {
  const { classes } = useStyles()
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight })
  }, [])

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(() => {
      setIndex(index + 1)
    }, index == 0 ? 2000 : 300)
  }, [index])

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
    }
  }

  return (
    <motion.div variants={slideUp} initial="initial" exit="exit" className={classes.introduction}>
      {dimension.width > 0 &&
        <>
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className={classes.textBlock}
          >
            {/* <span className={classes.text}></span> */}
            {words[index]}
          </motion.p>
          <svg className={classes.svg}>
            <motion.path
              variants={curve}
              style={{
                fill: '#ece7e1',
                color: 'rgba(39, 67, 54, 1)'
              }}
              initial="initial"
              exit="exit"></motion.path>
          </svg>
        </>
      }
    </motion.div>
  )
}