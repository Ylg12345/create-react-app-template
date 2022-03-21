import { FC } from "react";

import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '10px 30px',
    marginTop: 10
  }
})

const ButtonStyled: FC = () => {

  const classes = useStyles()

  return (
    <Button
      className={classes.root}
    >
      Test Styled Button
    </Button>
  )
}

export default ButtonStyled