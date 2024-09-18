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

  let severity: string;

  if (goals.length >= 4 && goals.length < 6) {
    severity = "low";
  } else if (goals.length >= 6 && goals.length < 8) {
    severity = "mid";
  } else if (goals.length >= 8) {
    severity = "high";
  } else {
    severity = "low"; // Set a default if none of the above conditions match
  }

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" className="infobox-warning" severity={severity}>
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
