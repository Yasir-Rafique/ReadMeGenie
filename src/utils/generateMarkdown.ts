export function generateMarkdown(formData: any) {
  const skills = formData.skills
    ? formData.skills
        .split(",")
        .map((s: string) => `- ${s.trim()}`)
        .join("\n")
    : "";

  const projects = formData.projects
    ? formData.projects
        .split(",")
        .map(
          (p: string) =>
            `- [${p.trim()}](https://github.com/${formData.github}/${p.trim()})`
        )
        .join("\n")
    : "";

  return `# ${formData.name || ""}

${formData.bio || ""}

${
  formData.showStats && formData.github
    ? `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${formData.github}&show_icons=true)`
    : ""
}

${skills ? `## Skills\n${skills}\n` : ""}

${
  formData.github || formData.twitter || formData.linkedin || formData.website
    ? "## Connect with me\n"
    : ""
}
${formData.github ? `- [GitHub](https://github.com/${formData.github})` : ""}
${
  formData.twitter
    ? `\n- [Twitter](https://twitter.com/${formData.twitter.replace(/^@/, "")})`
    : ""
}
${
  formData.linkedin
    ? `\n- [LinkedIn](https://linkedin.com/in/${formData.linkedin})`
    : ""
}
${formData.website ? `\n- [Website](${formData.website})` : ""}

${projects ? `\n## Favorite Projects\n${projects}\n` : ""}

${formData.funfact ? `\n## Fun Fact\n${formData.funfact}` : ""}
`;
}
