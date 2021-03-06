import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '10px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  heading: {
    fontSize: '2rem',
    color: 'rgba(0,183,255, 1)', 
  },
  col_heading: {
     borderRadius: 10,
     backgroundColor: '#fff', 
     color: 'rgba(0,183,255, 1)',
  },
  [theme.breakpoints.down("sm")]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));