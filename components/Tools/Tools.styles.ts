import { makeStyles } from 'tss-react/mui'
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
  InnerContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    width: '100%',
    maxWidth: '1536px',
    height: '100vh',

    [theme.breakpoints.up('md')]: {
      maxHeight: '1080px'
    },

    [theme.breakpoints.down('md')]: {
      height: '100%',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 1rem',
    },

  },
  ToolsTitle: {
    width: 'calc(35% - 4rem)',
    padding: '130px 0',
    margin: '0 2rem',
    position: 'absolute',
    [theme.breakpoints.down('md')]: {
      position: 'relative',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      width: '50%',
      margin: 0,
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
    },
  },
  Wrapper: {
    width: '65%',
    marginLeft: '35%',
    display: 'grid',
    gridAutoRows: '1fr',
    gridTemplateColumns: 'repeat(2,1fr)',
    height: '100%',
    [theme.breakpoints.up('md')]: {
      maxHeight: '1080px',
    },
    [theme.breakpoints.down('md')]: {
      height: 'auto',
      width: '100%',
      margin: 0,
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(1,1fr)',
    },
  },
  card: {
    background: '#ece7e1',
    color: 'rgba(39, 67, 54, 1)',
    border: '1px solid rgba(39, 67, 54, 1)',
    padding: '2rem',
    width: '100%',
    maxHeight: '100%',
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',

    [theme.breakpoints.down('md')]: {
      padding: '1rem',
    },
  },
  List: {
    maxHeight: '50%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [theme.breakpoints.down('md')]: {
      maxHeight: '55%',
    },
  },
  mask: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
  },
  button: {
    left: 'calc(100% - 300px)',
    width: 220,
    height: 220,
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
  },
}))

export default useStyles
