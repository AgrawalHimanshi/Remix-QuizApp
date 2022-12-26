import { Link } from "@remix-run/react";
import QuestionBank from "~/components/questions";
import quizStyle from "~/styles/quiz.css";
export default function QuizApp() {
    return (
      <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <Link to='/'>Home</Link>
        <h1>Hello Folks!!</h1>
        <QuestionBank/>  
      </div>
    );
  }

  export function links() {
    return [{rel:'stylesheet', href:quizStyle}]
  }