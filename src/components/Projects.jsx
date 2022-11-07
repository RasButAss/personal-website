import React from 'react'
import Nav from './Nav'
import BackgroundOther from './BackgroundOther'
import Card from './Card'
import './body.css'
import Lsd from './images/LSDB.png'
import ToDo from './images/to-do-list.png'
import blog from './images/blog.png'


const Projects = () => {
  return (
    <>
      <Nav />
      <div className="row projects-row">
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <Card content="The To-Do-List website is used to create new tasks and destroy old completed tasks. It allows you to create new lists altogether which allows you to organise your tasks based on your workflow" title="To-Do-List" linkGithub="https://github.com/RasButAss/to-do-list" linkApp="" img={ToDo} icon={["devicon-nodejs-plain colored","devicon-html5-plain colored","devicon-css3-plain colored","devicon-javascript-plain colored","devicon-express-original","devicon-bootstrap-plain colored","devicon-mongodb-plain-wordmark colored"]} />
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <Card content="The Blog website helps in displaying and reading interesting blogs. There is a secret route which enables you to compose new blogs and post them on the website." title="Blog Website" linkGithub="https://github.com/RasButAss/blog-website" linkApp="" img={blog} icon={["devicon-nodejs-plain colored","devicon-html5-plain colored","devicon-css3-plain colored","devicon-javascript-plain colored","devicon-express-original","devicon-bootstrap-plain colored"]} />
        </div>
        <div className="col-lg-4 col-md-6 d-flex justify-content-center align-items-center">
          <Card content="LSDB is a movie database website which makes use of the TMDb API to browse through a vast array of movies and TV Shows. It allows you to browse through all the different categories of movies." title="LSDb" linkGithub="https://github.com/RasButAss/movie-db" linkApp="" img={Lsd} icon={["devicon-react-original colored","devicon-html5-plain colored","devicon-css3-plain colored","devicon-javascript-plain colored","devicon-bootstrap-plain colored"]} />
        </div>
      </div>
      <BackgroundOther />
    </>
  )
}

export default Projects