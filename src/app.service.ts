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

  generateSuratPersetujuanBantuanUGDIGD() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'surat-persetujuan-bantuan-ugd-igd.docx',
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
      createdAt: date,
      letterProvince: 'Jawa Timur',
      greeting: 'Kepada Yth.',
      name: 'John Doe',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'Jawa Timur',
      postalCode: '61257',
      dateSubmission: date,
      status: 'tidak',
      hospitalName: 'RSUD Dr. Soetomo',
      hospitalProvince: 'Jawa Timur',
      requestedAmount: 'Rp. 3.986.000',
      amountAfterFiftyPercent: 'Rp. 1.993.000',
      paidAmount: 'Rp. 1.500.000',
      accountNumber: '1234567890',
      bankName: 'Bank BNI',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/generated', 'new.docx'),
      buf,
    );

    return 'ok';
  }

  generateSuratPersetujuanKlaimHD() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'surat-persetujuan-klaim-hd.docx',
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
      createdAt: date,
      letterProvince: 'Jawa Timur',
      greeting: 'Kepada Yth.',
      name: 'John Doe',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'Jawa Timur',
      postalCode: '61257',
      dateSubmission: date,
      startTreatment: '01/01/2023',
      endTreatment: '01/02/2023',
      participant: [
        {
          date: '01/01/2023',
          name: 'John Doe',
          requestedAmount: 'Rp. 1.000.000',
          rejectedAmount: '---',
          coverageAmount: 'Rp. 1.000.000',
        },
        {
          date: '08/01/2023',
          name: 'John Doe',
          requestedAmount: 'Rp. 1.000.000',
          rejectedAmount: '---',
          coverageAmount: 'Rp. 1.000.000',
        },
        {
          date: '15/01/2023',
          name: 'John Doe',
          requestedAmount: 'Rp. 1.000.000',
          rejectedAmount: '---',
          coverageAmount: 'Rp. 1.000.000',
        },
        {
          date: '22/01/2023',
          name: 'John Doe',
          requestedAmount: 'Rp. 1.000.000',
          rejectedAmount: '---',
          coverageAmount: 'Rp. 1.000.000',
        },
        {
          date: '01/02/2023',
          name: 'John Doe',
          requestedAmount: 'Rp. 1.000.000',
          rejectedAmount: '---',
          coverageAmount: 'Rp. 1.000.000',
        },
      ],

      totalRequestedAmount: 'Rp. 5.000.000',
      totalCoverageAmount: 'Rp. 5.000.000',
      bankName: 'Bank BNI',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/generated', 'new.docx'),
      buf,
    );

    return 'ok';
  }

  generateSuratPenolakanBantuanRI() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'surat-penolakan-bantuan-ri.docx',
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
      letterProvince: 'Jawa Timur',
      createdAt: date,
      greeting: 'Kepada Yth.',
      name: 'John Doe',
      address: 'Sumampan, Kec. Sidoarjo, Kab. Sidoarjo',
      province: 'Jawa Timur',
      postalCode: '61257',
      dateSubmission: date,
      reason: 'seluruh biaya ditanggung oleh Admedika - FWD',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/generated', 'new.docx'),
      buf,
    );

    return 'ok';
  }

  generateTransferDanaBNIDirect() {
    const content = fs.readFileSync(
      path.resolve(
        __dirname,
        '../src/document',
        'transfer-dana-bni-direct.docx',
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
      createdAt: date,
      name: 'Jane Doe',
      dateSubmission: date,
      accountNumberSender: '1234567890',
      accountNumberReceiver: '1234567890',
      amount: 'Rp. 1.000.000',
      description: 'Transfer Dana BNI Direct',
      makerName: 'Jane Doe',
      makerPosition: 'Administrasi',
      approverName: 'John Doe',
      approverPosition: 'Kepala Cabang',
      releaserName: 'John Doe',
      releaserPosition: 'Sekretaris',
    });

    const buf = doc
      .getZip()
      .generate({ type: 'nodebuffer', compression: 'DEFLATE' });
    fs.writeFileSync(
      path.resolve(__dirname, '../src/generated', 'new.docx'),
      buf,
    );

    return 'ok';
  }
}
