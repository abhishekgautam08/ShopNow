import {
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

const ContactPage = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card style={{ maxWidth: 600, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h3" align="center">
              Contact Us
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Fill up the form and our team will get back to you within 24
              hours.
            </Typography>
            <form>
              <TextField
                placeholder="Enter first name"
                label="First Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                placeholder="Enter last name"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                type="email"
                placeholder="Enter email"
                label="Email"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                type="number"
                placeholder="Enter phone number"
                label="Phone"
                variant="outlined"
                fullWidth
                required
              />

              <TextField
                label="Message"
                multiline
                rows={4}
                placeholder="Type your message here"
                variant="outlined"
                fullWidth
                required
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ContactPage;
