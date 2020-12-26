import React, { useState } from 'react'
import {
    Container,
    Typography,
    Button,
    RadioGroup,
    FormControl,
    Select,
    MenuItem,
    FormControlLabel,
    Radio,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import SpecsForUnit from './SpecsForUnit'
import TypeOfProperty from './TypeOfProperty'

const useStyles = makeStyles((theme) => ({
    submit: {
        marginTop: "15px"
    },
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


export default function NewProperty(props) {
    const classes = useStyles()
    const [propertyInfo, setPropertyInfo] = useState({
        property: 'Casas',
        unit: 'Casa',
        operation: 'Alquiler',
        bathroom: false,
        numberOfBathrooms: 0,
        balcony: false,
        numberOfBalconies: 0,
    })

    const handleChange = (e) => {
        const { name, value, checked } = e.target
        setPropertyInfo({ ...propertyInfo, [name]: value || checked })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(propertyInfo)
    }

    return (
        <>
            <Container className={classes.grid} maxWidth="md">
                <FormControl className={classes.formControl} required >
                    <Typography variant="h6" align="left" className={classes.typography}>
                        Tipo de inmueble
                        </Typography>
                    <Select
                        id="tipo-de-inmueble"
                        labelId="tipo-de-inmueble"
                        onChange={handleChange}
                        value={propertyInfo.property}
                        name="property"
                    >
                        <MenuItem value={"Casas"}>Casas</MenuItem>
                        <MenuItem value={"Departamentos"}>Departamento</MenuItem>
                        <MenuItem value={"Cocheras"}>Cocheras</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl} required>
                    {propertyInfo.property !== "Cocheras" &&
                        <Typography variant="h6" align="left" className={classes.typography}>
                            Tipo de unidad
                        </Typography>
                    }
                    <TypeOfProperty
                        typeOfProperty={propertyInfo.property}
                        classes={classes}
                        handleChange={handleChange}
                        valueRadioCasas={propertyInfo.unit}
                    />
                </FormControl>
                <FormControl className={classes.formControl} required >
                    <Typography variant="h6" align="left" className={classes.typography}>
                        Tipo de operacion
                    </Typography>
                    <RadioGroup name="operation" onChange={handleChange} value={propertyInfo.operation} defaultValue="Alquiler" row color="primary">
                        <FormControlLabel value="Alquiler" control={<Radio color="primary" />} label="Alquiler" />
                        <FormControlLabel value="Alquileres Temporarios" control={<Radio color="primary" />} label="Alquileres Temporarios" />
                        <FormControlLabel value="Venta" control={<Radio color="primary" />} label="Venta" />
                        <FormControlLabel value="Tiempo compartido" control={<Radio color="primary" />} label="Tiempo Compartido" />
                    </RadioGroup>
                </FormControl>
                <FormControl className={classes.formControl} >
                    {SpecsForUnit !== null &&
                        <Typography variant="h6" align="left" >
                            Especificaciones
                         </Typography>
                    }
                    <SpecsForUnit
                        typeOfProperty={propertyInfo.property}
                        propertyInfo={propertyInfo}
                        handleChange={handleChange}
                    />
                </FormControl>
            </Container>
        </>
    )
}


