import { z } from 'zod'

const create = z.object({
  body: z.object({
    name: z.string({
      required_error: 'name is required',
    }),
    email: z.string({
      required_error: 'email is required',
    }),
    password: z.string({
      required_error: 'password is required',
    }),
    role: z.enum(['customer', 'admin'], {
      required_error: 'role is required',
    }),
    contactNo: z.string({
      required_error: 'contactNo is required',
    }),
    address: z.string({
      required_error: 'address is required',
    }),
    profileImg: z.string({
      required_error: 'profileImg is required',
    }),
  }),
})

const update = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().optional(),
    role: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
    profileImg: z.string().optional(),
  }),
})

export const UserValidation = {
  create,
  update,
}
