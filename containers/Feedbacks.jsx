import { feedbacks, stackDetails } from "../portfolio";
import React from "react";
import {Container, Row } from "reactstrap";
import SwiperCore, {Autoplay} from 'swiper/core';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y} from "swiper";
import Stack from "../components/stackCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Feedbacks = () => {
  SwiperCore.use([Autoplay,Pagination,Navigation]);

  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
              <i className="ni ni-laptop text-info" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-info">Tech Stack</h4>
          </div>
        </div>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
		  breakpoints={{
			0: {
			  width: 0,
			  slidesPerView: 1,
			},
			768: {
			  width: 768,
			  slidesPerView: 2,
			},
			1200: {
			  width: 1200,
			  slidesPerView: 3,
			},
		  }}
          pagination={{ clickable: true }}
		  autoplay={{ delay: 3000 }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
			{stackDetails.map((stack)=>(
				<SwiperSlide style={{height:'100%'}}>
                 <Stack stack={stack}/>
				</SwiperSlide>
			))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Feedbacks;
