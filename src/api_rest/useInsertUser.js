import  { useState, useEffect } from 'react'

export function useInsertUser(name,email,pass) {
  const [user, setUser] = useState({
    data: {
      "n":name,
      "e":email,
      "p":pass
    },
    isLoading: true,
  })
  useEffect(() => {
    const insData = () => {
      fetch('http://localhost:5000/usuario')
        .then((res) => res.json())
        .then((res) => {
          setUser({ data: res, isLoading: false })
        })
    }

  
    insData()
  }, [])

  return user
}