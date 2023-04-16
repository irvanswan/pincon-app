const fetchApiPokemon = async (method, path, params = null) => {
  let options = {
    method,
  };
  let url = `${process.env.REACT_APP_POKEMON_BASE}${path}`;
  if (method === "GET") {
    if(params){
      url += `?${new URLSearchParams(params).toString()}`;
    }
  } else {
    options.body = JSON.stringify(params);
  }
  return (await fetch(url, options)).json();
};

const fetchMyApi = async (method, path, params = null) => {
  let options = {
    method,
    headers: {
      "Access-Control-Allow-Origin": `* `,
      "Content-Type": "application/json"
    }
  };
  let url = `${process.env.REACT_APP_API_BASE}${path}`;
  if (method === "GET") {
    if(params){
      url += `?${new URLSearchParams(params).toString()}`;
    }
  } else {
    options.body = JSON.stringify(params);
  }
  return (await fetch(url, options)).json();
};

export { fetchApiPokemon, fetchMyApi };
