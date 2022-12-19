import { useEffect } from "react";
import { useGlobalState } from "./../context/GlobalContext";

export const useLoader = () => {
  const { setLoading } = useGlobalState();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
};
