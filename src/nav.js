import './nav.css';

const Nav = () =>{
    return (
        <div className='Nav'>
            <img src='./almatybike.jpg' className='photo'></img>
            <div className='textfirst'>СИСТЕМА АВТОМАТИЗИРОВАННОГО </div>
            <div className='textsecond'>ВЕЛОПРОКАТА В ГОРОДЕ АЛМАТЫ</div>
            <div className='text1'>Цель проекта - создать альтернативу автомобилю и</div>
            <div className='text2'>общественному транспорту, предоставить жителям</div>
            <div className='text3'>города и туристам доступный транспорт</div>
            <div className='text4'>для передвижения.</div>
            <img src='./stepcard1.png' className='photo1' width={700}></img>
            <img src='./stepcard2.png' className='photo2' width={650}></img>
            <img src='./stepcard3.png' className='photo3' width={560}></img>
            </div>

  );
}

export default Nav;