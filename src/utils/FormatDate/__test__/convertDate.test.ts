/** @format */

import { convertDate } from "../convertDate";

describe("formatDate", () => {
  it("Should return an date formata from input", () => {
    const date: string = "2020-01-01";
    const dateFormatted = convertDate(date);
    const expectedDate: string = "01/01/20";
    expect(dateFormatted).toEqual(expectedDate);
  });
});
