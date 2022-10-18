
import PropTypes from 'prop-types';
import {ListButton, ListButtonItem, Button} from './FeedbackOptions.styled'


export const FeedbackOptions = ({options, onLeaveFeedback}) => (
      <ListButton> 
        {options.map(el =>  (
                <ListButtonItem key={el}>
              <Button
                type="button"
                name={el}
                onClick={onLeaveFeedback}
              >
                {el}
              </Button>
              </ListButtonItem>
            ))}
      </ListButton>);


FeedbackOptions.protoTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}
   