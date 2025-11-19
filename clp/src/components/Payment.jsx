import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormHelperText,
  FormGroup,
} from "@mui/material";

function Payment({ onSubmit, onBack, defaultValues, isSubmitting }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues || {
      creditCard: false,
      mailCheck: false,
      inPerson: false,
    },
  });

  const formSubmit = (data) => {
    onSubmit(data);
  };

  const watchCreditCard = watch("creditCard");
  const watchMailCheck = watch("mailCheck");
  const watchInPerson = watch("inPerson");

  const validatePaymentMethod = () => {
    if (!watchCreditCard && !watchMailCheck && !watchInPerson) {
      return "Please select at least one payment method";
    }
    return true;
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <Typography variant="h5" gutterBottom>
        Application Fee
      </Typography>

      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Payment is due 3 days prior to the start of the class
      </Typography>

      <FormControl
        component="fieldset"
        error={!!errors.paymentValidation}
        sx={{ mb: 4 }}
      >
        <Typography variant="subtitle1" gutterBottom>
          Payment Method:
        </Typography>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register("creditCard")} />}
            label="Credit Card"
          />

          <FormControlLabel
            control={<Checkbox {...register("mailCheck")} />}
            label="Mail a Check"
          />

          <FormControlLabel
            control={<Checkbox {...register("inPerson")} />}
            label="In-person at school"
          />

          <input
            type="hidden"
            {...register("paymentValidation", {
              validate: validatePaymentMethod,
            })}
          />
        </FormGroup>

        {errors.paymentValidation && (
          <FormHelperText>{errors.paymentValidation.message}</FormHelperText>
        )}
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <Button
          variant="outlined"
          size="large"
          onClick={onBack}
          disabled={isSubmitting}
          sx={{ minWidth: 120 }}
        >
          Back
        </Button>

        <Button
          type="submit"
          variant="contained"
          size="large"
          disabled={isSubmitting}
          sx={{
            minWidth: 120,
            bgcolor: "success.main",
            "&:hover": {
              bgcolor: "success.dark",
            },
          }}
        >
          {isSubmitting ? "Please wait..." : "Submit Form"}
        </Button>
      </Box>
    </form>
  );
}

export default Payment;
