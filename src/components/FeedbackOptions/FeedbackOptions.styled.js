import styled from '@emotion/styled';

export const ListButton = styled.ul`
display: flex;
list-style: none;
justify-content: center;
padding: 0;
}
`

export const ListButtonItem = styled.li`
:not(:last-child){
    margin-right: 30px;
}`

export const Button = styled.button`
min-width: 80px;
min-height: 40px;
font-size: 18px;
:hover, :focus{
    background-color: #10b4c1bd;
    color: #090e09;
    font-size: 20px;
}
:first-letter{
    text-transform: uppercase;
}
border: none;
border-radius: 4px;
`