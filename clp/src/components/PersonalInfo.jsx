import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  MenuItem,
  Button,
  Box,
  Grid,
} from "@mui/material";

function PersonalInfo({ onNext, defaultValues }) {
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

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 61 }, (_, i) => 2010 - i);

  const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "China",
    "Japan",
    "Brazil",
    "Mexico",
    "Spain",
    "Italy",
    "Netherlands",
    "Sweden",
    "Norway",
    "Denmark",
    "Finland",
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Name Section */}
      <FormLabel component="legend" sx={{ mb: 1, fontWeight: "bold" }}>
        Name
      </FormLabel>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="First Name"
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            })}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Middle Initial"
            {...register("middleInitial", {
              required: "Middle initial is required",
              maxLength: { value: 1, message: "Only 1 character" },
            })}
            error={!!errors.middleInitial}
            helperText={errors.middleInitial?.message}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Last Name"
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "Minimum 2 characters" },
            })}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
        </Grid>
      </Grid>

      {/* Birth Date */}
      <FormLabel component="legend" sx={{ mb: 1, fontWeight: "bold" }}>
        Birth Date
      </FormLabel>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.birthMonth}>
            <Select
              displayEmpty
              {...register("birthMonth", {
                required: "Please select a month",
              })}
              defaultValue=""
            >
              <MenuItem value="">Please select a month</MenuItem>
              {months.map((month, index) => (
                <MenuItem key={index} value={month}>
                  {month}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Month</FormHelperText>
            {errors.birthMonth && (
              <FormHelperText error>{errors.birthMonth.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.birthDay}>
            <Select
              displayEmpty
              {...register("birthDay", {
                required: "Please select a day",
              })}
              defaultValue=""
            >
              <MenuItem value="">Please select a day</MenuItem>
              {days.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Day</FormHelperText>
            {errors.birthDay && (
              <FormHelperText error>{errors.birthDay.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4}>
          <FormControl fullWidth error={!!errors.birthYear}>
            <Select
              displayEmpty
              {...register("birthYear", {
                required: "Please select a year",
              })}
              defaultValue=""
            >
              <MenuItem value="">Please select a year</MenuItem>
              {years.map((year) => (
                <MenuItem key={year} value={year}>
                  {year}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>Year</FormHelperText>
            {errors.birthYear && (
              <FormHelperText error>{errors.birthYear.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>
      </Grid>

      {/* Gender and Country */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" error={!!errors.gender}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup row>
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    {...register("gender", {
                      required: "Please select your gender",
                    })}
                  />
                }
                label="Female"
              />
            </RadioGroup>
            {errors.gender && (
              <FormHelperText>{errors.gender.message}</FormHelperText>
            )}
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl fullWidth error={!!errors.country}>
            <Select
              displayEmpty
              {...register("country", {
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
            <FormHelperText>
              {errors.country
                ? errors.country.message
                : "Of which country are you a citizen?"}
            </FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      {/* Phone and Email */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Phone"
            placeholder="(000) 000-0000"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9\s()-]+$/,
                message: "Please enter a valid phone number",
              },
            })}
            error={!!errors.phone}
            helperText={errors.phone?.message}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="E-mail Address"
            placeholder="ex: myname@example.com"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message || "example@example.com"}
          />
        </Grid>
      </Grid>

      {/* Mailing Address */}
      <FormLabel component="legend" sx={{ mb: 1, fontWeight: "bold" }}>
        Mailing Address
      </FormLabel>
      <Box sx={{ mb: 3 }}>
        <TextField
          fullWidth
          label="Street Address"
          sx={{ mb: 2 }}
          {...register("streetAddress", {
            required: "Street address is required",
          })}
          error={!!errors.streetAddress}
          helperText={errors.streetAddress?.message || "Street Address"}
        />

        <TextField
          fullWidth
          label="Street Address Line 2"
          sx={{ mb: 2 }}
          {...register("streetAddress2")}
          helperText="Street Address Line 2"
        />

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="City"
              {...register("city", {
                required: "City is required",
              })}
              error={!!errors.city}
              helperText={errors.city?.message || "City"}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="State / Province"
              {...register("stateProvince", {
                required: "State/Province is required",
              })}
              error={!!errors.stateProvince}
              helperText={errors.stateProvince?.message || "State / Province"}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          label="Postal / Zip Code"
          sx={{ mt: 2 }}
          {...register("postalCode", {
            required: "Postal code is required",
          })}
          error={!!errors.postalCode}
          helperText={errors.postalCode?.message || "Postal / Zip Code"}
        />
      </Box>

      {/* Emergency Contact */}
      <FormLabel component="legend" sx={{ mb: 1, fontWeight: "bold" }}>
        Emergency Contact
      </FormLabel>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            {...register("emergencyFirstName", {
              required: "Emergency contact first name is required",
            })}
            error={!!errors.emergencyFirstName}
            helperText={errors.emergencyFirstName?.message || "First Name"}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            {...register("emergencyLastName", {
              required: "Emergency contact last name is required",
            })}
            error={!!errors.emergencyLastName}
            helperText={errors.emergencyLastName?.message || "Last Name"}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="example@example.com"
            {...register("emergencyEmail", {
              required: "Emergency contact email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            error={!!errors.emergencyEmail}
            helperText={errors.emergencyEmail?.message || "example@example.com"}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Relationship"
            {...register("emergencyRelationship", {
              required: "Relationship is required",
            })}
            error={!!errors.emergencyRelationship}
            helperText={errors.emergencyRelationship?.message || "Relationship"}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Please enter a valid phone number"
            {...register("emergencyPhone", {
              required: "Emergency contact phone is required",
              pattern: {
                value: /^[0-9\s()-]+$/,
                message: "Please enter a valid phone number",
              },
            })}
            error={!!errors.emergencyPhone}
            helperText={
              errors.emergencyPhone?.message ||
              "Please enter a valid phone number"
            }
          />
        </Grid>
      </Grid>

      {/* Language Question */}
      <FormControl
        component="fieldset"
        error={!!errors.languages}
        sx={{ mb: 3 }}
      >
        <FormLabel component="legend">
          Do you speak any languages other than English?
        </FormLabel>
        <RadioGroup row>
          <FormControlLabel
            value="yes"
            control={
              <Radio
                {...register("languages", {
                  required: "Please select an option",
                })}
              />
            }
            label="Yes"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                {...register("languages", {
                  required: "Please select an option",
                })}
              />
            }
            label="No"
          />
        </RadioGroup>
        {errors.languages && (
          <FormHelperText>{errors.languages.message}</FormHelperText>
        )}
      </FormControl>

      {/* Next Button */}
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
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

export default PersonalInfo;
