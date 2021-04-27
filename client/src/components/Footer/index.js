import React from 'react';
import Card from 'react-bootstrap/Card';
import "./style.css"



function Footer() {
    return(
        [
        'Dark',
        ].map((variant, idx) => (
            <div className="footer">
                <Card
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '100%' }}
                    className="mb-2"
                >   
                    <Card.Body>
                    <Card.Text>
                            <li>About The Team</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                            <li>List item</li>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        ))
    )
}

export default Footer;