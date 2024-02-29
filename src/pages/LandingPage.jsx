import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = ()=>{
    // navigate to home page
    navigate('/home')
  }
  return (
<>
      <div className='container'>
        <div className="header row align-items-center m-5">
          <div className="col-lg-5">
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <img style={{width:'100%'}} src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="Landing Image" />
          </div>
        </div>
        <div className="features">
          <h3 className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
               <Card style={{height:'450px',width:'22rem'}}>
      <Card.Img height={'300px'} variant="top" src="https://media.freewebstock.com/man-with-headphones-listens-to-music.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
      <Card.Img height={'300px'} variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'450px',width:'22rem'}}>
      <Card.Img height={'300px'} variant="top" src="https://i.pinimg.com/originals/8c/9d/12/8c9d126d5406fa1fdfd13bc4427339ed.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
            </div>

          </div>
        </div>
        <div className=" row video border p-5 mt-5 rounded align-items-center">
          <div className="col-lg-5">
            <h3 className="text-warning">Simple Fast and Powerful</h3>
            <p style={{textAlign:'justify'}}> <span className="fs-4">Play Everything:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <p style={{textAlign:'justify'}}> <span className="fs-4">Categorize Videos:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p style={{textAlign:'justify'}}> <span className="fs-4">Watch History:</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <iframe width="688" height="350" src="https://www.youtube.com/embed/q6e_b0NERCA" title="Leo - Ordinary Person Video | Thalapathy Vijay | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
  <hr/>
</>  
)
}

export default LandingPage