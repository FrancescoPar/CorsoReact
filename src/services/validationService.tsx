import { IRegistrationForm } from "../lib/interfaces";
import { z } from "zod";

class ValidationService{
    registrationValidator(data: IRegistrationForm){

        if (data.password != data.confermaPassword) {
            return false
        }

        const registerRequest = z.object({
            firstName: z.string().min(2).max(20),
            lastName: z.string().min(2).max(20),
            email: z.string().min(6).email(),
            password: z.string().min(12).max(18).regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{12,18}$/),
        }).required();

        const validatedRequest = registerRequest.safeParse(data);

        if (!validatedRequest.success) {
            return false;
        }

        return true;
    }
}

export const validationService = new ValidationService();