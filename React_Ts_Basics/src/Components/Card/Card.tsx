// import Button from "../Button/Button";
import { Button } from "../../Components/index";

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button>❌</Button>
      </div>
    </article>
  );
};

export default Card;
