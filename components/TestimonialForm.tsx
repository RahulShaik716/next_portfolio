"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const validationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  role: z.string().min(5, "Role is required"),
  company: z.string().min(3, "Company is required"),
  content: z.string().min(3, "Please drop a valid testimonial"),
});

type FormData = z.infer<typeof validationSchema>;
export default function TestimonialForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
  });

  const [modal, showModal] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = async (formData: FormData) => {
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
        // alert("Thank you for your recommendation");
        showModal(true);
        reset();
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
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="h2 font-bold text-2xl text-center">Leave a testimonial</h2>
      <p className="text-center text-slate-500 max-w-[500px]">
        {`Your feedback is greatly appreciated. Share your experience working with me!`}
      </p>
      <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          {...register("name")}
          className="border border-slate-300  p-2 rounded-md bg-inherit"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="role">Role</label>
        <input
          id="role"
          {...register("role")}
          className="border border-slate-300 p-2 rounded-md bg-inherit"
        />
        {errors.role && (
          <p className="text-red-500 text-sm">{errors.role.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          {...register("company")}
          className="border border-slate-300  p-2 rounded-md bg-inherit"
        />
        {errors.company && (
          <p className="text-red-500 text-sm">{errors.company.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="content">Testimonial</label>
        <textarea
          id="content"
          {...register("content")}
          placeholder="Share your experience working with me..."
          className="border border-slate-300  p-2 rounded-md bg-inherit"
        />
        {errors.content && (
          <p className="text-red-500 text-sm">{errors.content.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="text-center bg-foreground text-background py-2 rounded-md cursor-pointer"
      >
        Submit Testimonial
      </button>
      {modal && (
        <SuccessModal
          message="Thank you for your recommedation"
          showModal={showModal}
        />
      )}
    </form>
  );
}
