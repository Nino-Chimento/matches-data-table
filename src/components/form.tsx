import { FC, FormEvent } from "react";

interface FormMatcProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const FormMatch: FC<FormMatcProps> = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Date
        </label>
        <input
          type="date"
          className="form-control"
          id="date"
          required
          name="date"
          min="2021-01-01"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Time
        </label>
        <input
          type="time"
          className="form-control"
          id="time"
          required
          name="time"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Team Away
        </label>
        <input
          type="text"
          className="form-control"
          id="team-away"
          required
          name="team-away"
          maxLength={3}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Team Home
        </label>
        <input
          type="text"
          className="form-control"
          id="team-home"
          required
          name="team-home"
          maxLength={3}
        />
      </div>
      <select
        className="form-select form-select-sm"
        required
        name="result"
        id="result"
      >
        <option selected>Open this select menu</option>
        <option value="away">Away</option>
        <option value="home">Home</option>
      </select>
      <button className="btn btn-success mt-2">Send</button>
    </form>
  );
};
