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
    backgroundColor: 'rgba(39, 67, 54, 1)',
  },
  textBlock: {
    display: 'flex',
    color: 'white',
    fontSize: '8rem',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  // text: {
  //   display: 'block',
  //   width: '8rem',
  //   height: '8rem',
  //   backgroundColor: 'white',
  //   borderRadius: '50%',
  //   marginRight: '10px',
  // },
  svg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 'calc(100% + 300px)'
  },
}))

export default useStyles
