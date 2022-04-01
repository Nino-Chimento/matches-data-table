import { FC } from "react";
import { MatchType } from "../App";

interface TableMatchesProps {
  matches: MatchType[];
  handleDelete: (id: number) => void;
}

export const TableMatches: FC<TableMatchesProps> = ({
  matches,
  handleDelete,
}) => {
  console.log(matches, "table");

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">teams</th>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Result</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {matches &&
          matches.map((match: MatchType) => (
            <tr>
              <th>{match.id}</th>
              <th>{match.teams}</th>
              <th>{match.date}</th>
              <th>{match.time}</th>
              <th>{match.result}</th>
              <th onClick={() => handleDelete(match.id)}>
                <span className="btn btn-danger">delete</span>
              </th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
