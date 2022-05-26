import React from 'react';
import { useLocation } from 'react-router-dom'
import {Link} from 'react-router-dom';
import user from '../images/user.png'; 

const ContactCard=(props)=>{
    const contact=props.contact;
        const {id,name,email}=contact;
        
        // console.log(contact);
    return(
                <div className='item'>
                <img className='ui avatar image' src={user} alt="user"/>
                <div className='content'>
                    <Link to={{pathname:`/contact/${id}`, state: {contact:contact}}}>
                    <div className='header'>{name}</div>
                    <div>{email}</div>
                    </Link>
                </div>
                <button className='trash alternate outline icon' style={{color:'red',mnarginTop:"7Px"}} onClick={()=>props.clickHandler(id)}>Remove</button>
            </div>
);
}

export default ContactCard;