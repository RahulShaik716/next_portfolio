"use client";

import { useState } from "react";

export default function MessageForm() {
  const initialFormData = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialFormData);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/Leads/insertlead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      const email_response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const email_result = await email_response.json();
      console.log(result);
      if (result.result && email_result.result) {
        alert("Thank you for your reaching out to me ");
        setFormData(initialFormData);
      } else alert("Thank you for your intent. I messed up something");
    } catch (error) {
      alert("Something went wrong. Appreciate your intent" + error);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 border border-slate-300  max-w-3xl mx-auto p-6 rounded-md
    bg-opacity-50 background-blur-md shadow-md 
    "
    >
      <h2 className="h2 font-bold text-2xl text-center"> Get in touch </h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`I'd love to hear from you! Send me a message and I'll get back to
          you as soon as possible`}
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="border border-slate-300  py-2 rounded-md bg-inherit"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          name="email"
          className="border border-slate-300 py-2 rounded-md bg-inherit"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          className="border border-slate-300 py-2 rounded-md bg-inherit"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <input
        type="sumbit"
        className="text-center bg-foreground text-background py-2 rounded-md cursor-pointer"
        value="Send Message"
        onClick={handleSubmit}
      />
    </form>
  );
}
