import { MernStackProject } from "../Data.js/stack"; // Ensure the correct path to your data
import ProjectPage from "../components/ProjectPage"; // Ensure the correct path to your ProjectPage component

const MernStack = () => {
  return <ProjectPage stackData={MernStackProject} />;
};

export default MernStack;
