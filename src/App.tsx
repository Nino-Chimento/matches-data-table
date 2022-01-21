import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import { FormMatch } from "./components/form";
import { TableMatches } from "./components/table";
import { convertDate } from "./utils/FormatDate/convertDate";
import { parseResponse } from "./utils/parseResponse";
export interface MatchType {
  id: number;
  date: string;
  time: string;
  result: string;
  teams: string;
}
function App() {
  let [matches, setMatches] = useState<MatchType[]>([]);

  useEffect(() => {
    const url = "https://www.dontouch.ch/json/cc.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const arrayValue = Object.values(json.doc[0].data.matches);
        setMatches(parseResponse(arrayValue.slice(0, 20)));
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    const result = matches.filter((match: MatchType) => match.id !== id);
    setMatches(result);
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
    const newMatches = [...matches, match];

    setMatches(newMatches);
  };
  return (
    <div className="App">
      <h1 className="text-center">Data Table Matches</h1>
      <div className="mb-5">
        <FormMatch handleSubmit={handleSubmit} />
      </div>
      <TableMatches matches={matches} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
