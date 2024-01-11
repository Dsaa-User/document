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

    doc.render({
      //buatkan format date dengan format tanggal bulan tahun, bulannya cukup 3 huruf, dalam bahasa indonesia bulannya
      //contoh: 01 Jan 2020
      date: new Date().toLocaleDateString('id-ID', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }),
      // no surat dengan random 3 angka
      no_surat: Math.floor(Math.random() * 1000),
      name: 'John Doe',
      street: '1234 Main Street',
      rt_rw: '001/001',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'East Java',
      poscode: '61257',
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
