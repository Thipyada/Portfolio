"use client"

import React from 'react'

import { createTheme } from '@mui/material/styles'

const themeBreakpoints = createTheme().breakpoints

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 732,
      md: 1024,
      lg: 1488,
      xl: 1536,
    }
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Skyer',
      'Ibarra Real Nova',
      'Monoton',
      'Poppins'
    ].join(','),
    h1: {
      fontFamily: 'Skyer',
      fontSize: 'clamp(1.8125rem, .5692rem + 6.238vw, 8.125rem)',
      lineHeight: '120%'
    },
    h2: {
      fontFamily: 'Skyer',
      fontSize: 'clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem)',
      lineHeight: '150%'
    },
    h3: {
      fontFamily: 'Ibarra Real Nova',
      fontSize: 'clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem)',
      lineHeight: '150%'
    },
    h4: {
      fontFamily: 'Montserrat',
      fontSize: 'clamp(1.5rem, 1.0982rem + 1.7143vw, 2.8125rem)',
      fontWeight: 500,
      lineHeight: '120%'
    },
    h6: {
      fontFamily: 'Montserrat',
      fontSize: 'clamp(0.75rem, .8852rem + .4898vw, 1.375rem)',
      fontWeight: 600,
      lineHeight: '120%'
    },
    body1: {
      fontFamily: 'Montserrat',
      fontSize: 'clamp(0.75rem, .8852rem + .4898vw, 1.375rem)',
      fontWeight: 300,
      lineHeight: '120%'
    },
    body2: {
      fontFamily: 'Skyer',
      fontSize: 'clamp(1rem, .8852rem + .4898vw, 1.875rem)',
      fontWeight: 400,
      lineHeight: '120%'
    },
  },
})

export default theme
