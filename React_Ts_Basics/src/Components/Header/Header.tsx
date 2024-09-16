import { ReactNode, useState } from "react";
import { Button, Input } from "../index";
import { Goals } from "../../App";

interface HeaderProps {
  image: { src: string; alt: string };
  children: ReactNode;
  goals: Goals[];
  setGoals: (goals: Goals[]) => void;
}

const Header = ({ image, children, goals, setGoals }: HeaderProps) => {
  const [input, setInput] = useState<string>("");
  const [summary, setSummary] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput("");
    setSummary("");
    const updatedGoals = [
      ...goals,
      {
        id: Math.random(),
        title: input,
        description: summary,
      },
    ];

    setGoals(updatedGoals);
  };

  return (
    <header>
      <img src={image.src} alt={image.alt} />
      <>{children}</>
      <form onSubmit={handleFormSubmit}>
        <p>
          <Input
            id="goal"
            label="Your Goal"
            type="text"
            placeholder="Set your goal"
            value={input}
            setInput={setInput as (input: string | number) => void}
          />
        </p>

        <p>
          <Input
            id="summary"
            label="Short Summary"
            type="text"
            placeholder="Add Summary"
            value={summary}
            setInput={setSummary as (summary: string | number) => void}
          />
        </p>
        <Button>Add Goal</Button>
      </form>
    </header>
  );
};

export default Header;
