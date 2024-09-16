// import Button from "../Button/Button";
import { Button } from "../../Components/index";

interface CardProps {
  goal: { title: string; description: string; id: number };
  handleDelete: (id: number) => void;
}

const Card = ({ goal, handleDelete }: CardProps) => {
  return (
    <div>
      <h2>{goal.title}</h2>
      <p>{goal.description}</p>
      <Button onClick={() => handleDelete(goal.id)}>Delete</Button>
    </div>
  );
};

export default Card;
