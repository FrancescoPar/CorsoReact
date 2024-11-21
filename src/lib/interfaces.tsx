export interface IUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export interface IRegistrationForm {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confermaPassword: string;
}

export interface ILoginForm {
    email: string;
    password: string;
}