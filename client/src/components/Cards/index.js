import React from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Phicon from "../../images/phicon.png";
import "./style.css"



function Cards() {
  return(
    <div className="container">
        <CardDeck>
            <Card>
                <Card.Img id="image" variant="right" src={Phicon} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Link goes here</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="image" variant="mid" src={Phicon} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Link goes here</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img id="image" variant="end" src={Phicon} />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Link goes here</small>
                </Card.Footer>
            </Card>
        </CardDeck>
    </div>
    
  )
}

export default Cards