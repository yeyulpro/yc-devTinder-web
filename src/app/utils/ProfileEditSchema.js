import * as z from "zod";

export const profileEditSchema = z
  .object({
    first_name: z.string({ message: "Enter your first name." }),
    last_name: z.string(),
    age: z.coerce
      .number({ message: "Only number is allowed" })
      .gt(19, { message: "You must be at least over 19 years old." })
      .positive({ message: "You should enter the positive number." }),
    gender: z.enum(["male", "female", "others"], { 
  errorMap: () => ({ message: "Choose your gender from options." }) 
}),
    about: z.string({ message: "Introduce yourself." }),
    skills: z.string({ message: "Please use colon(,) between skills." }),
    photoUrl: z.url({ message: "Please enter a valid URL." }),
  })
  .required();
