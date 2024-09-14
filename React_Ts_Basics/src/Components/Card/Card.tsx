// import Button from "../Button/Button";
import { Button } from "../../Components/index";

interface CardProps {
  goal: { title: string; description: string; id: number };
}

const Card = ({ goal }: CardProps) => {
  return (
    <div>
      <h2>{goal.title}</h2>
      <p>{goal.description}</p>
      <Button>❌</Button>
    </div>
  );
};

export default Card;
