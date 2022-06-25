import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import {  Container, Row, Col } from "reactstrap";
import bobImage from '../public/img/icons/common/bob.png'

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	});
	return (
		<main>
			<div className="position-relative">
				<section className="section section-shaped">
					<div className="shape shape-style-1 bg-gradient-info">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row style={{alignItems:'center'}}>
								<Col lg="6">
									<h1 className="display-3 text-white custom-heading">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white custom-pre">
										{greetings.description}
									</p>
									{/* <div className="btn-wrapper my-4">
										<Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
										</Button>
									</div> */}
								</Col>
								<Col lg="6">
								
									 <img src={`${process.env.IMAGE_BASE}/${bobImage.src}`} style={{width:'100%'}} />
								</Col>
							</Row>
						</div>
					</Container>
				</section>
				{/* 1st Hero Variation */}
			</div>
		</main>
	);
};

export default Greetings;
