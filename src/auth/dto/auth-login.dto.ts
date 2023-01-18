import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class AuthLoginDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}