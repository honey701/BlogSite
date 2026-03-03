import CompanyPage from "./CompanyPage";

export default function Leadership() {
  return (
    <CompanyPage
      title="Leadership"
      sections={[
        {
          text: "Nutra Health Blog is led by a passionate team focused on wellness education."
        },
        {
          heading: "Editorial Team",
          list: [
            "Nutrition researchers",
            "Health writers",
            "Wellness experts",
            "Content strategists"
          ]
        }
      ]}
    />
  );
}