import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useProducts() {
  const [Products, setProducts] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/productos?&tienda=0001`)
      .then((res) => res.json())
      .then((res) => {
        setProducts({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [])

  return Products
}