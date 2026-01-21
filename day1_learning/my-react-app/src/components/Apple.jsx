function Apple(props) {
  const { appleInfo } = props;
  const text = `I am a ${appleInfo.color} ${appleInfo.type} Apple`;

  return <h3>{text}</h3>;
}

export default Apple;
