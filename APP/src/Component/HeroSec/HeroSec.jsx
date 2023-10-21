// import React from 'react'
import "./HeroSec.css"
import { PORT } from "../../App"


const HeroSec = ({ data }) => {

  console.log(data)

  // console.log(search)

  // console.log(data)
  return (
    <div className="herosec">
      <div className="opacityy">
        {/* <h1>ipopass</h1> */}
        <div className="cards">

          {/* <div className="card">
            <div className="card_img">

              img
            </div>
            <div className="card_body">
              <div className="card_title">Title</div>
              <div className="card_para"> pakis jkpaska  adhnud parag raphhhh</div>
              <div className="card_btn">
                <button>
                  BTN
                </button>
              </div>
            </div>
          </div> */}
          {/* {
  data?.map( (v,i)=>{
  console.log(v.name)
  } )
} */}

          {data?.map((val, ind) => {
            //  {   console.log( PORT+val.image , ind) }
            return (<div className="card" key={ind}>
              <div className="card_img">
                <img src={PORT+val.image}  />


              </div>
              <div className="card_body">
                <div className="card_title">
                  {val.name}
                </div>
                <div className="card_para">
                  {val.text}

                </div>
                <div className="card_btn">
                  <button>
                  {`${val.price}.00`}

                  </button>
                </div>
              </div>
            </div>)
          }
          )
          }



        </div>

      </div >
    </div >
  )
}

export default HeroSec