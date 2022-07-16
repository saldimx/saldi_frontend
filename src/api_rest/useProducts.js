import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useProducts(idTienda) {
  const [Products, setProducts] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/api/productos/${idTienda}`,{
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      },
    }).then((res) => res.json())
      .then((res) => {
        setProducts({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [idTienda])

  return Products
}