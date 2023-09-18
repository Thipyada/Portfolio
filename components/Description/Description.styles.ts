import { makeStyles } from "tss-react/mui-compat";
import theme from '../../styles/theme';

const useStyles = makeStyles()((theme) => ({
  Section: {
    display: 'block',
    margin: 0,
    // padding: 0,
    border: 0,
    outline: 0,
    fontSize: '100%',
    verticalAlign: 'baseline',
    background: '0 0',
    padding: '130px 0',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      height: '540px'
    },
    [theme.breakpoints.down('md')]: {
      minHeight: '50vh',
    }
  },
  InnerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: '100%',
    maxWidth: '1536px',
    height: '100%',
    paddingLeft: '2rem',
    paddingRight: '2rem',

    [theme.breakpoints.down('md')]: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }
  },
  body: {
    maxWidth: 1400,
    display: 'flex',
    gap: 50,
    position: 'relative',
  },
  mask: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
  },
  button: {
    top: '80%',
    left: 'calc(100% - 200px)',
    width: 180,
    height: 180,
    backgroundColor: '#1C1D20',
    color: 'white',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      color: 'rgba(39, 67, 54, 1)',
    }
  },
  Text: {
    '&:hover': {
      color: 'rgba(39, 67, 54, 1)',
    }
  }
}))

export default useStyles