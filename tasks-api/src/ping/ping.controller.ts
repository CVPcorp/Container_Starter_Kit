import {
  ApiTags,
  ApiOkResponse,
} from '@nestjs/swagger';

import {
  Get,
  Controller,
} from '@nestjs/common';


@ApiTags('Ping')
@Controller('ping')
export class PingController {
  @Get()
  @ApiOkResponse()
  ping() {
    return {
      status: 'UP',
      message: 'College Hire Bootcamp Tasks API is up & running!'
    };
  }
}
