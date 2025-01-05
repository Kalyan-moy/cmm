import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Card,
  Chip,
  IconButton,
  Typography,
  useTheme,
} from "@mui/material";
import { zodResolver } from "@hookform/resolvers/zod";

import Modal from "@/components/Modal";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import { createFormSchema, ICreateFormModel } from "./schema";
import { DataTypeEnum, IField } from "@/types/global.types";
import { useToast } from "@/providers/Toast.provider";
import { useQueryClient } from "react-query";
import { useGetFields } from "@/services/queries/fields.query";
import AddIcon from "@mui/icons-material/Add";
import {
  ICreateFormWithFields,
  useCreateForm,
} from "@/services/mutations/forms.mutation";
import { FETCH_FORMS } from "@/constants/queryKeys.constants";

interface ICreateFormModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateFormModal: FC<ICreateFormModalProps> = ({ open, onClose }) => {
  const Toast = useToast();
  const theme = useTheme();
  const { mutateAsync: createFormFn, isLoading: isCreateFormLoading } =
    useCreateForm();
  const { data } = useGetFields();
  const [addedFields, setAddedFields] = useState<IField[]>([]);

  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICreateFormModel>({
    resolver: zodResolver(createFormSchema),
    mode: "onChange",
  });

  const handleSave = async (data: ICreateFormWithFields) => {
    try {
      await createFormFn({
        data: { ...data, fieldIds: addedFields.map((field) => +field.id) },
      });
      Toast.success({
        title: "Form created",
        message: "Form has been created successfully.",
      });
      queryClient.invalidateQueries([FETCH_FORMS]);
      reset();
      onClose();
    } catch (error) {
      Toast.error({
        title: "Failed to create form",
        message: "Something went wrong, please try again later.",
      });
    }
  };

  const handleRemove = (index: number) => {
    addedFields.splice(index, 1);
    setAddedFields([...addedFields]);
  };

  return (
    <Modal
      title="Create Form"
      open={open}
      onClose={() => {
        reset();
        onClose();
        setAddedFields([]);
      }}
      subtitle="Create a new form here."
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box mr={5}>
          <Box>
            {data &&
              data.fields &&
              data.fields.length > 0 &&
              data.fields.map((item) => {
                return (
                  <Box
                    key={item.id}
                    display={"flex"}
                    alignItems={"center"}
                    minWidth={"25rem"}
                    mb={2}
                  >
                    <Card variant="outlined" sx={{ mr: 1 }}>
                      <Box
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        p={1}
                        minWidth={"20rem"}
                      >
                        <Box
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          sx={{ width: "100%" }}
                        >
                          <Typography fontSize={"1rem"} fontWeight={600}>
                            {item.title}
                          </Typography>

                          <Chip
                            label={
                              <Typography sx={{ fontSize: "0.8rem" }}>
                                {item.data_type}
                              </Typography>
                            }
                            size="small"
                            sx={{
                              backgroundColor: theme.palette.primary.light,
                            }}
                          />
                        </Box>
                      </Box>
                    </Card>
                    <Box>
                      <IconButton
                        onClick={() => setAddedFields([...addedFields, item])}
                      >
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                );
              })}
          </Box>
        </Box>
        <Box sx={{ minWidth: "25rem" }}>
          <form onSubmit={handleSubmit(handleSave)}>
            <TextInput
              label="The title of this form"
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
            <Box>
              {addedFields.length > 0 &&
                addedFields.map((field, idx) => {
                  return (
                    <Box key={idx}>
                      {field.data_type === DataTypeEnum.String && (
                        <TextInput
                          showRemove
                          onRemove={() => {
                            handleRemove(idx);
                          }}
                          label={field.title}
                          inputProps={{
                            placeholder: `Enter ${field.title}`,
                            fullWidth: true,
                            sx: { mb: 1.5 },
                          }}
                        />
                      )}
                      {field.data_type === DataTypeEnum.Number && (
                        <TextInput
                          showRemove
                          onRemove={() => {
                            handleRemove(idx);
                          }}
                          label={field.title}
                          inputProps={{
                            placeholder: `Enter ${field.title}`,
                            fullWidth: true,
                            sx: { mb: 1.5 },
                            type: "number",
                          }}
                        />
                      )}
                      {field.data_type === DataTypeEnum.File && (
                        <TextInput
                          showRemove
                          onRemove={() => {
                            handleRemove(idx);
                          }}
                          label={field.title}
                          inputProps={{
                            placeholder: `Enter ${field.title}`,
                            fullWidth: true,
                            sx: { mb: 1.5 },
                            type: "file",
                          }}
                        />
                      )}
                    </Box>
                  );
                })}
            </Box>
            <Button
              type="submit"
              fullWidth
              sx={{ mt: 4 }}
              loading={isCreateFormLoading}
            >
              Create Form
            </Button>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default CreateFormModal;
