import React from 'react';
import abc from '../src/images/abc.jpg'
import xyz from '../src/images/xyz.png'
import qwe from '../src/images/qwe.jpg'
import a from '../src/images/a.png'
import b from '../src/images/b.jpg'
import c from '../src/images/c.png'
import { Link } from 'react-router-dom';

const Service = () => {
  const items = [
    {
        id:1,
        img: qwe,
        name :"Digital Marketing",
        price : "$40",
        Description : "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
        id:2,
        img: xyz,
        name :"Machine-Learning",
        price : "$100",
        Description : "Some quick example text to build on the card title and make up the bulk of the card's content",
    },
    {
      id:3,
      img: abc,
      name :"Web-Development",
      price : "$60",
      Description : "Some quick example text to build on the card title and make up the bulk of the card's content"
  },
  {
    id:4,
    img: a,
    name :"Data-Science",
    price : "$120",
    Description : "Some quick example text to build on the card title and make up the bulk of the card's content"
},
{
  id:5,
  img: b,
  name :"Bootstrap-5",
  price : "$20",
  Description : "Some quick example text to build on the card title and make up the bulk of the card's content"
},
{
  id:6,
  img: c,
  name :"React-js",
  price : "$90",
  Description : "Some quick example text to build on the card title and make up the bulk of the card's content"
}
 ]

   const cardList = items.map((item)=>{
   return (
    <div key={item.id} className="col-md-4 col-10 mx-auto">
    <div class="card">
    <img src={item.img} class="card-img-top" alt="..."/>
    <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <h5 class="card-title">{item.price}</h5>
    <p class="card-text">{item.Description}</p>
    <Link class="btn btn-outline-primary" to={{pathname: '/coursedetail',state: {item:item}}}>Click to Explore</Link>
    </div>
    </div>
   </div>
   )
 })
    return (
        <div>
            <div>
        <div className="my-5">
        <h1 className="text-center">Our Services</h1>
        </div>
         <div className="container-fluid">
         <div className='row'>
         <div className="col-10 mx-auto">
         <div className="row">
         {cardList}
         </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Service;



