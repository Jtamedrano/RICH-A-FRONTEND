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
        textAlign: "center",
      }}
    >
      <h2>Meet Richard</h2>

      <article>
        <p>
          My family and I are fifteen-year residents of Corvallis. Three of our
          children are either currently, or were previously, part of the
          Corvallis School District. One of the major draws for our family for
          coming to Corvallis were the quality of the schools. In our early
          years within the district we saw the board and the district work
          together to ensure that all students had an opportunity to achieve
          their full academic potential. However, as time went on, the emphasis
          on academics faded, and more emphasis has been placed on ensuring that
          resources are equitably allocated to our schools. This change is
          direction is something I agreed with at a strategic level because as a
          community we want to make sure all students have the opportunity to
          achieve their full academic potential. However, the process was not
          transparent and the district failed to document meaningful items which
          would measure success or failure. This is important because without
          proper measurements high level decisions cannot be made as to whether
          more resources are needed, or whether those same resources need to be
          directed elsewhere. I wanted to help in making those decisions, so I
          began volunteering my time with the district.
        </p>
        <p>
          I have volunteered my time as part of the Corvallis School District
          budget committee and am currently serving on the Bond Oversight
          Committee. Through this time with those committees I have gained a
          clearer understanding of district finances and how those different
          revenue streams affect our children’s classroom experience. I have
          also offered my advice through these bodies to try and effect
          meaningful change so that the district’s efforts are more transparent,
          and more meaningful measures are provided to the community. I would not
          consider my time wasted on these committees, but I have come to
          realize that the only way to create a meaningful change is to actually
          serve on the school board.
        </p>
        <p>
          I come from a family with a strong commitment towards public service,
          and I have what my parents taught me growing up to guide my path
          towards serving our greater community. I am running for the Corvallis
          School Board Position #4 because I feel strongly that our current
          board has lost sight of its primary mission which is to educate our
          students. The district has concentrated on several different issues
          over the last five years, and except for graduation rates, there have
          been few positive academic outcomes for our children. Currently 1 in 3
          Corvallis K-8 students are not reading at grade level, and a greater
          number are not meeting their grade standards for math. This is an item
          that cuts across all demographics within our community, yet our school
          board has been hesitant to hold the district accountable to state
          achievement standards. I have watched as scarce discretionary
          resources are used for items that are not directly
          related to classroom instruction, and wish to see more of these
          resources re-directed back to the classroom.
        </p>
        <p>
          I believe I am the right person, at the right time to bring a voice to
          these issues on the school board. To accomplish this goal I need your
          help, support, and most importantly your vote. I encourage you to
          please contact me via email or message me through my campaign site on
          Facebook- Rich Arnold for Corvallis School Board.
        </p>
      </article>
    </div>
  );
};

export default AboutView;
