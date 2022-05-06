import './header.css';
import {Routes,Route,NavLink} from 'react-route-dom';
const Header = () =>{
    return (
        <div className='Header'>
            
            <NavLink className='textmain' to='/nav' >Главная</NavLink>
            <NavLink className="header-item" to='/Faq'>FAQ</NavLink>
            <div className='textmain'>Велостанции</div>
            <div className='textmain'>Тарифы</div>
            <img src='./logo.png'></img>
            <div className='textmain'>Контакты</div>
            <div className='textmain'>Вход</div>
            </div>

  );
}

export default Header;