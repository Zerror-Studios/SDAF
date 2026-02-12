"use client";

import React, { useState } from "react";
import MainBtn from "../buttons/MainBtn";
import { ToastContainer, toast } from "react-toastify";
import { RiLink, RiLinksLine } from "@remixicon/react";

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
      !contact
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
    <div className="w-full pt-10 center ">
      <ToastContainer />


      <div className="  w-full p-5  lg:w-[60%] md:w-[92%] lg:p-20 text-center space-y-12 text-[#020202] border bg-[#ECE7D9]">
        <h2 className="text-3xl lg:text-5xl capitalize">
          Fill the form below to participate
        </h2>

        <form
          onSubmit={handleSubmit}
          className="text-start space-y-10 lg:space-y-14 w-full grid gap-x-10 grid-cols-1 md:grid-cols-2"
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
              <RiLink size={20} />
            </span>
          </div>

          {/* Portfolio Link */}
          <div className="col-span-1 md:col-span-2 relative">
            <div className="relative">

              <input
                type="url"
                name="portfolioLink"
                placeholder="Link to your portfolio"
                value={formData.portfolioLink}
                onChange={handleChange}
                className="border-b w-full text-base lg:text-lg outline-none"
              />
              <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#EB8529] text-2xl">
                <RiLink size={20} />
              </span>
            </div>
            <div className="mt-3 pl-3.5  lg:w-[90%] text-sm">
              <ul className="list-disc  space-y-1">
                <li>
                  Add all your works in a single folder on Google Drive, OneDrive, Dropbox, or any similar platform and share the folder link.
                </li>
                <li>
                  Make sure the folder link is set to public so anyone can view it.
                </li>
                <li>
                  If you have multiple social media handles, you can include their links inside the same folder.
                </li>
              </ul>
            </div>
          </div>

          {/* Submit Button */}
          <div className=" w-full center col-span-1 md:col-span-2">
            <MainBtn txt={loading ? "Submitting..." : "Submit"} />
          </div>
        </form>
      </div>


    </div>
  );
};

export default ArtistForm;
