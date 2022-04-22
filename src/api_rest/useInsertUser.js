import  { useState, useEffect } from 'react'

export function useProducts() {
  const [Products, setProducts] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch('https://app-itj-bootcamp.herokuapp.com/getProducts')
      .then((res) => res.json())
      .then((res) => {
        setProducts({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [])

  return Products
}