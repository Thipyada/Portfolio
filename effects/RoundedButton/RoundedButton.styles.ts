import { makeStyles } from "tss-react/mui-compat";
import theme from '../../styles/theme';

const useStyles = makeStyles()((theme) => ({
  RoundedButton: {
    borderRadius: '3em',
    border: '1px solid rgb(136, 136, 136)',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px 60px 15px 60px',
    color: 'rgba(39, 67, 54, 1)',
  },
  Circle: {
    width: '100%',
    height: '150%',
    position: 'absolute',
    borderRadius: '50%',
    top: '100%',
  },
}))

export default useStyles