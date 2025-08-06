import { useState } from "react";
import { Button, Stack } from "@mui/material";

function CopyDownloadButtons({
  markdown,
  disabled,
}: {
  markdown: string;
  disabled?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCopy}
        fullWidth
        disabled={disabled}
      >
        {copied ? "Copied!" : "Copy Markdown"}
      </Button>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleDownload}
        fullWidth
        disabled={disabled}
      >
        Download README.md
      </Button>
    </Stack>
  );
}
export default CopyDownloadButtons;
