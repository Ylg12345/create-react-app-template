import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }),
)

interface IProps {
  depositCount: number,
  withdrawCount: number,
  changeDeposit: (id: number) => void,
  changewithDraw: (id: number) => void,
}

const MaterialTextField: FC<IProps> = ({ 
  depositCount,
  withdrawCount,
  changeDeposit,
  changewithDraw
 }) => {


  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
       id="outlined-basic" 
       label="Deposit" 
       variant="outlined" 
       value={depositCount}
       onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeDeposit(parseInt(e.target.value)) }
      />
      <TextField 
        id="outlined-basic" 
        label="Withdraw" 
        variant="outlined" 
        value={withdrawCount}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changewithDraw(parseInt(e.target.value)) }
      />
    </form>
  );
}

export default MaterialTextField