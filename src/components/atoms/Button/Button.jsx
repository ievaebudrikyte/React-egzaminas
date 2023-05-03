const Button = ({ image, action, text, color, fontColor }) => {
  return (
    <button
      style={{ backgroundColor: color, color: fontColor }}
      onClick={action}
    >
      <img src={image} alt="" />
      {text}
    </button>
  );
};

export default Button;
