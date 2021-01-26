import React from 'react';

function Cart (props) {

    const abc = props.location.state.item;

    return(
        <div>
        <div className="my-5">
        <h1 className="text-center">Cart-Items</h1>
        </div>
         <div className="container-fluid">
         <div className='row'>
         <div className="col-10 mx-auto">
         <div className="row">
             


         <div className="col-md-4 col-10 mx-auto">
         <div class="card abc">
        <img src={abc.img} class="card-img-top" alt="..."/>
        <div class="card-body">
       <h5 class="card-title">{abc.name}</h5>
       <h5 class="card-title">{abc.price}</h5>
       <p class="card-text">{abc.Description}</p>
      </div>
      </div>
      </div>

        </div>
        </div>
        </div>
        </div>
        <div className="text-center">
        <div class="container">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
    Buy
  </button>

 
  <div class="modal fade" id="myModal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
      
       
        <div class="modal-header">
          <h4 class="modal-title">Check Item</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <div class="modal-body">
        <h5 class="card-title">Course Name : {abc.name}</h5>
       <h5 class="card-title">Price : {abc.price}</h5>
       </div>

        <div class="modal-body">
          Order Successfully..Thanks..
        </div>
        
      
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
        
      </div>
    </div>
  </div>
  
</div>
</div>
        </div>
    )
}

export default Cart;

