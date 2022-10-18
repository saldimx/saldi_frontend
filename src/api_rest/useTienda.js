import  { useState, useEffect } from 'react';
const { API_URL } = process.env;

export function useTienda(store) {
  const [Products, setProducts] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/api/store/${store}`)
      .then((res) => res.json())
      .then((res) => {
        setProducts({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [store])

  return Products
}