import { useEffect, useState } from "react";

const useFetchUbications = (ubications) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  })

  useEffect(() => {
    getProvinces()
    if (ubicationInfo.province !== '') {
      getLocations()
    }
  }, [ubications])
}

export default useFetchUbications
