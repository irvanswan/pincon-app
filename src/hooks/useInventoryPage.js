import { useEffect, useState } from "react";
import { fetchMyApi } from "../lib/fetcher";

const useInventoryPage = () => {
  const title = "My Pokemon"
  const [updated, setUpdated] = useState(false);
  const [responseApi, setResponseApi] = useState({
    loading: false,
    data: [],
    isError: false
  })

  // function fetching api
  const fetchApi = async() => {
    // set loading api
    setResponseApi({...responseApi, loading: true})
    // call api
    const response = await fetchMyApi('GET', '/inventory')
    // if get response from api
    if(response){
      setResponseApi({
        loading: false,
        data: response.data,
        isError: false
      })
    }else{
      setResponseApi({
        loading: false,
        data: [],
        isError: true
      })
    }
  }

  // release pokemon
  const releasedPokemon = async(id) => {
    fetchMyApi('PUT', '/release', {id: id}).then((res) => {
      window.alert("Success Release");
      fetchApi();
    }).catch((err) => {
      window.alert("Failed Release");
      fetchApi();
    });
  }

  useEffect(() => {
    fetchApi();
  }, []);

  return {
    title,
    responseApi,
    updated,
    setUpdated,
    releasedPokemon
  }
}

export default useInventoryPage