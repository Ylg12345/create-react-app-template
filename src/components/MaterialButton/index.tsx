import React, { FC } from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete'
import { ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const MaterialButton: FC = () => {

  const classes = useStyles();


  return (
    <div className={classes.root}>
      <ButtonGroup variant='contained' color='primary'>
        <Button
          startIcon={<SaveIcon />}
        >
          Save
        </Button>
        <Button
          startIcon={<DeleteIcon />}
        >
          DisCard
        </Button>
      </ButtonGroup>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
    </div>
  )
}

export default MaterialButton