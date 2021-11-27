import React, { useState } from 'react'
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import Header from '../header/Header'
import NewProperty from './NewProperty'
import AddUbication from './AddUbication'
import UploadNumber from './UploadNumber'

const useStyles = makeStyles((theme) => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

const steps = ['Cargar tipo de inmueble', 'Agregar ubicacion del inmueble', 'Añadir numero de contacto'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NewProperty />
      break;
    case 1:
      return <AddUbication />
      break;
    case 2:
      return <UploadNumber />
      break;
    default:
      break;
  }
}

function Steps() {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
    console.log()
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <>
      <Header arrowBack="true" />
      <Stepper activeStep={activeStep} className={classes.Stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography variant="h5" gutterBottom>
            Inmueble cargado Correctamente
          </Typography>
        </>
      ) : (
          <>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              {activeStep !== 0 && (
                <Button onClick={handleBack} className={classes.button} color="primary" variant="outlined" type="submit">
                  Atras
                </Button>
              )}
              <Button onClick={handleNext} className={classes.submit} color="primary" variant="contained" type="submit">
                {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
              </Button>
            </div>
          </>
        )}
    </>
  )
}

export default Steps
