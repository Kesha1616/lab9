import './footer.css';
import { Component } from 'react';
class Footer extends Component{
    render(){
    return (
        <footer className='Footer'>
            <div className='back'></div>
            <div className='support'>СЛУЖБА ПОДДЕРЖКИ</div>
            <div className='number'>+ 7 (747) 960 63 53</div>
            <img src='./Insta.png' className='insta'></img>
            <img src='./vk.png' className='vk'></img>
            <img src='./Whats.png' className='whats'></img>
            <div className='email'>erkebulanalhodj@gmail.com</div>
    </footer>
  );
}}

export default Footer;