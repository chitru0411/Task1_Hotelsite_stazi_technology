import React from 'react';
import Card from './Card';
import LondonData from './LondonData';
import { useState } from 'react';

function ncard(val){


  return (
    <>
    <Card unique={val.id} img={val.imgsrc} Sadd={val.smalladd} Ladd={val.largeadd} Room={val.room} Bed={val.bed} Bath={val.bal} Area={val.area} Price={val.price}/>
    </>
  );
};

const London = () => {

  const [noOfElement,setnoOfElement] =useState(3);

const loadMore = () =>{
  setnoOfElement(noOfElement + 3);
};


const slice = LondonData.slice(0,noOfElement);
  return (
    <>
        <div className='main_div'>
                <h1> Featured Listed Property</h1>
                   <h2>real estate can be bought,sold,leased,0r rented,and can be a valuable<br/>
                       investment oppourtinity.the value of real estate can be</h2>
               <nav className='nav_bar'>
                 <ul>
                 <li role='presentation' > <a href='/' aria-controls='newyork' role='tab' data-toggle="tab">NewYork</a></li>
                     <li role='presentation'><a href='/mumbai' target='_blank'  aria-controls='mumbai' role='tab' data-toggle="tab">Mumbai</a></li>
                     <li role='presentation'><a href='/Paris' target='_blank'  aria-controls='paris' role='tab' data-toggle="tab">Paris</a></li>
                    <li role='presentation' className='active'><a href='/london' target='_blank'  aria-controls='london' role='tab' data-toggle="tab">London</a></li>
                 </ul>
              </nav>
            <div className='card_space'>
              {slice.map(ncard)}
            </div>
            <button className='show_more' onClick={ () =>loadMore()}>Show More</button> 
      </div>
    </>
    
  );
};

export default London;