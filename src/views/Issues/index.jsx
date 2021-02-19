import { Collapse } from "antd";
import { useEffect } from "react";

const articles = [
  [
    "Now that the vote for the school bond is behind us we can now concentrate on the last piece of school district fiscal business for the year and that is the annual district school budget.",
    "District staff members should be commended for their diligence, attention to detail, and professionalism in preparing this document. The district staff should also be commended in creating a budget that addresses the school board’s wish that its goals and objectives be tied to the budget document.",
    "Unfortunately, the board’s spending priorities do little to address the continuing problems our children are encountering within our district schools and demonstrates a focus on the wrong set of priorities.",
    "This budget cycle there is an increase of approximately $7.6 million in the general fund due to an increase from the state in educational funding. I was expecting to see the district to use these additional dollars take steps to help alleviate the overcrowded classrooms we see at the K-5 level, and did note that the district has requested an additional 7.85 full-time equivalent (FTE) positions to be created for both high schools. This change was necessary due to the changes in the weekly schedules for both high schools.",
    "However, I was very surprised to find that at the K-5 level the budget actually calls for a reduction of 3.7 instructional FTE positions from the previous year.",
    "The question that needs to be asked is this: If our elementary classroom sizes are already too large, why would we be making that reduction in instruction FTE positions when the district has received $7.6 million in additional funding?",
    "The answer is that a decision was made to utilize those funds to create additional positions in support services.",
    "The proposed budget is requesting an increase of 18.14 FTE for district support services. Over a third of this increase is being requested in the area of social work services, with approximately 6.8 FTE being used to provide behavioral support for students. This is the second increase in two years for the area of social work services, and this increase effectively doubles the size of this category from 16 FTE two years ago to a proposed 31 FTE for this upcoming year.",
    "I understand the motivation for the district request in this area, but the problem lies in the fact it places greater importance on social work over the educating of our children.",
    "Our classroom sizes are too large (that is not disputed by most individuals), so why would the district choose not to take advantage of this increased funding opportunity to alleviate the large classroom sizes in some of the elementary schools in the district? The reason is the school board is asking the district to take on too many additional tasks and moving away from its core mission of instructing our children.",
    "The move to increase the size of social work services, while reducing the number of instructional FTE in K-5, does little to enhance the ability of our children to learn. At its core our school district is an educational, rather than a social work, organization. The school board’s focus should be on bringing in more teachers, reducing class sizes, and enhancing educational opportunities for our children to give them the proper learning foundation for their educational career.",
    "The school board should not be attempting to take on additional tasks outside the district’s core mission until such time as it has fully addressed the overcrowding the district is currently experiencing.",
  ],
  [
    "I would like to start by recognizing the hard work and achievement of our Corvallis School District staff. In March 2020 they successfully pivoted from an in-person to a virtual learning environment in the span of only a few weeks. During the end of the 2019-2020 school year, district staff continually worked on creating engaging content so our students could continue to learn. Then, during the summer, they worked tirelessly, using lessons learned from the previous spring, to create a robust online learning portal for the current school year. They accomplished much in a short span of time, and as a community, I do not believe we have thanked them enough for their dedication and service to our students. However, even though they put in a great deal of effort, and through no fault of their own, our students are going to come out of this pandemic being academically behind where they should be.",
    "Now that we are finally vaccinating our population, I believe that we are on the downward slope of this pandemic. I am also hopeful that we will be able to return to full in-person learning in the fall of 2021. However, our students will be coming back to school at a disadvantage, being that a large number of them will probably not be at the academic level they would have been had the pandemic not occurred. This will be compounded by the fact that, even before the pandemic, a large number of our students were already struggling to meet academic standards. Pre-COVID, roughly one-third of Corvallis students in K-8 were not reading at their grade level and a greater number were not meeting the standards for math, according to performance measures included in the district's budget documents. This means that it will take significant effort to not only catch our students up because of the pandemic, but also to overcome the obstacles faced by the number of students underachieving prior to the pandemic.",
    "To be effective this planning should start now, and I request that the Corvallis School Board direct the district staff to start this planning process. This process should include assessments of students at the beginning of the 2021-2022 academic year so that students performing below grade level can be identified. After the students have been identified, it will be important to have plans on how to bring them up to grade level while also working on required curriculum for their grade level. Understandably, this will be a difficult task, but it is an important one.",
    "As a community, we have to ask ourselves what we can do to assist our students so they can meet their academic potential. We have to ask ourselves what barriers currently exist within our district that are not allowing all students to succeed. These observations need to be communicated to the school board so they can be compiled and provided to the district as community feedback. The answers to these questions need to be tied to performance measures, and these performance measures need to be tied to meaningful, quantifiable metrics that will demonstrate the cost and progress of our effort. To be successful, we need to recognize why things are the way that they are, talk about what has been identified, and then commit ourselves to changing it. I know we can do this, and it is imperative that the school board direct the district to start this work now.",
  ],
];

const headers = ["header1", "header2"];

const Article = ({ article }) => {
  return (
    <>
      {article.map((par) => {
        return <article style={{ padding: ".75em .25em" }}>{par}</article>;
      })}
    </>
  );
};

const IssuesView = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Issues</h2>
      <Collapse accordion>
        {articles.map((e, i) => {
          return (
            <>
              <Collapse.Panel header={headers[0]} key={i + 1}>
                <Article article={e} />
              </Collapse.Panel>
            </>
          );
        })}
      </Collapse>
    </>
  );
};

export default IssuesView;
