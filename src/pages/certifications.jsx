import CompanyPage from "./CompanyPage";

export default function Certifications() {
  return (
    <CompanyPage
      title="Certifications"
      sections={[
        {
          text: "Nutra Health follows responsible digital publishing standards."
        },
        {
          list: [
            "Evidence-based information",
            "Ethical content creation",
            "Transparency with readers"
          ]
        }
      ]}
    />
  );
}