import React from 'react'
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="px-4 py-5 my-5 text-center">
    <img className="d-block mx-auto mb-4" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg" alt=""  />
    <h1 className="display-5 fw-bold">Welcome, all</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3" onClick={()=> navigate('/login')}>Login</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={()=> navigate('/register')}>Register</button>
      </div>
    </div>
  </div>
  )
}

export default Home