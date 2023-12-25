import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'JKCHASJCHASJCHASCJKHSCJKASCJSACAKNjNjkhjhjhsc654c65a4c5a4c5c2121f2h2gfh2', // put password for authentication 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtStrategy, JwtAuthGuard],
  exports: [JwtModule],
})
export class AuthModule {}