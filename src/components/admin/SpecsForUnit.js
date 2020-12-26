import React from 'react'
import Specs from './Specs'

function SpecsForUnit(props) {
    const { typeOfProperty, propertyInfo, handleChange } = props

    if (typeOfProperty === 'Casas') {
        return (
            <>
                <Specs
                    formControlLabel="Baño (Opcional)"
                    nameFormControlLabel="bathroom"
                    checkedProperty={propertyInfo.bathroom}
                    handleChange={handleChange}
                    nameCheckbox="bathroom"
                    selectLabelId="numero-de-banios"
                    selectValue={propertyInfo.numberOfBathrooms}
                    selectName="numberOfBathrooms"
                />
                <Specs
                    formControlLabel="Balcon (Opcional)"
                    nameFormControlLabel="balcony"
                    checkedProperty={propertyInfo.balcony}
                    handleChange={handleChange}
                    nameCheckbox="balcony"
                    selectLabelId="balcones"
                    selectValue={propertyInfo.numberOfBalconies}
                    selectName="numberOfBalconies"
                />
            </>
        )
    } else if (typeOfProperty === 'Departamentos') {
        return (
            <Specs
                formControlLabel="Baño (Opcional)"
                nameFormControlLabel="bathroom"
                checkedProperty={propertyInfo.bathroom}
                handleChange={handleChange}
                nameCheckbox="bathroom"
                selectLabelId="numero-de-banios"
                selectValue={propertyInfo.numberOfBathrooms}
                selectName="numberOfBathrooms"
            />
        )
    } else {
        return null
    }
}

export default SpecsForUnit
