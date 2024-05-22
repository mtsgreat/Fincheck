import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignupDto {

    @IsString()
    @IsNotEmpty({message: "O nome nao pode ser vazio"})
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password: string;

}
