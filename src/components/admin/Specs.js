import React from 'react'
import {
  FormControl,
  Grid,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  FormGroup
} from '@material-ui/core'

function Specs(props) {
  const maxItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const {
    formControlLabel,
    nameFormControlLabel,
    checkedProperty,
    handleChange,
    nameCheckbox,
    selectLabelId,
    selectValue,
    selectName
  } = props

  return (
    <Grid container spacing={1}>
      <FormGroup row>
        <FormControlLabel
          label={formControlLabel} //props
          name={nameFormControlLabel} //props
          control={
            <Checkbox
              checked={checkedProperty} //props
              onChange={handleChange}
              name={nameCheckbox} //props
              color="primary"
            />
          }
        />
      </FormGroup>
      <FormControl disabled={checkedProperty ? false : true} >
        <Select
          labelId={selectLabelId} //props
          onChange={handleChange}
          value={selectValue} //props
          name={selectName} //props
        >
          {maxItems.map((items) => (
            <MenuItem key={items} name="numbers" value={maxItems[items - 1]}>{maxItems[items - 1]}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  )
}

export default Specs
