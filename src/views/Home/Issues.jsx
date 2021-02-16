import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

const issues = [
  {
    imgLink: 'students',
    header: 'Student Achievement',
    body:
      'I believe every student has the ability to accomplish greatness in their future. I will ensure the right policies are implemented, measured with the highest caliber of calculation between success and failure. I will fight for your children’s right for a great education and decrease the achievement gap.',
  },
  {
    imgLink: 'calculator',
    header: 'Fiscal Stewardship',
    body:
      'Fiscal stewardship requires that we focus on ensuring the greatest amount of dollars reach our classrooms. I will use my 24 years of experience of public service experience working with various state agencies and institutions, including my experience with various committees that have provided me a great understanding of our current fiscal policies and how they inpact our children.',
  },
  {
    imgLink: 'classroom',
    header: 'Getting Students Back In School Safely',
    body:
      'Many students have had their educational futures impacted due to covid. The inability to get all the support they require is evident and I plan on creating policies and procedures that would support our teachers and students get back to the schools safely.',
  },
];

const IssueSummary = () => {
  return (
    <div className="issueSummary">
      <Title level={2}>Issues</Title>
      <Row gutter={[8, 8]}>
        {issues.map((issue, i) => (
          <Col
            key={`sampleIssue-${i + 1}`}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 8 }}
          >
            {issue.imgLink && (
              <img
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  marginBottom: '1em',
                }}
                src={`/images/${issue.imgLink}.png`}
                alt={issue.imgLink}
              />
            )}
            <Title level={4}>{issue.header}</Title>
            <p>{issue.body}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default IssueSummary;
