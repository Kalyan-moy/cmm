import { FC, useMemo } from "react";
import {
  InputLabel,
  TextField,
  TextFieldProps,
  InputLabelProps,
} from "@mui/material";
import { _generateHtmlId } from "@/utils/common.utils";

interface ITextInputProps {
  label?: string;
  inputProps?: TextFieldProps;
  labelProps?: InputLabelProps;
  required?: boolean;
}

const TextInput: FC<ITextInputProps> = ({
  label,
  inputProps,
  labelProps,
  required,
}) => {
  const id = useMemo(() => _generateHtmlId("textfield"), []);
  return (
    <>
      {label && (
        <InputLabel
          htmlFor={id}
          {...labelProps}
          sx={{
            fontSize: "0.9rem",
            mb: 0.5,
            color: "WindowText",
          }}
        >
          {label}
          {required ? <span style={{ color: "red" }}> *</span> : ""}
        </InputLabel>
      )}
      <TextField id={id} {...inputProps} />
    </>
  );
};

export default TextInput;
