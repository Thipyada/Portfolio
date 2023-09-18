import { makeStyles } from 'tss-react/mui'

const useStyles = makeStyles()(() => ({
  introduction: {
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 99,
    backgroundColor: '#ece7e1',
  },
  textBlock: {
    display: 'flex',
    color: 'rgba(39, 67, 54, 1)',
    fontSize: '8rem',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  svg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 'calc(100% + 300px)'
  },
}))

export default useStyles
