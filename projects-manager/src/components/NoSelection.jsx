import noProjectImg from "../assets/no-projects.png";
import Button from "./Button";

export default function NoSelection({ onStartAddProject }) {
  return (
    <div className="mt-16 text-center w-2/3">
      <img
        src={noProjectImg}
        alt="Empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No projects selected
      </h2>
      <p className="text-stone-400 mb-4">Select a project or start a new one</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
}
