import { PhoneModel } from "./phone.model";

export interface ClientModel{
    id?: Number;
    name: string;
    people: string;
    cpf?: string;
    cnpj?: string;
    rg?: string;
    ie?: string;
    dateRegister: Date;
    active: boolean;
    phone: PhoneModel[];
}