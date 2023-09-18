import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()((theme) => ({
  Header: {
    position: 'fixed',
    display: 'flex',
    zIndex: 1,
    top: 0,
    padding: '2rem',
    justifyContent: 'flex-end',
    width: '100%',
    fontWeight: 300,
    boxSizing: 'border-box',
    alignItems: 'center',
    background: 'transparent',

    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    }
  },
  Logo: {
    display: 'flex',
    cursor: 'pointer'
  },
  Nav: {
    display: 'flex',
    alignItems: 'center',
  },
  Li: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    zIndex: 1,
    padding: '2rem',
    cursor: 'pointer',

    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    }
  },
  HoverIndicator: {
    transform: 'scale(1) !important',
  },
  Indicator: {
    position: 'absolute',
    width: 5,
    height: 5,
    top: '4rem',
    left: '50%',
    backgroundColor: '#ece7e1',
    borderRadius: '50%',
    transform: 'scale(0) translateX(-50%)',
    transition: 'transform 0.2s cubic-bezier(0.76, 0, 0.24, 1)',
  },
  Link: {
    color: '#ece7e1',
    cursor: 'pointer'
  }
}))

export default useStyles
