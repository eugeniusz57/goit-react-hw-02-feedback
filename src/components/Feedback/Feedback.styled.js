import styled from '@emotion/styled';

export const Container = styled.div`
width: 300px;
margin: 0 auto;
padding: 20px;
text-align: center;
`

export const Title = styled.h1`
font-size: 28px;
margin-top: 20px;
margin-bottom: 20px;
`
export const ListButton = styled.ul`
display: flex;
list-style: none;
justify-content: center;
margin: 20px 0;
padding: 0;
}
`

export const ListButtonItem = styled.li`
:not(:last-child){
    margin-right: 30px;
}`


export const Button = styled.button`
min-width: 80px;
min-height: 30px;
font-size: 18px;
:hover, :focus{
    background-color: #10b4c1bd;
}
border: none;
border-radius: 4px;
`

export const SecondTitle = styled.h2`
font-size: 22px;
margin: 20px 0;
`
export const SatatisticsList = styled.ul`
list-style: none;
margin: 20px 0;
padding: 0;
text-align: left;
`

export const SatatisticsListItems = styled.li`
font-size: 18px;
`