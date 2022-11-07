import React from 'react'

const Card = (props) => {
  return (
    <div className="card text-white bg-dark card-content" style={{width: "25rem", margin: "0rem 1.5rem"}}>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.content}</p>
        <p className='d-flex justify-content-center'>Built with ❤️ using</p>
        <div className='d-flex justify-content-center'>
        {props.icon.map((element)=>{return(
          <i class={element + " icon"}></i>
        )})}       
        </div>
        <a href={props.linkGithub} className="btn btn-light d-flex justify-content-center mt-2">GitHub</a>
      </div>
    </div>
  )
}

export default Card