import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Signup() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Signing up with", data);
    navigate("/");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
            borderRadius: 3,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            width: "100%",
            maxWidth: "450px",
            margin: "0 auto",
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: "#FF5722",
              width: 56,
              height: 56,
            }}
          >
            <LockOutlinedIcon />
          </Avatar>

          <Typography
            component="h1"
            variant="h5"
            sx={{
              mt: 1,
              mb: 2,
              color: "#333",
              fontWeight: "bold",
            }}
          >
            Sign up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1, width: "100%" }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Full Name"
              autoComplete="name"
              autoFocus
              {...register("name", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd" },
                  "&:hover fieldset": { borderColor: "#FF5722" },
                  "&.Mui-focused fieldset": { borderColor: "#FF5722" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#FF5722" },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Please enter a valid email address",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd" },
                  "&:hover fieldset": { borderColor: "#FF5722" },
                  "&.Mui-focused fieldset": { borderColor: "#FF5722" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#FF5722" },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[0-9])/,
                  message: "Password must contain at least one number",
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd" },
                  "&:hover fieldset": { borderColor: "#FF5722" },
                  "&.Mui-focused fieldset": { borderColor: "#FF5722" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#FF5722" },
              }}
            />

            <TextField
              margin="normal"
              fullWidth
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ddd" },
                  "&:hover fieldset": { borderColor: "#FF5722" },
                  "&.Mui-focused fieldset": { borderColor: "#FF5722" },
                },
                "& .MuiInputLabel-root.Mui-focused": { color: "#FF5722" },
              }}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "#FF5722",
                color: "white",
                padding: "12px",
                fontSize: "1rem",
                fontWeight: "bold",
                textTransform: "uppercase",
                "&:hover": { backgroundColor: "#E64A19" },
              }}
            >
              Sign Up
            </Button>

            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                <Link
                  href="/signin"
                  variant="body2"
                  sx={{
                    color: "#FF5722",
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}