import { IsEmail, IsNotEmpty } from '@nestjs/class-validator';

export class CreateUserDto {
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}