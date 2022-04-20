import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Grid,
  Box,
  TextField,
  Button,
  Snackbar,
  Alert,
  Typography,
} from "@mui/material";

import { addChoice } from "../store/choices";

const SubmittionForm = ({ path }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors,
      isSubmitting,
      isSubmitSuccessful,
      isDirty,
      dirtyFields,
    },
    reset,
  } = useForm();

  //Success snackbar
  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  const onSubmit = async (data) => {
    try {
      await dispatch(addChoice(data));
      setSnackbar({
        children: "Your form successfully submitted!",
        severity: "success",
      });
      reset();
    } catch (err) {
      console.log(err);
      setSnackbar({
        children: "Form could not be submitted!",
        severity: "error",
      });
    }
  };

  return (
    <>
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
      <Box sx={{ mt: "15vh" }}></Box>
      <Box
        sx={{
          width: "80vw",
          margin: "auto",
          padding: 5,
        }}
      >
        <Typography color="inherit" align="center" variant="h6">
          Please type your choices of courses
        </Typography>
        <Typography color="inherit" align="center" variant="h6">
          The choices have to contain “calculus” or be empty
        </Typography>
        <Grid
          container
          direction="column"
          justifyContent={"center"}
          alignItems={"center"}
          spacing={3}
          sx={{
            width: 1,
          }}
        >
          <Grid item xs={5} sx={{ width: "60%" }}>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                marginTop: 2,
              }}
              id="submit-form"
            >
              <Grid container spacing={3} direction="column">
                <Grid item>
                  <TextField
                    id="choiceA"
                    label="Choice A"
                    variant="filled"
                    {...register("choiceA", {
                      validate: (val) => {
                        if (!val.toLowerCase().includes("calculus") && !!val) {
                          errors.choiceA = {};
                          errors.choiceA.message = `Choice A could be empty or should include "calculus"`;
                          console.log("errors.choiceA", errors.choiceA);
                        }
                      },
                    })}
                    error={!!errors?.choiceA ? true : false}
                    helperText={errors?.choiceA ? errors.choiceA.message : null}
                    fullWidth
                    // required
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="choiceB"
                    label="Choice B"
                    variant="filled"
                    {...register("choiceB", {
                      validate: (val) => {
                        if (!val.toLowerCase().includes("calculus") && !!val) {
                          errors.choiceB = {};
                          errors.choiceB.message = `Choice B could be empty or should include "calculus"`;
                        }
                      },
                    })}
                    error={!!errors?.choiceB}
                    helperText={errors?.choiceB ? errors.choiceB.message : null}
                    fullWidth
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="choiceC"
                    label="Choice C"
                    variant="filled"
                    {...register("choiceC", {
                      validate: (val) => {
                        if (!val.toLowerCase().includes("calculus") && !!val) {
                          errors.choiceC = {};
                          errors.choiceC.message = `Choice C could be empty or should include "calculus"`;
                        }
                      },
                    })}
                    error={!!errors?.choiceC}
                    helperText={errors?.choiceC ? errors.choiceC.message : null}
                    fullWidth
                  />
                </Grid>

                <Grid item>
                  <Button
                    size="medium"
                    color="secondary"
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isSubmitting || !isDirty}
                    form="submit-form"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ mb: "5vh" }}></Box>
    </>
  );
};

export default SubmittionForm;
