import './main.css';

const Main = () =>{
    return (
        <div className='Main'>
            <img src='./bike.jpg' className='bike' width={1900}></img>
            <div className='text'>ТАРИФЫ</div>
            <img src='./tarif.png' className='tarif'></img>
            <div className='regtangle'></div>
            <div className='abon1'>За год</div>
            <div className='abon2'>За 3 месяца</div>
            <div className='abon3'>При предъявлении подтверждающих документов:</div>
            <div className='abon4'>студенты (студенческий билет и справка с учебного заведения)</div>
            <div className='abon5'>пенсионеры (пенсионное удостоверение)</div>
            <div className='abon6'>люди с инвалидностью 3 группы (пенсионное удостоверение либо справка об инвалидности)</div>
            <div className='abon7'>Минимальный баланс на счету Обязательный неснижаемый остаток</div>
            <div className='line1'>___________________________________________________</div>
            <div className='line2'>___________________________________________________</div>
            <div className='line3'>___________________________________________________</div>
            <div className='line4'>___________________________________________________</div>
            <div className='price'>10 000 ₸/кругло-годичный прокат</div>
            <div className='price1'>6 000 ₸</div>
            <div className='price2'>За год 5 000 ₸</div>
            <div className='price3'>За 3 месяца 3 000 ₸</div>
            <div className='price4'>500 ₸</div>
            </div>

  );
}

export default Main;