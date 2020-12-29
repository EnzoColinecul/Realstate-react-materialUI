import React, { useState, useEffect } from 'react'
import {
  TextField,
  Typography,
  RadioGroup,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Radio,
  Container
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  grid: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(8),
  },
  formControl: {
    width: "70%",
    marginTop: "15px"
  },
  typography: {
    marginTop: theme.spacing(2)
  }
}))

const AddUbication = () => {
  const url = `https://apis.datos.gob.ar/georef/api/provincias`
  const [provinces, setProvinces] = useState()
  const classes = useStyles()

  const getProvinces = async () => {
    const res = await fetch(url)
    const resJSON = await res.json()
    setProvinces(resJSON.provincias)
  }

  useEffect(() => {
    getProvinces()
  }, [])

  return (
    <>
      <Container className={classes.grid} maxWidth="md">
        <FormControl className={classes.formControl} required >
          <Typography variant="h6" align="left" className={classes.typography}>
            Provincia
          </Typography>
          {provinces["provincias"].map(province => (
            <MenuItem>{province}</MenuItem>
          ))
          }
        </FormControl>
      </Container>
    </>
  )
}

export default AddUbication
