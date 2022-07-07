import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useTienda(store) {
  const [Products, setProducts] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/store?&tienda=${store}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [store])

  return Products
}