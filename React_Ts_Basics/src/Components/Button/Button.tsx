interface ButtonProps {
  //   onClick?: () => void;
  //   className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>;
};

export default Button;
