"use client";

import React, { useState } from "react";
import MainBtn from "../buttons/MainBtn";
import { ToastContainer, toast } from "react-toastify";

const ArtistForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    socialLinks: "",
    portfolioLink: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const {
      firstName,
      lastName,
      email,
      contact,
      socialLinks,
      portfolioLink,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !contact ||
      !socialLinks
    ) {
      toast.error("Please fill all required fields.");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/submitArtistDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success("Application submitted successfully!", {
          position: "top-center",
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          contact: "",
          socialLinks: "",
          portfolioLink: "",
        });
      } else {
        toast.error(data.error || "Submission failed.");
      }
    } catch (err) {
      toast.error("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full pt-20 px-[4vw]">
      <ToastContainer />

      <h2 className="text-3xl lg:text-5xl capitalize">
        Fill the form below to participate
      </h2>

      <div className="flex flex-col lg:flex-row w-full mt-10 gap-12">
        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="text-start space-y-10 lg:space-y-14 w-full lg:w-1/2 grid gap-x-10 grid-cols-1 md:grid-cols-2"
        >
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
              *
            </span>
          </div>

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
              *
            </span>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
              *
            </span>
          </div>

          {/* Contact */}
          <div className="relative">
            <input
              type="tel"
              name="contact"
              placeholder="Contact Number"
              value={formData.contact}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
              *
            </span>
          </div>

          {/* Social Links */}
          <div className="col-span-1 md:col-span-2 relative">
            <input
              type="text"
              name="socialLinks"
              placeholder="Instagram, LinkedIn, Pinterest, etc."
              value={formData.socialLinks}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />
            <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
              *
            </span>
          </div>

          {/* Portfolio Link */}
          <div className="col-span-1 md:col-span-2 relative">
            <input
              type="url"
              name="portfolioLink"
              placeholder="Link to your portfolio (public access enabled)"
              value={formData.portfolioLink}
              onChange={handleChange}
              className="border-b w-full text-base lg:text-lg outline-none"
            />

            <div className="mt-3 text-sm ">
              <p>• The link must be accessible for public viewing.</p>
              <p>
                • Accepted platforms include Google Drive, OneDrive, Dropbox,
                or similar services.
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-1 md:col-span-2">
            <MainBtn txt={loading ? "Submitting..." : "Submit"} />
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-end">
          <img
            className="lg:w-[85%]"
            src="/images/canvas_and_creation/artist_form_img.avif"
            alt="Artist Form"
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistForm;
