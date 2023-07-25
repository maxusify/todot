import { z } from "zod";

import { FORM_DESC_LIMIT, FORM_TITLE_LIMIT } from "@/config/app";

export const taskFormSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title must contain at least 2 charcters." })
    .max(FORM_TITLE_LIMIT, {
      message: "Title must contain a maximum of 150 characters.",
    }),
  description: z.optional(z.string().max(FORM_DESC_LIMIT)),
});

export type FormTask = z.infer<typeof taskFormSchema>;
