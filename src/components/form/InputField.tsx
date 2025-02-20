import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const BookInput = ({ type, name, label }: TInputProps) => {
  return (
    <div style={{ marginBottom: "30px" }}>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <Input type={type} id={name} {...field} className="form-input" />
        )}
      />
    </div>
  );
};

export default BookInput;
