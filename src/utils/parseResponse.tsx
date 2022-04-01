import { MatchType } from "../Types/MatchTypes";

export const parseResponse = (array: any): MatchType[] => {
  const result = array.map((data: any) => {
    return {
      id: data["_id"],
      date: data.time.date,
      time: data.time.time,
      result: data.result.winner ?? "",
      teams: `${data.teams.away.abbr} / ${data.teams.home.abbr}`,
    };
  });
  return result;
};
