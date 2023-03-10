import HashLoader from "react-spinners/HashLoader";
import { useGlobalState } from "./../../context/GlobalContext";

const Loader = () => {
  const { width } = useGlobalState();
  return (
    <div className="loader">
      <HashLoader size={width > 600 ? 55 : 45} />
    </div>
  );
};

export default Loader;
