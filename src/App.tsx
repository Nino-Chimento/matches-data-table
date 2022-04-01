import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Counter } from "./components/counter";

import { FormMatch } from "./components/form";
import { TableMatches } from "./components/table";
import { UseMatches } from "./hooks/useMatches";

import { matchAdd, matchDelete, matchesFetch } from "./redux/matchs.reducer";
import { selectorMatches, selectorMatchesLoading } from "./redux/selector";
import { MatchType } from "./Types/MatchTypes";

import { convertDate } from "./utils/FormatDate/convertDate";
import { cancelForm } from "./utils/utils";

function App() {
  const { matches, loading } = UseMatches();
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
    <div className="App">
      {loading && <div>Spinner</div>}
      {!loading && (
        <>
          <Counter />
          <h1 className="text-center">Data Table Matches</h1>
          <div className="mb-5">
            <FormMatch handleSubmit={handleSubmit} />
          </div>
          <TableMatches matches={matches} handleDelete={handleDelete} />
        </>
      )}
    </div>
  );
}

export default App;
