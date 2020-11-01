export const fetchSuggestions = (searchTerm) => {
  return fetch(`http://localhost:3001/search?q=${searchTerm}`)  
  .then((response)=>{
    console.log('Suucess',response)
    if (response.ok) {      
      return response.json()
    } else {
      return response.statusText;
    }
  })
  .catch((error) => {
    throw (error)
  });
};

export const fetchProductDetail = (id) => {
   return fetch(`http://localhost:3001/products/${id}`)
   .then((response)=>{
    console.log('Suucess',response)
    if (response.ok) {      
      return response.json()
    } else {
      return response.statusText;
    }
  })
  .catch((error) => {
    throw (error)
  });
};