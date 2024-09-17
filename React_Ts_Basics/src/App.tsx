import { useState } from "react";
import { CourseGoal, Header } from "./Components/index";
import goalsImg from "../public/goals.jpg";

export interface Goals {
  id: number;
  title: string;
  description: string;
}

function App() {
  const [goals, setGoals] = useState<Goals[]>([]);
  return (
    <main>
      <Header
        image={{ src: goalsImg, alt: "A List Of Goals" }}
        goals={goals}
        setGoals={setGoals}
      >
        <h1>Set Yours Goals !</h1>
      </Header>

      <CourseGoal goals={goals} setGoals={setGoals} />
    </main>
  );
}

export default App;
