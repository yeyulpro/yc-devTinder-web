import * as z from "zod";
 
export const loginSchema = z.object({
   emailId: z.string().email(),
  
  password:z.string().min(8)
}).required();