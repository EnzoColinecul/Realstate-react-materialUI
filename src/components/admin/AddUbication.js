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
  const [provinces, setProvinces] = useState([])
  const [location, setLocation] = useState([])
  const [ubicationInfo, setUbicationInfo] = useState({
    province: '',
    location: '',
    street: '',
    height: '',
    typeOfNeighborhood: ''
  })
  const classes = useStyles()
  const url = process.env.REACT_APP_API_GOB_AR
  const urlLocation = `${url}/localidades?provincia=${ubicationInfo.province}&max=500`

  const handleChange = (e) => {
    const { name, value, checked } = e.target
    setUbicationInfo({ ...ubicationInfo, [name]: value || checked })
  }
  const getProvinces = async () => {
    const resProvince = await fetch(url + '/provincias')
    const resProvinceJSON = await resProvince.json()
    setProvinces(resProvinceJSON.provincias)
  }

  const getLocations = async () => {
    const resLocation = await fetch(urlLocation)
    const resLocationJSON = await resLocation.json()
    setLocation(resLocationJSON.localidades)
  }
  console.log(location)


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
          <Select
            id="provincia"
            labelId="provincia"
            onChange={handleChange}
            value={ubicationInfo.province}
            name="province"
          >
            {provinces.map(province => (
              <MenuItem value={province.nombre} key={province.id}>{province.nombre}</MenuItem>
            ))
            }
          </Select>
        </FormControl>
        <FormControl className={classes.formControl} required disabled={ubicationInfo.province === ''} >
          <Typography variant="h6" align="left" className={classes.typography}>
            Localidad
          </Typography>
          <Select
            id="location"
            labelId="location"
            onChange={handleChange}
            value={ubicationInfo.location}
            name="location"
          >
            {location.map(location => (
              <MenuItem value={location.nombre} key={location.id}>{location.nombre}</MenuItem>
            ))
            }
          </Select>
        </FormControl>
      </Container>
    </>
  )
}

export default AddUbication
