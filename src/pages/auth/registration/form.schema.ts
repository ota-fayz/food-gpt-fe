import { z, ZodType } from 'zod'

export type FormTypes = {
	gender?: 'MALE' | 'FEMALE' | null
}

export const schema: ZodType<FormTypes> = z.object({
	gender: z.enum(['MALE', 'FEMALE']).optional()
})