import {Bookmark} from 'lucide-react'

const Cards = (props) => {
  return (
    <div className="card">
        <div className="top">
            <img src= {props.logo} ></img>
            <button> Save <Bookmark size={20}/></button>
        </div>

        <div className="center">
            <h2>{props.name} <span>{props.date}</span></h2>
            <h1>{props.post}</h1>
            <div className='mid'>
                <h3>{props.t1}</h3>
                <h3>{props.t2}</h3>
            </div>
        </div>

        <div className="bottom">
            <div>
                <h4 id='rate'>{props.pay}</h4>
                <h4 id='city'>{props.location}</h4>
            </div>
            <button>Apply now</button>
        </div>
    </div>
  )
}

export default Cards
