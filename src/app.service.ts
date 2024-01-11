import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  generateDocx() {
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
      //buatkan format date dengan format tanggal bulan tahun, bulannya cukup 3 huruf, dalam bahasa indonesia bulannya
      //contoh: 01 Jan 2020
      date: date,
      // no surat dengan random 3 angka
      no_surat: 'YDDS/' + 'II/' + 'D' + Math.floor(Math.random() * 1000),
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

    return 'buf';
  }
}
