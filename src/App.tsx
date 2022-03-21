//import Fluid from './components/Fluid'
import ComplexGrid from './components/ComplexGrid'
// import Typography from './components/Typography'
// import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { actionCreator, CombinedState } from './state';

import { Dispatch } from 'redux'
import { Action } from "./state/actions"


import { FC, useState } from 'react';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors'

import MaterialButton from './components/MaterialButton'
import MaterialChecked from './components/MaterialChecked'
import MaterialTextField from './components/MaterialTextField'
import ButtonStyled from './components/ButtonStyled'
import NestedGrid from './components/NestedGrid'

interface IProps {
  name: string,
  amount: number,
  depositMoney: (amount: number) => (dispatch: Dispatch<Action>) => void, 
  withdrawMoney: (amount: number) => (dispatch: Dispatch<Action>) => void, 
  bankrupt: () => (dispatch: Dispatch<Action>) => void
}

/* interface IAppDispatchProps {
  depositMoney: (amount: number) => (dispatch: Dispatch<Action>) => void, 
  withdrawMoney: (amount: number) => (dispatch: Dispatch<Action>) => void, 
  bankrupt: () => (dispatch: Dispatch<Action>) => void
}
 */
const theme = createTheme({
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400]
    }
  }
})

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  ...bindActionCreators(
    {
      depositMoney: actionCreator.depositMoney,
      withdrawMoney: actionCreator.withdrawMoney,
      bankrupt: actionCreator.bankrupt,
    },
    dispatch
  )
});

const mapStateToProps = (state: CombinedState) => {
  return {
    amount: state.bankReducer.amount
  }
}

const App: FC<IProps> = (props) => {

  const { name, amount, depositMoney, withdrawMoney, bankrupt } = props

  // const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreator, dispatch);
  //const amount = useSelector((state: State) => state.bankReducer);

  const [depositCount, setDepositCount] = useState<number>(100);
  const [withdrawCount, setWithdrawCount] = useState<number>(100);

  const changeDeposit = (count: number) => {
    if(count) {
      setDepositCount(count)
    }else {
      setDepositCount(0)
    }
  }

  const changewithDraw = (count: number) => {
    if(count) {
      setWithdrawCount(count)
    }else {
      setWithdrawCount(0)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>{name}</h1>
        <h1>{amount}</h1>
        <MaterialTextField
          depositCount={depositCount}
          withdrawCount={withdrawCount}
          changeDeposit={changeDeposit}
          changewithDraw={changewithDraw}
        />
        <div style={{ margin: '10px 10px' }}>
          <button onClick={() => depositMoney(depositCount)}>Deposit</button>
          <button onClick={() => withdrawMoney(withdrawCount)}>Withdraw</button>
          <button onClick={() => bankrupt()}>Bankrupt</button>
        </div>
        {/* <Fluid /> */}
{/*         <ComplexGrid />
        <Typography /> */}
        <MaterialChecked />
        <MaterialButton />
        <ButtonStyled />
        <ComplexGrid />
        <NestedGrid />
      </div>
    </ThemeProvider>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


