import { FC, useMemo } from "react";
import {
  InputLabel,
  TextField,
  TextFieldProps,
  InputLabelProps,
  Box,
  IconButton,
} from "@mui/material";
import { _generateHtmlId } from "@/utils/common.utils";
import CloseIcon from "@mui/icons-material/Close";

interface ITextInputProps {
  label?: string;
  inputProps?: TextFieldProps;
  labelProps?: InputLabelProps;
  required?: boolean;
  showRemove?: boolean;
  onRemove?: () => void;
}

const TextInput: FC<ITextInputProps> = ({
  label,
  inputProps,
  labelProps,
  required,
  showRemove,
  onRemove,
}) => {
  const id = useMemo(() => _generateHtmlId("textfield"), []);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
        {showRemove && (
          <Box sx={{ ml: 1 }}>
            <IconButton
              onClick={() => {
                if (onRemove) {
                  onRemove();
                }
              }}
            >
              <CloseIcon sx={{ width: "20px", height: "20px" }} />
            </IconButton>
          </Box>
        )}
      </Box>

      <TextField id={id} {...inputProps} />
    </>
  );
};

export default TextInput;
