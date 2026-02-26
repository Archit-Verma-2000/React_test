import React from 'react'

function Usercard(props) {

  return (
    <div className='card'>
        <div class="img">
            <img src={props.imgurl}/>
        </div>
       <div class="user_info">
            <h1>{props.user} <span>{props.age}</span></h1>
            
            <div className='"userdetail'>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe doloremque illo quam, sapiente quia molestiae consectetur. Ipsum tenetur laborum incidunt.
            </div>
        </div> 

    </div>
  )

}

export default Usercard


