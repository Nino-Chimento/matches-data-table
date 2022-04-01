import { useSelector } from "react-redux";
import { selectorMatches, selectorMatchesLoading } from "../redux/selector";

export const UseMatches = () => {
  const matches = useSelector(selectorMatches);
  const loading = useSelector(selectorMatchesLoading);

  return { matches, loading };
};
