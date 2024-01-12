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

  @Get('surat-persetujuan-bantuan-ugd-igd')
  generateSuratPersetujuanBantuanUGDIGD(): string {
    return this.appService.generateSuratPersetujuanBantuanUGDIGD();
  }

  @Get('surat-persetujuan-klaim-hd')
  generateSuratPersetujuanKlaimHD(): string {
    return this.appService.generateSuratPersetujuanKlaimHD();
  }

  @Get('surat-penolakan-bantuan-ri')
  generateSuratPenolakanBantuanRI(): string {
    return this.appService.generateSuratPenolakanBantuanRI();
  }

  @Get('transfer-dana-bni-direct')
  generateTransferDanaBNIDirect(): string {
    return this.appService.generateTransferDanaBNIDirect();
  }
}
