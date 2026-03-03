import CompanyPage from "./CompanyPage";

export default function CSR() {
  return (
    <CompanyPage
      title="CSR Policy"
      sections={[
        {
          text: "Nutra Health believes businesses should contribute to a healthier society."
        },
        {
          heading: "Health Awareness",
          text: "We share educational resources about nutrition and preventive healthcare."
        },
        {
          heading: "Community Wellness",
          text: "We support initiatives encouraging healthier lifestyles."
        },
        {
          heading: "Sustainable Practices",
          text: "We encourage responsible and ethical digital publishing."
        }
      ]}
    />
  );
}