const issues = [
  {
    header: 'Student Achievement',
    body:
      'I believe every student has the ability to accomplish greatness in their future. I will ensure the right policies are implemented, measured with the highest caliber of calculation between success and failure. I will fight for your children’s right for a great education and decrease the achievement gap.',
  },
  {
    header: 'Fiscal Stewardship',
    body:
      'Fiscal stewardship requires that we focus on ensuring the greatest amount of dollars reach our classrooms. I will use my 24 years of experience of public service experience working with various state agencies and institutions, including my experience with various committees that have provided me a great understanding of our current fiscal policies and how they inpact our children.',
  },
  {
    header: 'Getting Students Back In School Safely',
    body:
      'Many students have had their educational futures impacted due to covid. The inability to get all the support they require is evident and I plan on creating policies and procedures that would support our teachers and students get back to the schools safely.',
  },
];

const IssueSummary = () => {
  return (
    <div>
      <h2>Issues</h2>
      {issues.map((issue) => (
        <div>
          <div>Image Here</div>
          <h3>{issue.header}</h3>
          <p>{issue.body}</p>
        </div>
      ))}
    </div>
  );
};

export default IssueSummary;
