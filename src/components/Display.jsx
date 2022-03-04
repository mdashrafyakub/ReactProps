function Display(props) {
  return (
    <div>
      {props.cbr.name} ({props.cbr.position}) | Years pro: {props.cbr.yearsPro}
    </div>
  );
}
export default Display;
