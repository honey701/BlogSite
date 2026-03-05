import CompanyPage from "./CompanyPage";

export default function About() {
  return (
    <CompanyPage
      title="About Nutra Health"
      sections={[
        {
          text: "Nutra Health Blog is a platform dedicated to helping people make better health and nutrition decisions."
        },
        {
          heading: "What We Cover",
          list: [
            "Nutrition and diet",
            "Supplements and wellness",
            "Joint care and mobility",
            "Weight management",
            "Healthy lifestyle strategies"
          ]
        },
        {
          heading: "Our Mission",
          text: "Our mission is to provide clear and reliable health information so everyone can live a healthier life."
        }
      ]}
    />
  );
}