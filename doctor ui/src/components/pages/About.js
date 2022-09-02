import React from "react";

import {Row,Col,Image,Button, Card} from "react-bootstrap";

function About(){
    return(
        <div>
            <section className="section  border-bottm">
                <div className="conainer">
                   
                    
                    <div className="underline"></div>
                    <p>
                    
                    </p>

                </div>
                <container>
                    <Row className="px-4 my-5">
                        <Col sm={7}>
                            <Image src="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84791.jpg?w=640&t=st=1660126083~exp=1660126683~hmac=873eff6a765a3fa077fadcdfea9bb529c5f78ed9da85316593bc79b47bcef064/900/400" fluid />
                        </Col>
                        <Col sm={5}>
                            <h1 class="font-weigh-light">Aapka health partner</h1>
                            <p class="mt-4">
                            We are a technology-driven online solution for all your medical needs. Our team of medical experts will guide you every step of the way. Whether it's finding the right doctor and hospital, arranging doctor's appointments, comparing procedure costs, or solving your health problems. We strive continuously

                            Improvement and development of new services to strengthen and

                            Educate patients and their families.

                            to ensure that the right healthcare decisions are made.
                            </p>
                            <Button variant="outline-primary"> Know more</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Card className="text-center bg-secondary text-white my-4 py-">
                            <Card.Body>Your home for health</Card.Body>
                        </Card>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{width:"18rem"}}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/vaccine-development-concept-illustration_114360-2233.jpg?w=740&t=st=1660126761~exp=1660127361~hmac=001a8eb9913a13330e0cef45edf8593ce779bbbd90a75293c3e3ffc321b758b8" />
                                <Card.Body>
                                    <Card.Title>Collabration</Card.Title>
                                    <Card.Text>
                                        We work together to achieve our mission with genuine respect for each member of team.
                                    </Card.Text>
                                    <Card.Footer>
                                    <small className="text-muted">Last update 5 mins ago</small>
                                </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width:"18rem"}}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-photo/team-doctors-meeting_107420-84805.jpg?w=640&t=st=1660126700~exp=1660127300~hmac=7d7abf5f4fda525dcf0723efce5d4e9a78ee71a706177281772bc981138bceb8" />
                                <Card.Body>
                                    <Card.Title>Empathy</Card.Title>
                                    <Card.Text>
                                        We are committed to being the customer's in lifelong pursuit of better health & well-being. 
                                    </Card.Text>
                                    <Card.Footer>
                                    <small className="text-muted">Last update 5 mins ago</small>
                                </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width:"18rem"}}>
                                <Card.Img variant="top" src="https://img.freepik.com/free-vector/vaccine-development-concept-illustration_114360-3935.jpg?t=st=1660135163~exp=1660135763~hmac=d66ed2e3d14455f1b0cf0dbd4d49738e464276dcb1c6388fbd55d073b5e9d0fb" />
                                <Card.Body>
                                    <Card.Title>Culture</Card.Title>
                                    <Card.Text>
                                        We create a high impact, supportive culture to empower and encourage 
                                    </Card.Text>
                                    
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last update 5 mins ago</small>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </container>

            </section>


        </div>
    )
}


export default About;