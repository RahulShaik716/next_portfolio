"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TestimonialForm() {
  const initialFormData = {
    name: "",
    role: "",
    company: "",
    content: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const router = useRouter();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/insertTestimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      if (result.result) {
        alert("Thank you for your recommendation");
        setFormData(initialFormData);
        router.refresh();
      } else alert("Thank you for your intent. I messed up something");
    } catch (error) {
      alert("Something went wrong. Appreciate your intent" + error);
    }
  };
  return (
    <form
      className="flex flex-col gap-3 border border-slate-300 max-w-3xl mx-auto p-6 rounded-md
      bg-opacity-50 background-blur-md shadow-md
    "
    >
      <h2 className="h2 font-bold text-2xl text-center">Leave a testimonial</h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`Your feedback is greatly appreciated. Share your experience working with me!`}
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          className="border border-slate-300  py-2 rounded-md bg-inherit"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="role">Role</label>
        <input
          name="role"
          className="border border-slate-300 py-2 rounded-md bg-inherit"
          onChange={handleChange}
          value={formData.role}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="company">Company</label>
        <input
          name="company"
          className="border border-slate-300  py-2 rounded-md bg-inherit"
          onChange={handleChange}
          value={formData.company}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="content">Testimonial</label>
        <textarea
          name="content"
          placeholder="Share your experience working with me..."
          className="border border-slate-300  py-2 rounded-md bg-inherit"
          onChange={handleChange}
          value={formData.content}
          required
        />
      </div>
      <input
        type="sumbit"
        className="text-center bg-foreground text-background py-2 rounded-md cursor-pointer"
        value="Submit Testimonial"
        onClick={handleSubmit}
      />
    </form>
  );
}
