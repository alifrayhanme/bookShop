import React, { useEffect } from "react";
import { Link } from "react-router";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="mt-[82px] md:mt-[98px] pt-28 pb-16 px-4 sm:px-8 lg:px-20 bg-white text-green-950">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center items-center text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Welcome to
          <Link to="/" className="text-2xl font-bold text-green-600">
            <img className="w-40" src="StoryNest.png" alt="StoryNest" />
          </Link>
        </div>
        <p className="text-lg sm:text-xl text-green-800 leading-relaxed">
          StoryNest is your cozy corner of the internet dedicated to book
          lovers. Whether you're a curious reader, a passionate collector, or
          just someone looking for your next literary adventure – you've found
          the right place.
        </p>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {/* Mission */}
        <div className="bg-green-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            📚 Our Mission
          </h2>
          <p className="text-green-800 leading-relaxed">
            At StoryNest, we aim to build a community of readers and help
            everyone discover the power of stories. We believe books can
            transform lives, spark imagination, and connect people across time
            and cultures.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-green-50 rounded-2xl shadow-sm p-6 hover:shadow-md transition">
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            🌟 What We Offer
          </h2>
          <ul className="list-disc pl-5 text-green-800 leading-loose">
            <li>Handpicked collection of classic and contemporary books</li>
            <li>Easy-to-navigate online store experience</li>
            <li>Reader reviews, recommendations & ratings</li>
            <li>Regular updates and discounts for loyal readers</li>
          </ul>
        </div>
      </div>

      {/* Contact Info or Team */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-green-700 mb-2">
          🤝 Let’s Connect
        </h2>
        <p className="text-green-800">
          Have questions, suggestions, or just want to say hello?
          <br />
          Email us at{" "}
          <a
            href="mailto:support@storynest.com"
            className="text-green-600 underline"
          >
            support@storynest.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default About;
