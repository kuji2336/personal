import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

const Stack = ({ stack }) => {
  return (
    <Fade left duration={2000}>
      <Card className="shadow mt-4" style={{height:'inherit'}}>
        <CardBody>
          <div className="d-flex px-3 align-items-center">
            <img src={stack.logo.src} style={{ height: 100, width: 100, objectFit:'contain'}} />
            <div className="pl-4">
              <h5 className="text-info">{stack.name}</h5>
              {stack.details.length ? (
                <div>
                  {stack.details.map((el) => (
                    <Badge color="info" className="mr-1">
                      {el.name}
                    </Badge>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default Stack;
