"use client";
import TestimonialCard from "@/components/cards/TestimonialCard";
import Slider from "@/components/Marquee/Slider";
import useAxiosPublic from "@/hooks/axiosHooks/useAxiosPublic";
import { Testimonial } from "@/types/testimonials";
import React, { useEffect, useState } from "react";
import { SwiperSlide } from "swiper/react";

const Testimony = () => {
  const axiosPublic = useAxiosPublic();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axiosPublic.get("/api/testimonials");
        setTestimonials(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchTestimonials();
  }, [axiosPublic]);

  return (
    <div>
      <div className="text-center">
        <h2 className="text-3xl text-secondary font-semibold">
          What Our Community Says
        </h2>
        <p className="text-secondary">Real stories from our coffee lovers.</p>
      </div>

      {/* testimonials  */}
      <Slider reverse={false}>
        {testimonials.map((testimony) => (
          <SwiperSlide key={testimony._id}>

            <TestimonialCard
              testimony={testimony}
            ></TestimonialCard>
          </SwiperSlide>
        ))}
      </Slider>
    </div>
  );
};

export default Testimony;
