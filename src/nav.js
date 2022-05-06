import './nav.css';

const Nav = (props) =>{
    const {number1="1", number2="2", number3="3", number4="4"} = props;
    return (
        <div className='Nav'>
            <img src='./almatybike.jpg' className='photo'></img>
            <div className='textfirst'>СИСТЕМА АВТОМАТИЗИРОВАННОГО </div>
            <div className='textsecond'>ВЕЛОПРОКАТА В ГОРОДЕ АЛМАТЫ</div>
            <div className='text1'>Цель проекта - создать альтернативу автомобилю и</div>
            <div className='text2'>общественному транспорту, предоставить жителям</div>
            <div className='text3'>города и туристам доступный транспорт</div>
            <div className='text4'>для передвижения.</div>
            <div className='system'>
                <div>
                    <h3 className='text11'> {'>'}Как ползоваться системой?</h3>
                    <p className='text111'>Зарегистрируйтесь и оплатите доступ</p>
                    <p className='text112'>Возьмите велосипед на станции</p>
                    <p className='text113'>Используйте велосипед</p>
                    <p className='text114'>Верните велосипед на станцию</p>
                    <p className='text115'>{number1}</p>
                    <p className='text116'>{number2}</p>
                    <p className='text117'>{number3}</p>
                    <p className='text118'>{number4}</p>
                </div>
                <div className='icon11'>
                    <img src='./iconbike.png' className='iconbike' width={70}></img>
                    <img src='./icon1.png' className='icon1'></img>
                </div>
            </div>
            <div className='velo'>
                <div>
                    <h3 className='text12'> {'>'}Как взять велосипед?</h3>
                    <p className='text121'>Нажмите кнопку "ОК"</p>
                    <p className='text122'>Выберите на экране: 1) Карта 2) ID</p>
                    <p className='text123'>Приложите карту/введит ID и PIN</p>
                    <p className='text124'>Потяните велосипед на себя</p>
                    <p className='text125'>{number1}</p>
                    <p className='text126'>{number2}</p>
                    <p className='text127'>{number3}</p>
                    <p className='text128'>{number4}</p>
                </div>
                <div className='icon12'>
                    <img src='./iconmobile.png' className='iconmobile' width={70}></img>
                    <img src='./icon2.png' className='icon2'></img>
                </div>
            </div>
            <div className='parking'>
                <div>
                    <h3 className='text13'> {'>'}Как припарковать велосипед?</h3>
                    <p className='text131'>Устоновите велосипед в слот</p>
                    <p className='text132'>Дождитесь надписи "Возврат ОК"</p>
                    <p className='text133'>Дождитесь увидомления (SMS или Push)</p>
                    <p className='text135'>{number1}</p>
                    <p className='text136'>{number2}</p>
                    <p className='text137'>{number3}</p>
                </div>
                <div className='icon13'>
                    <img src='./iconparking.png' className='iconparking' width={180}></img>
                    <img src='./icon3.png' className='icon3'></img>
                </div>
            </div>
            </div>

  );
}

export  default Nav;