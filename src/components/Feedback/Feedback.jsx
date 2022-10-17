import React from "react";
import { Container, Title, SatatisticsListItems, Button, SecondTitle, SatatisticsList, ListButton, ListButtonItem } from "./Feedback.styled";

export class Feedback extends React.Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      };

    handleIncrementLike = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    handleDicrementLike = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };

    handleNeutralLike = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    }

    countTotalFeedback = () =>  (this.state.good + this.state.bad + this.state.neutral);
    countPositiveFeedbackPercentage = () => (this.state.good / this.countTotalFeedback() * 100);


render(){
        return(
    <Container>
        <Title>Please leave feedback</Title>
        <ListButton>
            <ListButtonItem><Button onClick={this.handleIncrementLike}>Good</Button></ListButtonItem>
            <ListButtonItem><Button onClick={this.handleNeutralLike}>Neutral</Button></ListButtonItem>
            <ListButtonItem> <Button onClick={this.handleDicrementLike}>Bad</Button></ListButtonItem>
        </ListButton>
        <SecondTitle>Satatistics</SecondTitle>
        <SatatisticsList>
            <SatatisticsListItems>Good: {this.state.good}</SatatisticsListItems>
            <SatatisticsListItems>Neutral: {this.state.neutral}</SatatisticsListItems>
            <SatatisticsListItems>Bad: {this.state.bad}</SatatisticsListItems>
            <SatatisticsListItems>Total: {this.countTotalFeedback()}</SatatisticsListItems>
            <SatatisticsListItems>Positive feedback: {this.countTotalFeedback() ? Math.round(this.countPositiveFeedbackPercentage())+`%` : ''}</SatatisticsListItems>
        </SatatisticsList>
        
    </Container>
        );
    }
}

