import  { useState, useEffect } from 'react';
import { API_URL } from "../apis/endpoint";

export function useProfile(email) {
  const [Profile, setProfile] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/profile?e=${email}`,{
      method: 'POST'
    })
      .then((res) => res.json())
      .then((res) => {
        setProfile({ data: res, isLoading: false })
      })
  }

  
    getData()
  }, [email])

  return Profile
}                                                                