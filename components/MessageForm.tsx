"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import SuccessModal from "./SuccessModal";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the Zod validation schema
const validationSchema = z.object({
  name: z.string().nullable(),
  email: z.string().email("Invalid Email Address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
type FormData = z.infer<typeof validationSchema>;
export default function MessageForm() {
  // React Hook Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [modal, showModal] = useState(false);

  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
    try {
      // Insert lead
      const response = await fetch("/api/Leads/insertlead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();

      // Send email
      const email_response = await fetch("/api/SendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const email_result = await email_response.json();

      if (result.result && email_result.result) {
        showModal(true);
        reset(); // Reset the form after successful submission
      } else {
        alert("Thank you for your intent. I messed up something");
      }
    } catch (error) {
      alert("Something went wrong. Appreciate your intent: " + error);
    }
  };

  return (
    <form
      className="flex flex-col gap-3 border border-slate-300 max-w-3xl mx-auto p-6 rounded-md bg-opacity-50 background-blur-md shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="font-bold text-2xl text-center">Get in touch</h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`I'd love to hear from you! Send me a message and I'll get back to
        you as soon as possible`}
      </p>
      {/* Name Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name")}
          className={`border p-2 rounded-md bg-inherit ${
            errors.name ? "border-red-500" : "border-slate-300"
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      {/* Email Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`border p-2 rounded-md bg-inherit ${
            errors.email ? "border-red-500" : "border-slate-300"
          }`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      {/* Message Input */}
      <div className="flex flex-col gap-1">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          {...register("message")}
          className={`border p-2 rounded-md bg-inherit ${
            errors.message ? "border-red-500" : "border-slate-300"
          }`}
          placeholder="Enter your message"
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="text-center bg-foreground text-background py-2 rounded-md cursor-pointer"
      >
        Send Message
      </button>
      {/* Success Modal */}
      {modal && (
        <SuccessModal
          message="Thank you for reaching out to me"
          showModal={showModal}
        />
      )}
    </form>
  );
}
