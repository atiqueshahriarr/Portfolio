import React from "react";
import { LuPhoneCall } from "react-icons/lu";
import TopTitle from "../../Component/TopTitle";

const Contact = () => {
  return (
    <div id="contact">
      <TopTitle
        titleText="Contact"
        iconItem={<LuPhoneCall />}></TopTitle>
      <div>
        <h5 className="mb-2 text-4xl lg:tet-5xl">
          Let's Work <span className="text-skyBlue">Together!</span>
        </h5>
        <p className="mb-4">Mailto: satique06@gmail.com</p>

        <form className="space-y-2">
          <input
            id="from_name"
            name="from_name"
            type="text"
            className="w-full border shadow-sm p-2 border-borderGray rounded-lg"
            placeholder="Enter your name"
            required
          />
          <input
            id="from_email"
            name="from_email"
            type="email"
            className="w-full border shadow-sm p-2 border-borderGray rounded-lg"
            placeholder="Enter your email"
            required
          />
          <textarea
            id="message"
            name="message"
            className="w-full border shadow-sm p-2 border-borderGray rounded-lg resize-none"
            rows="4"
            placeholder="Enter your message"
            required></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="inline-block  text-white py-2 px-4 rounded-lg text-sm  focus:outline-none bg-skyBlue  w-full">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
