import React from "react";
import Language from "./Language";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";

const Card = () => {
  console.log(data);
  return (
    <>
      <Container className="rounded-4 mt-4" style={{ background: "#f48b29" }}>
        <h1 className="text-center">Language</h1>
        <Row className="g-3">
          {data.map((lang, index) => {
            return (
              // Bu şekilde gönderirsek language de {img,name,options olarak alıyoruz}

              <Col sm={6} md={4} lg={3} key={index}>
                <Language {...lang}  />

                {/* Bu şekilde gönderirsek {lang} olarak alıyoruz
                    <Language lang={...lang}/> */}
              </Col>
            );
          })}
        </Row>

        <Language />
      </Container>
    </>
  );
};

export default Card;
