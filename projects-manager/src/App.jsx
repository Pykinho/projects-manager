import { useState } from "react";
import NewProject from "./components/NewProject";
import NoSelection from "./components/NoSelection";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return { selectedProjectId: null, projects: prevState.projects };
    });
  }

  function cancelAddProject() {
    setProjectState((prevState) => {
      return { selectedProjectId: undefined, projects: prevState.projects };
    });
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={cancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoSelection onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
