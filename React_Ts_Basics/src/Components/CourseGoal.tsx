import { Card } from "./index";

interface Goals {
  title: string;
  description: string;
  id: number;
}
interface CourseGoalProps {
  goals: Goals[];
}

const CourseGoal = ({ goals }: CourseGoalProps) => {
  return (
    <article>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <Card goal={goal} />
            </li>
          );
        })}
      </ul>
    </article>
  );
};

export default CourseGoal;
