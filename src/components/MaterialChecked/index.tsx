import React, { FC, useState } from "react";

import { FormControlLabel, Checkbox } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save'

const MaterialChecked: FC = () => {

  const [checked, setChecked] = useState<boolean>(false);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel 
      control={<Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        icon={<SaveIcon />}
        checkedIcon={<SaveIcon />}
      />}
      label="Testing Checkbox"
    />
  )
}

export default MaterialChecked