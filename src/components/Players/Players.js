import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';

import './Players.css';

const Players = (props) => {
      const players = props.player
      const { name, stats, t20_matches, salary, image } = props.player;
      const handleAddPlayers = props.handleAddPlayers;
      return (
            <div className="players">
                  <div>
                        <Card style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={image} />
                              <Card.Body>
                                    <Card.Title style={{color: "red",fontWeight: "bold"}}>{name}</Card.Title>
                                    <Card.Text>
                                          {stats}
                                          <br />T 20 Matches: {t20_matches}
                                          <br />Salary: {salary}
                                    </Card.Text>
                                    <Button variant="danger" onClick={() => {handleAddPlayers(players)}}><FontAwesomeIcon icon={faDollarSign} /> Buy this Player</Button>{' '}
                              </Card.Body>
                        </Card>
                  </div>
            </div>
      );
};

export default Players;