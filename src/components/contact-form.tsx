import Button from "./button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const contactFormSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().required("Message is required"),
});

type Data = yup.InferType<typeof contactFormSchema>;

const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="text"
      className="border border-transparent text-sm font-normal py-2.5 px-3 rounded-2xl bg-bg-input placeholder:text-input-placeholder focus-within:border-input-focus-border aria-invalid:border-red-500"
      {...props}
    />
  );
};

const TextArea = (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className="border border-transparent text-sm font-normal py-2.5 px-3 rounded-2xl bg-bg-input placeholder:text-input-placeholder focus-within:border-input-focus-border aria-invalid:border-red-500 resize-none h-24"
      {...props}
    />
  );
};

const Label = ({
  children,
  htmlFor,
}: {
  children: React.ReactNode;
  htmlFor: string;
}) => {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-label">
      {children}
    </label>
  );
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Data>({
    resolver: yupResolver(contactFormSchema),
  });

  return (
    <section className="max-w-md:px-8 mt-8" id="contact">
      <div className="bg-car-bg border border-card-border shadow-card rounded-xl px-6 py-10">
        <h3 className="font-medium text-xl text-white">Fill out the form</h3>
        <p className="text-sm text-[rgb(204,204,204)] font-normal mt-3 rounded-xl">
          After you submit the form, our team will reach out to you as quickly
          as possible.
        </p>
        <form
          className="contact-form space-y-3 mt-4"
          onSubmit={handleSubmit(() => console.log("submitted"))}
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              placeholder="John Doe"
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              placeholder="johndoe@email.com"
              {...register("email")}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <TextArea
              placeholder="Type your message here"
              aria-invalid={errors.message ? "true" : "false"}
              {...register("message")}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <Button size="medium" className="w-full mt-3" buttonType="submit">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
