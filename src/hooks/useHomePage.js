import { useEffect, useState } from "react";
import { fetchApiPokemon } from "../lib/fetcher";

const useHomePage = () => {
  const title = "Pokemon List"
  // variable for response api
  const [meta, setMeta] = useState({
    limit: 20,
    offset: 0
  }) 
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
    const response = await fetchApiPokemon('GET', '/pokemon', {limit: meta?.limit, offset: meta?.offset})
    // if get response from api
    if(response){
      console.log('response', response)
      const mergeArr = [...responseApi.data, ...response?.results];
      setResponseApi({
        loading: false,
        data: mergeArr,
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

  useEffect(() => {
    fetchApi()
  }, [meta]);

  return {
    title,
    responseApi,
    setMeta,
    meta
  }
}

export default useHomePage