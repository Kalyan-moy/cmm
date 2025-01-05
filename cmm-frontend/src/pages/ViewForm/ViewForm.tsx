import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import TextInput from "@/components/TextInput";
import { useToast } from "@/providers/Toast.provider";
import { useSubmitResponse } from "@/services/mutations/forms.mutation";
import { useGetFormById } from "@/services/queries/forms.query";
import { DataTypeEnum } from "@/types/global.types";
import { Box, Card, Typography } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ViewForm = () => {
  const Toast = useToast();
  const params = useParams();
  const formId = params?.id ? +params.id : undefined;

  const { data } = useGetFormById(formId);
  const { mutateAsync: submitResponseFn, isLoading } = useSubmitResponse();

  const { register, handleSubmit, control, reset } = useForm();

  const handleSave = async (data: any) => {
    console.log({ data });

    try {
      const { email, ...updatedData } = data;
      if (!email) {
        return Toast.warning({
          title: "Email is mandatory.",
          message: "Failed to submit response.",
        });
      }
      const transformedData = Object.entries(updatedData).map(
        ([key, value]) => ({
          fieldName: key || "",
          value: value || "",
        })
      );
      const res = await submitResponseFn({
        data: { email: email, form_id: formId, data: transformedData },
      });

      if (res.message === "Already Exist") {
        return Toast.warning({
          title: "OOPS!!.",
          message: "You have already submitted response.",
        });
      }
      Toast.success({
        title: "Response Submitted.",
        message: "Response has been created successfully.",
      });

      reset();
    } catch (error) {
      Toast.error({
        title: "Failed to submit Response",
        message: "Something went wrong, please try again later.",
      });
    }
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
                            name="File"
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
                loading={isLoading}
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
