import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcryptjs'
import { LoginDto } from './dto/login.dto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email)
    if (user && await bcrypt.compare(password, user.password)) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findByEmail(dto.email);
    if (!user) throw new UnauthorizedException('E-mail ou senha inválidos');
  
    const isPasswordValid = await bcrypt.compare(dto.password, user.password);
    if (!isPasswordValid) throw new UnauthorizedException('E-mail ou senha inválidos');
  
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
  
    return { access_token: token };
  }
  

  async register(data: any) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
  
    await this.usersService.create({
      ...data,
      password: hashedPassword,
    });
      return this.login({
      email: data.email,
      password: data.password,
    });
  }
  
}
