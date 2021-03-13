import React from 'react';
import { Carousel } from 'react-bootstrap';

const Header = () => {
      return (
            <div className="carousel">
                  <Carousel>
                        <Carousel.Item interval={2000}>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/nBgdDTY/2017.jpg"
                                          alt="First slide"
                                    />
                              </div>
                        </Carousel.Item>
                        <Carousel.Item>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/RbDcCvP/top-image.jpg"
                                          alt="Second slide"
                                    />
                              </div>

                        </Carousel.Item>
                        <Carousel.Item>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/K57trYh/LONDON-ENGLAND-JULY-05-A-Bangladesh-fan-waves-a-flag-in-the-crowd-during-the-Group-Stage-match-of-th.jpg"
                                          alt="Third slide"
                                    />
                              </div>

                        </Carousel.Item>
                        <Carousel.Item>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/0DXrb2j/LONDON-ENGLAND-MAY-23-L-R-Kane-Williamson-of-New-Zealand-Virat-Kohli-of-India-Faf-Du-Plessis-of-Sout.jpg"
                                          alt="Third slide"
                                    />
                              </div>

                        </Carousel.Item>
                        <Carousel.Item>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/cYJKjzC/2018.jpg"
                                          alt="Third slide"
                                    />
                              </div>

                        </Carousel.Item>
                        <Carousel.Item>
                              <div className="container">
                                    <img
                                          className="d-block w-100 img-fluid"
                                          src="https://i.ibb.co/PCQpN0Y/LONDON-ENGLAND-JULY-05-Bangladesh-fans-react-in-the-crowd-during-the-Group-Stage-match-of-the-ICC-Cr.jpg"
                                          alt="Third slide"
                                    />
                              </div>

                        </Carousel.Item>
                  </Carousel>
            </div>
      );
};

export default Header;