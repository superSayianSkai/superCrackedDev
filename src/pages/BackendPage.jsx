import { Backend } from "../Data.js/stack";
import FieldPage from "../components/FIeldPage";

const FrontendPage = () => {
  return <FieldPage stackData={Backend} />;
};

export default FrontendPage;
