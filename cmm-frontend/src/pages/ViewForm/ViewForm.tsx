import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/TextInput";
import { useGetFormById } from "@/services/queries/forms.query";
import { DataTypeEnum } from "@/types/global.types";
import { Box, Card, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const params = useParams();
  const formId = params?.id ? +params.id : undefined;

  const { data } = useGetFormById(formId);

  console.log({ data });

  const { register, handleSubmit, control, reset } = useForm();

  const handleSave = async (data: any) => {
    console.log({ data });
    reset();
  };

  return (
    <Box>
      <Navbar />
      {data && data.form && (
        <Card
          variant="outlined"
          sx={{ width: "35rem", padding: 5, margin: "auto", marginTop: 10 }}
        >
          <Box>
            <form onSubmit={handleSubmit(handleSave)}>
              <Box>
                <Typography variant="h6" textAlign={"center"} marginBottom={5}>
                  {data.form.title}
                </Typography>
                <TextInput
                  label={"Email"}
                  required
                  inputProps={{
                    placeholder: `Enter Your Email`,
                    fullWidth: true,
                    sx: { mb: 1.5 },
                    type: "email",
                    ...register("email"),
                  }}
                />
                {data.form.fields.length > 0 &&
                  data.form.fields.map((field, idx) => {
                    return (
                      <Box key={idx}>
                        {field.data_type === DataTypeEnum.String && (
                          <TextInput
                            label={field.title}
                            inputProps={{
                              placeholder: `Enter ${field.title}`,
                              fullWidth: true,
                              sx: { mb: 1.5 },
                              ...register(field.title),
                            }}
                          />
                        )}
                        {field.data_type === DataTypeEnum.Number && (
                          <TextInput
                            label={field.title}
                            inputProps={{
                              placeholder: `Enter ${field.title}`,
                              fullWidth: true,
                              sx: { mb: 1.5 },
                              type: "number",
                              ...register(field.title),
                            }}
                          />
                        )}
                        {field.data_type === DataTypeEnum.File && (
                          <Controller
                            control={control}
                            name="file"
                            render={({ field }) => (
                              <TextInput
                                label="Upload file"
                                inputProps={{
                                  type: "file",
                                  placeholder: "Choose file",
                                  fullWidth: true,
                                  sx: { mb: 1.5 },
                                  onChange: (e) => {
                                    const file =
                                      (e.target as HTMLInputElement)
                                        .files?.[0] || null;
                                    field.onChange(file);
                                  },
                                  inputRef: field.ref,
                                }}
                              />
                            )}
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
                //   loading={isCreateFormLoading}
              >
                Submit Response
              </Button>
            </form>
          </Box>
        </Card>
      )}
    </Box>
  );
};

export default ViewForm;
