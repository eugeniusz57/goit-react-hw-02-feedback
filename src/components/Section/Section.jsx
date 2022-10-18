import {Section, SectionsTitle} from "./Section.styled";
import PropTypes from 'prop-types';

export const Sections = ({title, children}) => (
    <Section>
      <SectionsTitle>{title}</SectionsTitle>
      {children}
    </Section>
    );

    Sections.propTypes ={
        title: PropTypes.string.isRequired,
        children: PropTypes.object,
    }
    