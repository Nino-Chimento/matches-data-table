export const convertDate = (inputFormat: string) => {
  function pad(s: number) {
    return s < 10 ? "0" + s : s;
  }
  var d = new Date(inputFormat);
  return [
    pad(d.getDate()),
    pad(d.getMonth() + 1),
    d.getFullYear().toString().substr(-2),
  ].join("/");
};
