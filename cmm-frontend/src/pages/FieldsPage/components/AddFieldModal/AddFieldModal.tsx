import { FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Box } from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import Select from "@/components/Select/Select";
import Button from "@/components/Button";
// import { useToast } from "@/providers/Toast.provider";
import { addFieldSchema, IAddFieldModel } from "./schema";
import { DataTypeEnum } from "@/types/global.types";

interface IAddFieldModalProps {
  open: boolean;
  onClose: () => void;
}

const AddFieldModal: FC<IAddFieldModalProps> = ({ open, onClose }) => {
  //   const Toast = useToast();
  const dataTypes = [
    { label: "String", value: DataTypeEnum.String },
    { label: "Number", value: DataTypeEnum.Number },
    { label: "File", value: DataTypeEnum.File },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IAddFieldModel>({
    resolver: zodResolver(addFieldSchema),
    mode: "onChange",
  });

  const handleSave = async (data: IAddFieldModel) => {
    console.log({ data });
  };

  return (
    <Modal
      title="Add Field"
      open={open}
      onClose={() => {
        reset();
        onClose();
      }}
      subtitle="Add new field here."
    >
      <Box sx={{ minWidth: "25rem" }}>
        <form onSubmit={handleSubmit(handleSave)}>
          <TextInput
            label="The title of this field"
            required
            inputProps={{
              placeholder: "Title",
              fullWidth: true,
              sx: { mb: 1.5 },
              error: !!errors.title,
              helperText: errors?.title?.message || "",
              ...register("title"),
            }}
          />
          <Controller
            control={control}
            name="data_type"
            render={({ field }) => (
              <Select
                label="Select a data type"
                options={dataTypes || []}
                required
                inputProps={{
                  // placeholder: "Select a department",
                  fullWidth: true,
                  sx: { mb: 1.5 },
                  multiple: false,
                  value: field.value || [],
                  error: !!errors.data_type,
                  helperText: errors?.data_type?.message || "",
                  onChange: (event) => field.onChange(event.target.value),
                }}
              />
            )}
          />
          <Button type="submit" fullWidth sx={{ mt: 4 }}>
            Add Field
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AddFieldModal;
