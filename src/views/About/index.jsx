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
        width: "80%",
        margin: "0 auto",
      }}
    >
      <h2>Meet Richard</h2>

      <article>
        With 24 years of public service with state agencies and institutions of
        higher education, Richard has contributed much of his passion to
        ensuring students get the education they deserve.
      </article>
    </div>
  );
};

export default AboutView;
