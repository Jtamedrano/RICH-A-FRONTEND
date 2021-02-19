import { useEffect } from "react";

const AboutView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexFlow: "column nowrap",
      }}
    >
      Information about Richard
    </div>
  );
};

export default AboutView;
