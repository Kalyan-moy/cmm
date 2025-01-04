import { FC, useMemo } from "react";
import {
  InputLabel,
  InputLabelProps,
  Select as MuiSelect,
  MenuItem,
  SelectProps,
  FormHelperText,
  useTheme,
} from "@mui/material";
import { _generateHtmlId } from "@/utils/common.utils";

interface ISelectProps {
  options: { label: string; value: string | number }[];
  label?: string;
  inputProps?: SelectProps & { helperText?: string };
  labelProps?: InputLabelProps;
  required?: boolean;
}

const Select: FC<ISelectProps> = ({
  options,
  label,
  inputProps,
  labelProps,
  required,
}) => {
  const { palette } = useTheme();
  const id = useMemo(() => _generateHtmlId("textfield"), []);
  const { helperText, ...selectProps } = inputProps || {};

  return (
    <>
      {label && (
        <InputLabel
          id={id}
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
      <MuiSelect labelId={id} size="small" {...selectProps} displayEmpty>
        {/* {inputProps?.placeholder && (
          <MenuItem disabled selected sx={{ fontSize: ".9rem" }}>
            {inputProps?.placeholder}
          </MenuItem>
        )} */}
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            sx={{ fontSize: ".9rem" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {helperText && (
        <FormHelperText sx={{ color: palette.error.main, ml: 2 }}>
          {helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default Select;
