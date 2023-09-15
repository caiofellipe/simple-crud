export interface ClientModel{
    name: string;
    people: string;
    cpf?: string;
    cnpj?: string;
    rg?: string;
    ie?: string;
    dateRegister: Date;
    active: boolean;
    phones: string[];
}