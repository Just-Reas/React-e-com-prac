import styles from "./text-button.module.scss";

const Button = (props) => {
  const { className = "", type = "button", children, onClick, addTask } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
