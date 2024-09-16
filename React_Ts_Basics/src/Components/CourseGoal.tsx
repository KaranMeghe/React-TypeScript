import { Card } from "./index";
import { Goals } from "../App";

interface CourseGoalProps {
  goals: Goals[];
  setGoals: (goals: Goals[]) => void;
}

const CourseGoal = ({ goals, setGoals }: CourseGoalProps) => {
  const handleDelete = (id: number) => {
    setGoals(
      goals.filter((goal) => {
        console.log(goal.id, id);
        return goal.id !== id;
      })
    );
  };

  return (
    <article>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <Card goal={goal} handleDelete={handleDelete} />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default CourseGoal;
