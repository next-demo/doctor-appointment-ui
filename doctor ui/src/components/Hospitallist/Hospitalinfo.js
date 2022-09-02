import React from "react";
import { Row, Col, Image, Button, Card } from "react-bootstrap";

function Hospitalinfo() {
  return (
    <div>
      <section className="py-1 bg-success"></section>
      <section className="section  border-bottm">
        <container>
          <Row className="px-4 my-5">
            <Col sm={3}>
              <Image
                src="https://t3.ftcdn.net/jpg/02/11/15/66/360_F_211156620_CeBr5etdTNXLb231sFcQ8M9YD1OY5IW8.jpg"
                fluid
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">Max Mulit Speciality center</h1>
              <p class="mt-4">
              <h6>Mulit-Speciality Hospital</h6>
                
                New Delhi<br></br>
                10 Beds , 145 Doctors <br />
                <br></br>
                Wheelchair accessibiliy available<br/>
                <br />
                <h6>Timings</h6>
                
                <hr />
                Mon - Sat 09:00 AM - 08:00 PM
                <br />
                Sun 09:00 AM - 01:00 PM
                <br />
              </p>
              <hr />
            </Col>

            <Col sm={4}>
              <h3 class="font-weigh-light">Get the free Practo App</h3>
              <hr />

              <Row>
                <Col md={4}>
                  <input placeholder="Enter mobile number" />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>{``}</Col>
              </Row>
              <br />

              <Row>
                <Col>
                  <Button variant="outline-primary"> Get link</Button>
                </Col>
                {/* <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col> */}
                {/* <Col>3 of 3</Col> */}
              </Row>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col sm={3}>
              <Image
                src="https://seeklogo.com/images/H/hospital-clinic-plus-logo-7916383C7A-seeklogo.com.png"
                fluid
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">SCP International hospital</h1>
              <p class="mt-4">
                Kailash marg , Jaipur
                <br />
                <h6>Multi-Speciality Hospital</h6>
                50 Beds <br />
                17 Doctors
                <br />
                Wheelchair accessibiliy available
                <br />
                <br />
                <h6>Timings</h6>
            
                <hr />
                Mon - Sat 09:00 AM - 08:00 PM
                <br />
                Sun 09:00 AM - 01:00 PM
                <br />
              </p>
              <hr />
              {/* <Button variant="outline-primary"> Know more</Button> */}
            </Col>
            <Col sm={4}>
              <h3 class="font-weigh-light">Get the free Practo App</h3>
              <hr />

              <Row>
                <Col md={4}>
                  <input placeholder="Enter mobile number" />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>{``}</Col>
              </Row>
              <br />

              <Row>
                <Col>
                  <Button variant="outline-primary"> Get link</Button>
                </Col>
                {/* <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col> */}
                {/* <Col>3 of 3</Col> */}
              </Row>
            </Col>
          </Row>

          {/* <Row>
                        <Card className="text-center bg-secondary text-white my-4 py-0">
                            <Card.Body>Your home for health</Card.Body>
                        </Card>
                    </Row> */}

          <Row className="px-4 my-5">
            <Col sm={3}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRmzNy4avDq4feZSr7f4aFx4FfwVqxKNGE8FedoyDqgQhWAVE2T3OIE4oGRDa_LzIfhWM&usqp=CAU"
                fluid
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">Kesar Hospital</h1>
              <p class="mt-4">
                M.K. road
                <br />
                <h6>Mulit-Speciality Hospital</h6>
                20 Beds, 6 Doctors <br />
                <br />
                <h6>Timings</h6>
                
                <hr />
                Mon - Sat 09:00 AM - 08:00 PM
                <br />
                Sun 09:00 AM - 01:00 PM
                <br />
              </p>
              <hr />
              
            </Col>
            <Col sm={4}>
              <h1 class="font-weigh-light">Get the free Practo App</h1>
              <hr />

              <Row>
                <Col md={4}>
                  <input placeholder="Enter mobile number" />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>{``}</Col>
              </Row>
              <br />

              <Row>
                <Col>
                  <Button variant="outline-primary"> Get link</Button>
                </Col>
                {/* <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col> */}
                {/* <Col>3 of 3</Col> */}
              </Row>
            </Col>
          </Row>
          <Row className="px-4 my-5">
            <Col sm={3}>
              <Image
                src="https://us.123rf.com/450wm/mantinov/mantinov2004/mantinov200400007/143789285-help-for-health-icon-logo-vector-graphic-design-helping-hands-inside-medical-cross-sign-.jpg?ver=6"
                fluid
              />
            </Col>
            <Col sm={5}>
              <h1 class="font-weigh-light">Global Rainbow hospitals</h1>
              <p class="mt-4">
                Sikandra road , Agra
                <br />
                <h6>Mulit-Speciality Hospital</h6><br></br>
                Wheelchair accessibility available<br/>

                110 Beds, 10 Doctors <br />
                <br />
                <h6>Timings</h6>
                
                <hr />
                Mon - Sat 09:00 AM - 08:00 PM
                <br />
                Sun 09:00 AM - 01:00 PM
                <br />
              </p>
              <hr />
              
            </Col>
            <Col sm={4}>
              <h1 class="font-weigh-light">Get the free Practo App</h1>
              <hr />

              <Row>
                <Col md={4}>
                  <input placeholder="Enter mobile number" />
                </Col>
                <Col md={{ span: 4, offset: 4 }}>{``}</Col>
              </Row>
              <br />

              <Row>
                <Col>
                  <Button variant="outline-primary"> Get link</Button>
                </Col>
                {/* <Col xs={6}><Button variant="outline-primary"> Tomorrow</Button></Col> */}
                {/* <Col>3 of 3</Col> */}
              </Row>
            </Col>
          </Row>

          <Row>
            <Card className="text-center bg-success text-white my-4 py-0">
              <Card.Body>Your home for health</Card.Body>
            </Card>
          </Row>
        </container>
      </section>
    </div>
  );
}

export default Hospitalinfo;