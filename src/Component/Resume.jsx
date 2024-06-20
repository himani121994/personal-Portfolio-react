import React, { useState } from 'react';
import '../assets/css/resume.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img1 from '../assets/img/himaniphoto.jpg';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Button from 'react-bootstrap/Button';

const Resume = () => {
    const [activeSection, setActiveSection] = useState("About");

    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);

    const handleTagChange = (section) => {
        setActiveSection(section);
    };

    const renderSection = () => {
        switch (activeSection) {
            case "About":
                return (
                    <div className="section">
                        <h2 className="subsection-title">About Me</h2>
                        <div className='row'>
                            <div className='col-sm-1'></div>
                            <div className='col-md-4 contact-details-container'>
                                <div className="contact-img">
                                    <img src={img1} alt="" style={{ width: "400px", height: "400px", marginLeft: "20px", marginTop: "-10px", borderRadius: "8px" }} />
                                </div>
                                <div className="contact-details">
                                    <h5>Hellow EveryOne...</h5>
                                    <h4>Junior software Devloper</h4>
                                    <p className='detail-p'>I am available for freelance work. Connect with me via and call in to my account.</p>
                                    <p>Phone: +01234567890</p>
                                    <p>Email: <a href="mailto:admin@example.com">himanibhimte0808@gmail.com</a></p>
                                </div>
                            </div>
                            <div className='col-sm-1'></div>
                            <div className='col-sm-5'>
                                <div style={{display:"flex",margin:"20px"}}>
                                    <h1>My hobbies are</h1>
                                    <Card style={{ width: '18rem'}}>
                                        <ListGroup variant="flush" >
                                            <ListGroup.Item style={{backgroundColor:"#212428",color:"white"}}>Hobbies</ListGroup.Item>
                                            <ListGroup.Item>Explore Deffiate Cities</ListGroup.Item>
                                            <ListGroup.Item>Explore Nature</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>
                                {/* ======================== */}
                                <div style={{display:"flex",margin:"30px 20px"}}>
                                    <Card style={{ width: '18rem' }}>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item style={{backgroundColor:"#212428",color:"white" }}>Virtues</ListGroup.Item>
                                            <ListGroup.Item>Willpower</ListGroup.Item>
                                            <ListGroup.Item>Responsibility</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                    <h1>My virchers are</h1>
                                </div>
                                {/* ======================== */}
                                <div style={{display:"flex",margin:"30px 20px"}}>
                                    <h1>My hobbies are</h1>
                                    <Card style={{ width: '18rem' }}>
                                        <ListGroup variant="flush">
                                            <ListGroup.Item style={{backgroundColor:"#212428",color:"white"}}>XYZ</ListGroup.Item>
                                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </div>
                                {/* ======================== */}
                                <div style={{display:"flex",margin:"50px 20px 20px 20px"}}>
                                    <Button onClick={toggleShowA} className="mb-2">
                                        Toggle Toast <strong>with</strong> Animation
                                    </Button>
                                    <Toast style={{margin:"0px 20px"}} show={showA} onClose={toggleShowA}>
                                        <Toast.Header>
                                            <img
                                                src="holder.js/20x20?text=%20"
                                                className="rounded me-2"
                                                alt=""
                                            />
                                            <strong className="me-auto">tongle</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body>Woohoo, Please click to seen tongle</Toast.Body>
                                    </Toast>
                                </div>
                                {/* ======================== */}
                                
                            </div>
                            <div className='col-sm-1'></div>
                        </div>
                    </div>
                );
            case "Education":
                return (
                    <div className="section">
                        <h2 className="subsection-title">Education</h2>
                        <div className="resume-item">
                            <h3>Education Quality</h3>
                            <div className='row'>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px', backgroundColor: "black", color: "white" }}>
                                        <Card.Header style={{backgroundColor: "rgb(228,208,10,0.2)"}}>2024 - 2024</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Cybrom Technology PVT.LTD </Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px', backgroundColor: "black", color: "white" }}>
                                        <Card.Header style={{backgroundColor: "rgb(228,208,10,0.2)"}}>2014 - 2017</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Indira Gandhi Engineering Collage (1997 - 2001)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-1'></div>
                            </div>

                            <div className='row'>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px', backgroundColor: "black", color: "white" }}>
                                        <Card.Header style={{backgroundColor: "rgb(228,208,10,0.2)"}}>2007 - 2010</Card.Header>
                                        <Card.Body>
                                            <Card.Title>University of DVI (1997 - 2001)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px', backgroundColor: "black", color: "white" }}>
                                        <Card.Header style={{backgroundColor: "rgb(228,208,10,0.2)"}}>2007 - 2010</Card.Header>
                                        <Card.Body>
                                            <Card.Title>University of XYZ (1997 - 2001)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text >
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-1'></div>
                            </div>

                        </div>


                    </div>
                );
            case "Experience":
                return (
                    <div className="section">
                        <h2 className="subsection-title">Experience</h2>
                        <div className="resume-item">
                            <div className='row'>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px',backgroundColor: "#343a40", color: "white"}}>
                                        <Card.Header style={{backgroundColor:"black"}}>20022 - 2023</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Mindpixle pvt.</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px',backgroundColor: "#343a40", color: "white" }}>
                                        <Card.Header style={{backgroundColor:"black"}}>20021 - 2022</Card.Header>
                                        <Card.Body>
                                            <Card.Title>RVNL(Raiway Vikas Pvt.)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-1'></div>
                            </div>

                            <div className='row'>
                                <div className='col-sm-1'></div>
                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px',backgroundColor: "#343a40", color: "white" }}>
                                        <Card.Header style={{backgroundColor:"black"}}>ABCD - ABCD</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Company of XYZ (1997 - 2001)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>

                                <div className='col-sm-5'>
                                    <Card border="light" style={{ width: '600px',backgroundColor: "#343a40", color: "white" }}>
                                        <Card.Header style={{backgroundColor:"black"}}>ABCD - ABCD</Card.Header>
                                        <Card.Body>
                                            <Card.Title>Company of XYZ (1997 - 2001)</Card.Title>
                                            <hr color='black' />
                                            <Card.Text>
                                                The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className='col-sm-1'></div>
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="resume-container">
            <h1 className="section-title">My Resume</h1>

            <div className="row" style={{ justifyContent: "center" }}>
                <button className="col-sm-3 tage-button" onClick={() => handleTagChange("About")}>About Me</button>
                <button className="col-sm-3 tage-button" onClick={() => handleTagChange("Education")}>Education</button>
                <button className="col-sm-3 tage-button" onClick={() => handleTagChange("Experience")}>Experience</button>
            </div>

            {renderSection()}
            <hr color='black' size="2" />
        </div>
    );
};

export default Resume;
