import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import Card from 'react-bootstrap/Card'

export const SurveryComponents = ({ surveys }) => {
  const handleChange = (e, id) => {
    console.log(e.target.checked)
    surveys.forEach(survey => {
      if (survey._id === id) {
        survey.isSelected = e.target.checked
        console.log(survey.tag)
      }
    })
  }

  return (
    <div className="survey-grid">
      <Container>
        <Grid>
          <Grid.Column className="d-flex flex-wrap">
            {surveys.map((survey, index) => (
              <Card.Body key={survey._id}>
                <ul>
                  <li><input type="checkbox" key={`${survey._id}_checkbox`} value={survey?.isSelected || false} className="hidden" id={index} onChange={(e) => handleChange(e, survey._id)} />
                    <label htmlFor={index}>
                      <Card.Img src={survey.url} alt={surveys.category} className="img-survey" />
                      <a href={survey.url} active-color="cyan" />
                    </label>
                  </li>
                </ul>
              </Card.Body>
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}
