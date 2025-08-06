import React, { useState } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CopyDownloadButtons from "./components/CopyDownloadButtons";
import { generateMarkdown } from "./utils/generateMarkdown";

const textFields = [
  "name",
  "bio",
  "skills",
  "github",
  "twitter",
  "linkedin",
  "website",
  "projects",
  "funfact",
] as const;

type FormData = {
  [K in (typeof textFields)[number]]: string;
} & { showStats: boolean };

const initialFormData = {
  ...(Object.fromEntries(textFields.map((f) => [f, ""])) as unknown as Omit<
    FormData,
    "showStats"
  >),
  showStats: false,
};

function isFormEmpty(formData: FormData): boolean {
  return textFields.every((field) => !formData[field]);
}

function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggleShowStats = (checked: boolean) => {
    setFormData({ ...formData, showStats: checked });
  };

  return (
    <>
      <Box
        minHeight="100vh"
        sx={{
          background: "linear-gradient(to bottom right, #c7d2fe, #f3e8ff)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={12}
          sx={{
            width: "100%",
            maxWidth: 1000,
            borderRadius: 4,
            p: { xs: 2, md: 4 },
            my: 6,
          }}
        >
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            sx={{ mb: 4 }}
          >
            Read Me Genie
          </Typography>

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{ display: { xs: "none", md: "block" } }}
              />
            }
          />
          <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
            <Box flex={1}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Fill your profile info
              </Typography>
              <Form
                formData={formData}
                onChange={handleChange}
                onToggleShowStats={handleToggleShowStats}
              />
            </Box>
            <Box flex={1}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Live Preview
              </Typography>
              <Preview markdown={generateMarkdown(formData)} />
              <CopyDownloadButtons
                markdown={generateMarkdown(formData)}
                disabled={isFormEmpty(formData)}
              />
            </Box>
          </Stack>
        </Paper>
      </Box>
      <Box mt={6} textAlign="center" color="text.secondary" fontSize={14}>
        Made with ❤️ using MUI and React
      </Box>
    </>
  );
}

export default App;
