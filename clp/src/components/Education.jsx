import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
} from "@mui/material";

function Education({ onNext, onBack, defaultValues }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {},
  });

  const onSubmit = (data) => {
    onNext(data);
  };

  const countries = [
    "United States",
    "Canada",
    "Pakistan",
    "United Kingdom",
    "Australia",
    "Germany",
    "India",
    "China",
    "Japan",
    "Italy",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
        Education
      </Typography>

      {/* School Name and Graduation Date */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="High School or Equivalent Name"
            {...register("schoolName", {
              required: "School name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            })}
            error={!!errors.schoolName}
            helperText={errors.schoolName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Graduation Date"
            placeholder="MM-DD-YYYY"
            {...register("graduationDate", {
              required: "Graduation date is required",
              pattern: {
                value: /^\d{2}-\d{2}-\d{4}$/,
                message: "Please use MM-DD-YYYY format",
              },
            })}
            error={!!errors.graduationDate}
            helperText={errors.graduationDate?.message || "Date"}
          />
        </Grid>
      </Grid>

      {/* School Address */}
      <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: "bold" }}>
        School Address
      </Typography>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="City"
            {...register("schoolCity", {
              required: "City is required",
            })}
            error={!!errors.schoolCity}
            helperText={errors.schoolCity?.message || "City"}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="State / Province"
            {...register("schoolState", {
              required: "State/Province is required",
            })}
            error={!!errors.schoolState}
            helperText={errors.schoolState?.message || "State / Province"}
          />
        </Grid>

        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors.schoolCountry}>
            <Select
              displayEmpty
              {...register("schoolCountry", {
                required: "Please select a country",
              })}
              defaultValue=""
            >
              <MenuItem value="">Please Select</MenuItem>
              {countries.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Country</FormHelperText>
            {errors.schoolCountry && (
              <FormHelperText error>
                {errors.schoolCountry.message}
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={onBack}
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{ minWidth: 120 }}
        >
          Next
        </Button>
      </Box>
    </form>
  );
}

export default Education;
