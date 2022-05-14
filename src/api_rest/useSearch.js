import  { useState, useEffect } from 'react'

export function useSearch(text) {
    //console.log(text)
    const API_URL = 'https://jsonmock.hackerrank.com/api/moviesdata';
    const [detailSearch, setDetailSearch] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}?Year=${text}`)
      .then((res) => res.json())
      .then((res) => {
        setDetailSearch({ data: res, isLoading: false })
      })
  }

    getData()
  }, [text])

  return detailSearch
}