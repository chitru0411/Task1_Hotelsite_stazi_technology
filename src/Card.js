import React from 'react';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import OpenWithRoundedIcon from '@mui/icons-material/OpenWithRounded';

const Card = (props) => {
  
  return (
    <>
            <div className='card_details'>
                           <img src={props.img} alt='no_img' className='card_img'/>
                           <button className='rent_box'>for Rent</button>
                           <button className='heart'><span> <FavoriteBorderRoundedIcon/></span></button>
                        <div className='Card_info'>
                                    <h4><LocationOnOutlinedIcon/>{props.Sadd}</h4>
                                    <p>{props.Ladd}</p>
                              <ul className='small_icons'>
                                         <div>
                                             <li><MapsHomeWorkOutlinedIcon/></li>
                                              <h5>{props.Room}</h5>
                                          </div>
                            
                                         <div>
                                           <li><BedOutlinedIcon/></li>
                                            <h5>{props.Bed}</h5>
                                         </div>

                                          <div>
                                                  <li><BathtubOutlinedIcon/></li>
                                                  <h5>{props.Bath}</h5>
                                         </div>

                                          <div>
                                                 <li><OpenWithRoundedIcon/></li>
                                                 <h5>{props.Area}</h5>
                                          </div>
                                </ul>
                                   <div className='footer'>
                                       <h3>Price={props.Price}</h3>
                                          <button className='read_button'>Read More</button>
                                  </div>
                         </div>
                </div>
    </>
  );
};

export default Card;