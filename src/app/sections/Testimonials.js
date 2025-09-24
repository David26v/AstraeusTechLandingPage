import React from "react";
import {
  Heart,
  Star,
} from "lucide-react";


const Testimonials = (props) => {

  const { testimonials, activeTestimonial } = props;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
          <Heart className="w-5 h-5 text-white" />
          <span className="text-sm font-semibold text-white">Client Love</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          What Our  Clients Say
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Don't just take our word for it. Here's what businesses across the
          Philippines are saying about us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
              activeTestimonial === index ? "ring-4 ring-yellow-400" : ""
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{testimonial.avatar}</div>
              <div>
                <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.position}</p>
                <p className="text-xs text-gray-500">{testimonial.company}</p>
              </div>
            </div>
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed italic">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveTestimonial(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeTestimonial === index ? "w-8 bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
