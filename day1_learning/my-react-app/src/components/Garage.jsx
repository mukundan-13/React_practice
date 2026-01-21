import Car from "./Car";
import Apple from "./Apple";
function Garage() {

  const isDoorOpened=false;
  const carInfo={}
  //const carInfo={brand:"Ferrari",color:"Black"}
  const appleInfo={type:"Fuji",color:"Red"}
  const showCarInfo= carInfo.brand!==undefined && carInfo.color!==undefined
  return (
    <>
      <h1>Who lives in my garage?</h1>
      {/* using ternary and using && operator */}
      {/* { showCarInfo?<Car carInfo={carInfo} /> : null} */}
      { showCarInfo && <Car carInfo={carInfo} />}
      <Apple appleInfo={appleInfo}/>
      {isDoorOpened ?<h2>Garage door is opened</h2>:<h2>Garage door is closed</h2>}
    </>
  );
}

export default Garage;