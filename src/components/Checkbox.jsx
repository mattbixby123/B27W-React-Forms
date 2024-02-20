import React from 'react';
import Checkbox from "@mui/material/Checkbox";

function MyCheckbox() {
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "Checkbox" }}
    />
  );
}

export default MyCheckbox;
