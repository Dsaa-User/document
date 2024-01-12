import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('generate-surat-kelengkapan-bantuan-ri')
  generateSuratKelengkapanBantuanRI(): string {
    return this.appService.generateSuratKelengkapanBantuanRI();
  }

  @Get('generate-surat-kelengkapan-berkas-albt-kursi-roda')
  generateSuratKelengkapanBerkasALBTKursiRoda(): string {
    return this.appService.generateSuratKelengkapanBerkasALBTKursiRoda();
  }
}
