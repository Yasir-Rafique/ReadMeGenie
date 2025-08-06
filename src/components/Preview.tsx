import React from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "@mui/material";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => (
  <div className="bg-white p-6 rounded-lg shadow-md min-h-[300px] overflow-auto">
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <Link
            {...props}
            target="_blank"
            rel="noopener"
            underline="hover"
            color="primary"
            fontWeight="bold"
          />
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  </div>
);

export default Preview;
