import React from 'react'

const Dog = ({ dog: { url } }) => {
  return (
    <>
      {url.includes('mp4')
        ? <iframe
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
        : <img width='500' src={url} /> }

      {/* <iframe
        width="560"
        height="315"
        src={url}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe> */}
      {/* <img width='500' src={url} /> */}
    </>
  )
}

export default Dog
