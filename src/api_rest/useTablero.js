import  { useState, useEffect } from 'react';
const { API_URL } = process.env;

export function useTablero(email) {
  const [Tablero, setTablero] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/api/tablero/${email}`,{
      method: 'GET'
    })
      .then((res) => res.json())
      .then((res) => {
        setTablero({ data: res, isLoading: false })
      })
  }
    getData()
  }, [email])

  return Tablero
}                                                                