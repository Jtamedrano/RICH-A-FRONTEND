import { Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';

const issues = [
  {
    imgLink: 'students',
    header: 'Student Achievement',
    body:
      'I believe every student has the capacity to achieve greatness. I will work to ensure that all policies created by the board are tied to quantifiable measures so the school board and school district can be aware of the policies’ success or failure.  I will fight to ensure our children receive a world-class education and decrease the current achievement gap.',
  },
  {
    imgLink: 'calculator',
    header: 'Fiscal Stewardship',
    body:
      'The limited resources of the Corvallis School District require that we focus on ensuring the greatest amount of dollars reach our classrooms. I wish to leverage this knowledge to ensure that our limited resources have the greatest positive impact district-wide. Fiscal stewardship requires that we focus on ensuring the greatest amount of dollars reach our classrooms. I will use my 24 years of experience of public service that have provided me a great understanding of our current fiscal policies and how they impact our children.',
  },
  {
    imgLink: 'classroom',
    header: 'Getting Students Back In School Safely',
    body:
      'All of our students have had their educational futures impacted by COVID-19.  I will work with the school district to help ensure that all necessary safety protocols are in place so that a return to in-person learning is as safe as possible.  I will also advocate that assessments be completed at the beginning of the 2021-2022 academic year to identify those students who were left behind and are not working at grade level.  We must ensure all children can meet their full academic potential.',
  },
];

const IssueSummary = () => {
  return (
    <div className="issueSummary">
      <Title level={2}>Issues</Title>
      <Row gutter={[24, 24]}>
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
