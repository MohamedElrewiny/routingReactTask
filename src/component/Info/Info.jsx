import React from 'react'

export default function Info() {
  return (
    <>
    <div className="info">
      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <span>Clark, MO 65243</span>
          </div>
          <div className="col-md-4 my-3">
            <h2>AROUND THE WEB</h2>
            <div className="icons">
              <i className='fa-brands fa-facebook'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin'></i>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className="col-md-4 my-3">
              <h2>AROUND THE WEB</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
