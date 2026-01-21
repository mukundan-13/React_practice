function Car(props) {
  const { carInfo } = props;
  const text = `Hi I am  ${carInfo.color} ${carInfo.brand} Car`;

  return (
    <h2>{text}</h2>
  );
}

export default Car;
