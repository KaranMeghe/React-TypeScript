interface ButtonProps {
  //   onClick?: () => void;
  //   className?: string;
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};

export default Button;
