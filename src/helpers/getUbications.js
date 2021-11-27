const url = process.env.REACT_APP_API_GOB_AR

export const getProvinces = async () => {
  const resProvince = await fetch(url + '/provincias')
  const { provincias } = await resProvince.json()
  return provincias
}

export const getLocations = async () => {
  const urlLocation = `${url}/localidades?provincia=${province}&max=500`
  const resLocation = await fetch(urlLocation)
  const { localidades } = await resLocation.json()
  return localidades
}


