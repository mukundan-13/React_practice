import Car from "./Car";
import Apple from "./Apple";
function Garage() {

  const isDoorOpened=false;
  //const carInfo={}
  const carInfo={brand:"Ferrari",color:"Black"}
  const appleInfo={type:"Fuji",color:"Red"}
  const showCarInfo= carInfo.brand!==undefined && carInfo.color!==undefined
  const carList=[
    {brand:"BMW",color:"Red"},
    {brand:"Ford",color:"Green"},
    {brand:"Tesla",color:"Black"},
  ];

  const numberList=[1,2,3,4,5,6,6,6];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* using ternary and using && operator */}
      {/* { showCarInfo?<Car carInfo={carInfo} /> : null} */}
      { showCarInfo && <Car carInfo={carInfo} />}
      <Apple appleInfo={appleInfo}/>
      {isDoorOpened ?<h2>Garage door is opened</h2>:<h2>Garage door is closed</h2>}
        <ul>
            {carList.map((carInfo)=><li key={carInfo.brand}><Car carInfo={carInfo}/></li>)} 
        </ul>
         <ul>
            {numberList.map((e,index)=><p key={index}>{e}</p>)} 
        </ul>
    </>
  );
}

export default Garage;