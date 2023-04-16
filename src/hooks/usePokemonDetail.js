import { useEffect, useState } from "react";
import { fetchApiPokemon } from "../lib/fetcher";
import { useLocation } from "react-router-dom";

const usePokemonDetail = () => {
  const location = useLocation();
  const [title, setTitle] = useState(null);
  const [responseApi, setResponseApi] = useState({
    loading: false,
    data: {},
    isError: false
  })

  // function fetching api
  const fetchApi = async() => {
    // set loading api
    setResponseApi({...responseApi, loading: true})
    // call api
    const response = await fetchApiPokemon('GET', `/pokemon/${location.pathname.replace("/", "")}`)
    // if get response from api
    if(response){
      setResponseApi({
        loading: false,
        data: response,
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
    setTitle(location.pathname.replace("/", ""))
    if(location){
      fetchApi()
    }
  }, [location]);

  return {
    title,
    responseApi
  }
}

export default usePokemonDetail;