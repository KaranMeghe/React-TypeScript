import { Card } from "./index";

interface CourseGoalProps {
  title: string;
  description: string;
}

const CourseGoal = ({ title, description }: CourseGoalProps) => {
  return (
    <div>
      <Card title={title} description={description} />
    </div>
  );
};

export default CourseGoal;
