import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Stack,
} from "@mui/material";

type FormData = {
  name: string;
  bio: string;
  skills: string;
  showStats: boolean;
  github: string;
  twitter: string;
  linkedin: string;
  website: string;
  projects: string;
  funfact: string;
};

type FormProps = {
  formData: FormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onToggleShowStats: (checked: boolean) => void;
};

function Form({ formData, onChange, onToggleShowStats }: FormProps) {
  return (
    <Stack spacing={2}>
      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label="Bio"
        name="bio"
        value={formData.bio}
        onChange={onChange}
        multiline
        rows={2}
        fullWidth
      />
      <TextField
        label="Skills (comma separated)"
        name="skills"
        value={formData.skills}
        onChange={onChange}
        placeholder="JavaScript, React, Node.js"
        fullWidth
      />
      <FormControlLabel
        control={
          <Checkbox
            name="showStats"
            checked={formData.showStats}
            onChange={(e) => onToggleShowStats(e.target.checked)}
          />
        }
        label="Show GitHub Stats Card"
      />

      <TextField
        label="GitHub Username"
        name="github"
        value={formData.github}
        onChange={onChange}
        fullWidth
      />
      <TextField
        label="Twitter"
        name="twitter"
        value={formData.twitter}
        onChange={onChange}
        placeholder="@yourhandle"
        fullWidth
      />
      <TextField
        label="LinkedIn"
        name="linkedin"
        value={formData.linkedin}
        onChange={onChange}
        placeholder="your-linkedin-username"
        fullWidth
      />
      <TextField
        label="Personal Website"
        name="website"
        value={formData.website}
        onChange={onChange}
        placeholder="https://yourwebsite.com"
        fullWidth
      />
      <TextField
        label="Favorite Projects (comma separated)"
        name="projects"
        value={formData.projects}
        onChange={onChange}
        placeholder="project-one, project-two"
        fullWidth
      />
      <TextField
        label="Fun Fact"
        name="funfact"
        value={formData.funfact}
        onChange={onChange}
        multiline
        rows={2}
        fullWidth
      />
    </Stack>
  );
}

export default Form;
