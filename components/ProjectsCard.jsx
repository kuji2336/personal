import React from "react";

import { Card, CardBody, Col, Button } from "reactstrap";

import { Fade } from "react-reveal";

const ProjectsCard = ({ data }) => {
  return (
    <Col lg="6">
      <Fade bottom duration={2000}>
        <Card className="shadow-lg--hover shadow mt-4">
          <CardBody>
            <div
              style={{
				height:300,
				width:'100%',
				backgroundPosition:'center',
				backgroundSize:'contain',
				backgroundRepeatX: 'cover',
                backgroundImage:
                  "url(" + data.bgCover + ")",
              }}
            ></div>
            <div className="d-flex pt-3">
              <div>
                <h3>{data.name}</h3>
                <p className="description mt-3">{data.desc}</p>
                {data.link ? (
                  <Button
                    className="btn-icon"
                    color="success"
                    href={data.link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">Demo</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
        </Card>
      </Fade>
    </Col>
  );
};

export default ProjectsCard;
