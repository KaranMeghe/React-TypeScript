interface ButtonProps {
  onClick?: () => void;
  //   className?: string;
  children: React.ReactNode;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
