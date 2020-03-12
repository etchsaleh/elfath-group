import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default function CSR() {

    useEffect(() => {
        document.title += " - CSR";
    }, []);

    return(
        <>
        <Container className="container-style">
            <Row>
                <Col sm={12}>
                    <h1>Corporate Social Responsibility</h1>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col sm={12}>
                    <p>
                        In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.
                        Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)
                    </p>
                </Col>
            </Row>
            <Row>
                <Col sm={6} lg={3}><div style={{textAlign:"center", backgroundColor:"grey", height:"100%"}}>1</div></Col>      
                <Col sm={6} lg={3}><div style={{textAlign:"center", backgroundColor:"yellow", height:"100%"}}>2</div></Col>
                <Col sm={6} lg={3}><div style={{textAlign:"center", backgroundColor:"navy", height:"100%"}}>3</div></Col>
                <Col sm={6} lg={3}><div style={{textAlign:"center", backgroundColor:"cyan", height:"100%"}}>4</div></Col>  
            </Row>
            <br />
            <Row>
                <Col sm={12}>
                    <h2>Subheading 1</h2>
                    <p>
                        In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.
                        Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={12}>
                    <h3>Subheading 2</h3>
                    <p>
                        In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.
                        Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={12}>
                    <h3>Subheading 3</h3>
                    <p>
                        In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.
                        Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)
                    </p>
                </Col>
            </Row>
            <br />
            <Row>
                <Col sm={12}>
                    <h3>Subheading 4</h3>
                    <p>
                        In this example, we have created a header, two columns/boxes and a footer. On smaller screens, the columns will stack on top of each other.
                        Resize the browser window to see the responsive effect (you will learn more about this in our next chapter - HTML Responsive.)
                    </p>
                </Col>
            </Row>
        </Container>
        </>
    );
}