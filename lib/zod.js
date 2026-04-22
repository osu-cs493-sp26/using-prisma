import * as z from "zod"

export const Lodging = z.object({
    name: z.string(),
    description: z.string(),
    street: z.string(),
    city: z.string(),
    state: z.string().length(2).regex(/^[A-Za-z]+$/).toUpperCase(),
    zip: z.string().length(5).regex(/^[0-9]+$/),
    price: z.number().gt(0)
})
