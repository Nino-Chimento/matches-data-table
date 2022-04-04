import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { FormMatch } from "../../../components/form";
import { TableMatches } from "../../../components/table";
import { UseMatches } from "../../../hooks/useMatches";
import {
  matchAdd,
  matchDelete,
  matchesFetch,
} from "../../../redux/matchs.reducer";
import { MatchType } from "../../../Types/MatchTypes";
import { convertDate } from "../../../utils/FormatDate/convertDate";
import { cancelForm } from "../../../utils/utils";

export const DataMatchesView: FC = () => {
  const { matches } = UseMatches();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(matchesFetch());
  }, []);

  const handleDelete = (id: number) => {
    dispatch(matchDelete(id));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 10000);
    const date = convertDate(e.target["date"].value);
    const time = e.target["time"].value;
    const result = e.target["result"].value;
    const teams =
      `${e.target["team-away"].value} / ${e.target["team-home"].value}`.toUpperCase();
    const match: MatchType = { id, date, time, result, teams };
    dispatch(matchAdd(match));
    cancelForm();
  };
  return (
    <>
      <h1 className="text-center">Data Table Matches</h1>
      <div className="mb-5">
        <FormMatch handleSubmit={handleSubmit} />
      </div>
      <TableMatches matches={matches} handleDelete={handleDelete} />
    </>
  );
};

export default DataMatchesView;
