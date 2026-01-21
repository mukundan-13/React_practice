import Car from "./Car";

function Garage() {
//   props added
  const carInfo={brand:"Ferrari",color : "red"}

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car carInfo={carInfo} />
    </>
  );
}

export default Garage;
