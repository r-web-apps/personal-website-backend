import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

class AuthRequestDto {
  readonly authToken: string;
}

@Controller('/auth')
export class AuthController {
  @Post()
  authenticate(@Body() body: AuthRequestDto, @Res() res: Response): void {
    if (body.authToken === process.env.ACCESS_TOKEN) {
      console.log('sending cookie: ' + process.env.API_CLIENT_TOKEN);
      res
        .status(HttpStatus.OK)
        .send({ status: 'ok', token: process.env.API_CLIENT_TOKEN });
    } else {
      res.status(HttpStatus.FORBIDDEN).send({ status: 'nok' });
    }
  }

  @Post('/check')
  checkToken(@Body() body, @Res() res: Response): void {
    if (body.token === process.env.API_CLIENT_TOKEN) {
      res.status(HttpStatus.OK).send({ status: 'ok' });
    } else {
      res.status(HttpStatus.FORBIDDEN).send({ status: 'nok' });
    }
  }
}
