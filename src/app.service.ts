import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  generateSuratKelengkapanBantuanRI() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'surat-kelengkapan-bantuan-ri.docx',
      ),
      'binary',
    );
    const PizZip = require('pizzip');
    const Docxtemplater = require('docxtemplater');

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const date = new Date().toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
    doc.render({
      date: date,
      no_surat: 'YDDS/' + 'II/' + 'D/' + Math.floor(Math.random() * 1000),
      latter_province: 'Jawa Timur',
      greeting: 'Kepada Yth.',
      name: 'John Doe',
      street: '1234 Main Street',
      rt_rw: '001/001',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'Jawa Timur',
      poscode: '61257',
      short_desc: 'belum dilengkapi dengan kuitansi asli dari Rumah Sakit',
      long_desc:
        'dilengkapi dengan kuitansi asli dari Rumah Sakit, klaim ulang (untuk melengkapi berkas) diterima YDDS selambat - lambatnya 60 hari sejak tanggal pemberitahuan/surat YDDS',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/document', 'output.docx'),
      buf,
    );

    return 'ok';
  }

  generateSuratKelengkapanBerkasALBTKursiRoda() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'surat-kelengkapan-berkas-albt-kursi-roda.docx',
      ),
      'binary',
    );
    const PizZip = require('pizzip');
    const Docxtemplater = require('docxtemplater');

    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
    });

    const date = new Date().toLocaleDateString('id-ID', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
    doc.render({
      id: 'YDDS/' + 'II/' + 'D/' + Math.floor(Math.random() * 1000),
      //03/PPBNtlCJR/2023
      letterId: '03/' + 'PPBNI/' + 'CJR/' + '2023',
      created_at: date,
      latter_province: 'Jawa Timur',
      greeting: 'Kepada Yth.',
      name: 'John Doe',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'Jawa Timur',
      postalCode: '61257',
      accountNumber: '1234567890',
      reason:
        'berkas yang disampaikan hanya berupa Nota yang tidak ada nama toko, alamat dan no. telephone serta surat Keterangan Dokter atau rekomendasi Pengurus Korwil/Wilayah/Cabang PP Setempat yang menyatakan bahwa Ybs. perlu diberikan alat bantu kursi roda',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/document', 'new.docx'),
      buf,
    );

    return 'ok';
  }
}
