import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useIdTienda(email) {
  const [Tienda, setIdTienda] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/api/tienda/${email}`,{
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        setIdTienda({ data: res, isLoading: false })
      })
  }
    getData()
  }, [email])

  return Tienda
}                                                                