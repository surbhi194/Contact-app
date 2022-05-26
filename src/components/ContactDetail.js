import React from 'react';
import {Link,useLocation} from 'react-router-dom';
import user from '../images/user.png'; 

const ContactDetail=(props)=>{
    console.log(props);
    // const {name,email}=props.state;
return(
                <div className='main'>
                    <div className='ui card centtered'>
                        <div className='image'>
                            <img src={user} alt="user"/>
                        </div>
                        <div className='content'>
                            <div className='header'>surbhi</div>
                            <div className='description'>abc@gmail.com</div>
                        </div>
                    </div>
                    <Link to="/"><button className='ui button blue center'>Back to contact list</button></Link>
                </div>
);
}

export default ContactDetail;