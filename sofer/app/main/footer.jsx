import React from 'react';
import { render } from 'react-dom';
import Container from 'muicss/lib/react/container';

class Footer extends React.Component {
    render() {
        return (
                 <footer>
                     <Container>
                         &copy; 2017
                     </Container>
                 </footer>
                 );
    }
}

module.exports.Footer = Footer;
