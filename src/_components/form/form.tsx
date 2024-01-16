"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@ui/input";
import { Button } from "@ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email({ message: "Invalid email address" }),
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
      <div>
        {errors.name && (
          <span className="text-red-400">{errors.name.message}</span>
        )}
        <Input {...register("name")} type="text" placeholder="Your name" />
      </div>

      <div>
        {errors.email && (
          <span className="text-red-400">{errors.email.message}</span>
        )}
        <Input {...register("email")} type="text" placeholder="Email" />
      </div>

      <Button disabled={isSubmitting} type="submit" variant="outline">
        Submit
      </Button>
    </form>
  );
};

export default Form;
