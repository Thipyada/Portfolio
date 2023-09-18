import { makeStyles } from 'tss-react/mui';
import theme from '../../styles/theme';

const useStyles = makeStyles()((theme) => ({
  Section: {
    display: 'block',
    margin: 0,
    padding: 0,
    border: 0,
    outline: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    background: '0 0',
  },
  Container: {
    height: '100vh',
    maxHeight: '1080px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
  },
  InnerContainer: {
    paddingLeft: '2rem',
    paddingRight: '2rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
    maxWidth: '1536px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  },
  Line: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 0,
    height: 1,
    background: '#ece7e1',
  }
}))

export default useStyles