import React from 'react'

const Dog = ({ dog: { url } }) => {
  return (
    <>
      <img src={url} />
    </>
  )
}

export default Dog
