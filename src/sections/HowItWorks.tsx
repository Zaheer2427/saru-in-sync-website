// import { Box, Button, Typography } from "@mui/material";
// import Section from "../components/Section";


// export default function HowItWorks() {
//   return (
//     <Section id="how" title="How It Works">
//       {/* Bullet Points */}
//       <Box
//         component="ul"
//         sx={{
//           mt: 4,
//           mx: "auto",
//           fontSize: { xs: "1rem", md: "1.2rem" },
//           textAlign: { xs: "left", md: "center" },
//           listStyleType: "disc",
//           listStylePosition: "inside",
//           maxWidth: "600px",
//           pl: { xs: 2, md: 0 },
//         }}
//       >
//         <li>Fill the booking form with your details and purpose.</li>
//         <li>Scan the QR code and pay via GPay/PhonePe.</li>
//         <li>Upload the payment screenshot in the form.</li>
//         <li>We verify and send the meeting link by Email.</li>
//       </Box>

//       {/* Booking CTA */}
//       <Typography
//         gutterBottom
//         sx={{
//           mt: 4,
//           maxWidth: 500,
//           color: "#f45700",
//           mx: "auto",
//           fontSize: { xs: "1rem", md: "1.2rem" },
//         }}
//       >
//         Click the button below to open the booking form and complete payment via UPI.
//       </Typography>
//       <Typography
//         variant="h6"
//         gutterBottom
//         sx={{
//           fontWeight: 600,
//           fontSize: { xs: "1rem", md: "1.3rem" },
//           color: "#011845",
//         }}
//       >
//         Book Now & Unlock Clarity – ₹149
//       </Typography>
//       <Button
//         variant="contained"
//         size="large"
//         sx={{
//           mt: 2,
//           mb: { xs: 2.5 },
//           background: "#f45700",
//           textTransform: "none",
//           borderRadius: 8,
//           width: { xs: "100%", sm: "auto" },
//         }}
//         href="https://forms.gle/Uorb2UQojku3ZaxS7"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Open Booking Form
//       </Button>
//     </Section>
//   );
// }


// Temporary Closed UI

import { Box, Typography } from "@mui/material";
import Section from "../components/Section";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

export default function HowItWorks() {

  return (
    <Section id="how" title="Session Booking">
      
      {/* Centered Temporary Closed UI */}
      <Box
        sx={{
          textAlign: "center",
          py: 1,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <WarningAmberIcon sx={{ fontSize: 70, color: "#f45700" }} />

        <Typography
          variant="h5"
          sx={{ mt: 2, fontWeight: 700, color: "#011845" }}
        >
          Bookings Temporarily Closed
        </Typography>

        <Typography sx={{ mt: 1.5, color: "text.secondary", fontSize: "1.1rem" }}>
          We are currently not accepting new session bookings.
          Thank you for visiting the site and for your kind support.
        </Typography>
      </Box>

    </Section>
  );
}