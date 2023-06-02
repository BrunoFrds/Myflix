const Button = ({ name, title, icon }) => {
  return (
    <div>
      <button className={name}>
        <span className={name + "Icon"}>{icon}</span>
        <span className={name + "Title"}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
