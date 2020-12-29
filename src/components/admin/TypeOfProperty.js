import React from 'react'
import {
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@material-ui/core'

function TypeOfProperty(props) {
  const { typeOfProperty, handleChange, valueRadio } = props

  if (typeOfProperty === 'Casas') {
    return (
      <RadioGroup name="unit" onChange={handleChange} value={valueRadio} defaultValue="Casa" row color="primary">
        <FormControlLabel value="Casa" control={<Radio color="primary" />} label="Casa" />
        <FormControlLabel value="Triplex" control={<Radio color="primary" />} label="Triplex" />
        <FormControlLabel value="Prefabricada" control={<Radio color="primary" />} label="Prefabricada" />
        <FormControlLabel value="Cabaña" control={<Radio color="primary" />} label="Cabaña" />
      </RadioGroup>
    )
  } else if (typeOfProperty === 'Departamentos') {
    return (
      <RadioGroup name="unit" onChange={handleChange} value={valueRadio} defaultValue="Departamento" row color="primary">
        <FormControlLabel value="Departamento" control={<Radio color="primary" />} label="Departamento" />
        <FormControlLabel value="Triplex" control={<Radio color="primary" />} label="Triplex" />
        <FormControlLabel value="Semipiso" control={<Radio color="primary" />} label="Semipiso" />
        <FormControlLabel value="Duplex" control={<Radio color="primary" />} label="Duplex" />
        <FormControlLabel value="Penthouse" control={<Radio color="primary" />} label="Penthouse" />
      </RadioGroup>
    )
  } else {
    return null
  }
}

export default TypeOfProperty
