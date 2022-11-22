import React from 'react';

import { Container } from './App.styled';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Sections } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedbackIncrement = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () =>
    this.state.good + this.state.bad + this.state.neutral;
  countPositiveFeedbackPercentage = () =>
    (this.state.good / this.countTotalFeedback()) * 100;

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Container>
          <Sections title="Please leave feedback">
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.feedbackIncrement}
            />
          </Sections>

          <Sections title="Satatistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Sections>
        </Container>
      </div>
    );
  }
}
