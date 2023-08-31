import { FC, useState, ChangeEventHandler, FormEventHandler } from "react";
import Button from "./Button";

interface Props {}

const Form: FC<Props> = (): JSX.Element => {
  const [value, setValue] = useState("");

  const handleOnchange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex-col">
      <input type="text" value={value} onChange={handleOnchange} />
      <Button value="submit" />
    </form>
  );
};

export default Form;
