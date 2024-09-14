import { ReactNode } from "react";
import { Button } from "../index";

// Define the Goals interface here as well
interface Goals {
  id: number;
  title: string;
  description: string;
}

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
  goals: Goals[]; // Correctly typing goals as an array of Goals
  setGoals: (goals: Goals[]) => void; // Function type for setGoals
}

const Header = ({ image, children, goals, setGoals }: HeaderProps) => {
  const handleAdd = () => {
    const updatedGoals = [
      ...goals,
      {
        id: Math.random(),
        title: "Learn Node Js",
        description: "Namste Node Js Series Lets do it",
      },
    ];

    return setGoals(updatedGoals);
  };

  return (
    <header>
      <img src={image.src} alt={image.alt} />
      {children}
      <Button onClick={handleAdd}>Add Goal</Button>
    </header>
  );
};

export default Header;
