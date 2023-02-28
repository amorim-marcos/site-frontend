import React, { useState, useEffect } from 'react'

function useLinkedin() {
  const [linkedinLink, setLinkedinLink] = useState('')

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/connect`)
      .then((response) => response.json())
      .then((data) => setLinkedinLink(data.linkedin_link))
      .catch((error) => console.error(error))
  }, [])

  return { linkedinLink }
}

export default useLinkedin
