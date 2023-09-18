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
    height: '100%',
  },

  mask: {
    position: 'relative',
    overflow: 'hidden',
    display: 'inline-flex',
  },
  button: {
    bottom: 0,
    right: 'calc(100% - 300px)',
    width: 220,
    height: 220,
    backgroundColor: '#1C1D20',
    color: 'white',
    borderRadius: '50%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // cursor: 'pointer',
    '&:hover': {
      color: 'rgba(39, 67, 54, 1)',
    }
  },
  Text: {
    '&:hover': {
      color: 'rgba(39, 67, 54, 1)',
    }
  },
  Link: {
    marginLeft: '8rem'
  },
  EachProject: {
    borderTop: '1px solid #ece7e1',
    minHeight: '25vh',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    '&:last-child': {
      borderBottom: '1px solid #ece7e1'
    },
  },
}))

export default useStyles
