import React from "react";
import { Container, Title, SatatisticsListItems, Button, SecondTitle, SatatisticsList, ListButton, ListButtonItem } from "./Feedback.styled";
export class Feedback extends React.Component{


render(){
        return(
    <Container>
        <Title>Please leave feedback</Title>
        <ListButton>
            <ListButtonItem><Button>Good</Button></ListButtonItem>
            <ListButtonItem><Button>Neutral</Button></ListButtonItem>
            <ListButtonItem> <Button>Bad</Button></ListButtonItem>
        </ListButton>
        <SecondTitle>Satatistics</SecondTitle>
        <SatatisticsList>
            <SatatisticsListItems>Good:</SatatisticsListItems>
            <SatatisticsListItems>Neutral:</SatatisticsListItems>
            <SatatisticsListItems>Bad:</SatatisticsListItems>
        </SatatisticsList>
        
    </Container>
        );
    }
}

