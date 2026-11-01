import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() { return { status: 'ok', timestamp: new Date().toISOString() }; }
  getData() { return { success: true, data: { message: 'Sample service data from re_dayvlog_sqlite Backend' } }; }
}
