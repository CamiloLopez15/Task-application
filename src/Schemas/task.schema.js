import { z } from "zod";

export const createSchema = z.object({
  tittle: z.string({
    required_error: "Tittle is required",
  }),
  description: z
    .string({
      required_error: "Description is required",
    }),
  date: z
    .string({
      required_error: "Date is required",
    })
    .datetime()
    .optional(),
});
