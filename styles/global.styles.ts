'use client'

import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
  body: {
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    cursor: 'wait',
    background: 'rgba(39, 67, 54, 1)',
    color: '#ece7e1'
  },
}))

export default useStyles
