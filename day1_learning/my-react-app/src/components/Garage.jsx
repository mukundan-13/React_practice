import Car from "./Car";

function Garage() {
//   const brand = "Ferrari";
//   const color = "red"
  const carInfo={brand:"Ferrari",color : "red"}

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car carInfo={carInfo} />
    </>
  );
}

export default Garage;
