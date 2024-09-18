import { ReactNode } from "react";
import { Card, InfoBox } from "./index";
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

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint" className="infobox">
        You have no goals yet. Start Adding some!
      </InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" className="infobox-warning">
        You have too many courses in basket.
      </InfoBox>
    );
  }

  return (
    <article className="box">
      {warningBox}
      <ul>
        {goals &&
          goals.map((goal) => {
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
