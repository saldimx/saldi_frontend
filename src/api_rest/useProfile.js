import  { useState, useEffect } from 'react';
const { API_URL } = process.env;

export function useProfile(email) {
  const [Profile, setProfile] = useState({
    data: {},
    isLoading: true,
  })
  useEffect(() => {
  const getData = () => {
    fetch(`${API_URL}/api/profile/${email}`,{
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