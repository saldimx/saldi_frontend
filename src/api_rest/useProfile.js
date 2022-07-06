import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useProfile() {
  const [Profile, setProfile] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/getUser?e=vega.obed@gmail.com`)
      .then((res) => res.json())
      .then((res) => {
        setProfile({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [])

  return Profile
}