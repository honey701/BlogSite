import CompanyPage from "./CompanyPage";

export default function Awards() {
  return (
    <CompanyPage
      title="Awards & Recognition"
      sections={[
        {
          text: "Nutra Health Blog continues to grow as a trusted wellness platform."
        },
        {
          list: [
            "Health Education Excellence",
            "Top Wellness Blog Recognition",
            "Community Health Initiative"
          ]
        }
      ]}
    />
  );
}