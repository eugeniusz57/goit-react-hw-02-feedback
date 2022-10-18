import PropTypes from 'prop-types';
import { Message } from "./Notification.styled";

export const Notification = ({message}) => (
    <Message>{message}</Message>
) 

Notification.protoTypes = {
    message: PropTypes.string.isRequired,
}