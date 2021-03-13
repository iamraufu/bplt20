import React from 'react';
import logo from '../../logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './NavBar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = () => {
      return (
            <div className="sticky-top custom-nav">
                  <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="mr-auto">
                              <NavDropdown title="Matches" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#results">Results</NavDropdown.Item>
                              </NavDropdown>
                              <NavDropdown title="Videos" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#video-hub">Video Hub</NavDropdown.Item>
                                          <NavDropdown.Item href="#highlights">Highlights</NavDropdown.Item>
                                          <NavDropdown.Item href="#magic-moments">Magic Moments</NavDropdown.Item>
                                          <NavDropdown.Item href="#interviews">Interviews</NavDropdown.Item>
                                          <NavDropdown.Item href="#press-conference">Press Conference</NavDropdown.Item>
                                          <NavDropdown.Item href="#all-videoes">All Videos</NavDropdown.Item>
                              </NavDropdown>
                                    <Nav.Link href="#points-table">Points Table</Nav.Link>
                                    <NavDropdown title="Stats" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#by-season">By Season</NavDropdown.Item>
                                          <NavDropdown.Item href="#all-season">All Time</NavDropdown.Item>
                              </NavDropdown>
                                    <Nav.Link href="#actions" className="active auction">Auction</Nav.Link>
                                    <NavDropdown title="Teams" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#team-1">Team 1</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-2">Team 2</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-3">Team 3</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-4">Team 4</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-5">Team 5</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-6">Team 6</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-7">Team 7</NavDropdown.Item>
                                          <NavDropdown.Item href="#team-8">Team 8</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="News" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#all-news">All News</NavDropdown.Item>
                                          <NavDropdown.Item href="#announcements">Announcements</NavDropdown.Item>
                                          <NavDropdown.Item href="#match-reports">Match Reports</NavDropdown.Item>
                                          <NavDropdown.Item href="#features-and-interviews">Features and Interviews</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="More" id="collasible-nav-dropdown">
                                          <NavDropdown.Item href="#about">About</NavDropdown.Item>
                                          <NavDropdown.Item href="#fantasy">Fantasy</NavDropdown.Item>
                                          <NavDropdown.Item href="#mobile-products">Mobile Products</NavDropdown.Item>
                                          <NavDropdown.Item href="#photos">Photos</NavDropdown.Item>
                                          <NavDropdown.Item href="#venues">Venues</NavDropdown.Item>
                                    </NavDropdown>
                              </Nav>
                              <Nav>
                                    <Nav.Link href="#search"><FontAwesomeIcon icon={faSearch} /> Search</Nav.Link>
                                    <Nav.Link eventKey={2} href="#fan-polls"> Fan Polls </Nav.Link>
                              </Nav>
                        </Navbar.Collapse>
                  </Navbar>
            </div>
      );
};

export default NavBar;