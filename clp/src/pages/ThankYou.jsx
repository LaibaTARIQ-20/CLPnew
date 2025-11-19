import React from "react";
import { Box, Typography, Container, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ThankYou() {
  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: 6, textAlign: "center" }}>
        <Box sx={{ mb: 3 }}>
          <Box
            sx={{
              width: 120,
              height: 120,
              margin: "0 auto",
              bgcolor: "success.light",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckCircleIcon
              sx={{
                fontSize: 60,
                color: "success.main",
              }}
            />
          </Box>
        </Box>

        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Thank You!
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Your submission has been received.
        </Typography>
      </Paper>
    </Container>
  );
}

export default ThankYou;
