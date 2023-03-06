// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
//var XLSX = require("xlsx");
import XLSX , { writeFile, set_fs } from "xlsx";
set_fs(fs);

import path from 'path';
//import { promises as fs } from 'fs';
//import capitaljsondata from '@/excel/aa.xlsx';
/* load 'fs' for readFile and writeFile support */
import * as fs from 'fs';

var XLSX_CALC = require('xlsx-calc');
var formulajs = require('@formulajs/formulajs');

/* load the codepage support library for extended support with older formats  */
//import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
//XLSX.set_cptable(cpexcel);


type Data = {
  name: string
}
//XLSX.set_fs(fs);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), 'excel\\')
  console.log('jsonDirectory', jsonDirectory)
  //const fileContents = await fs.readFile(jsonDirectory + `/aa.xlsx`, 'utf8')
  

  //const ab = await (jsonDirectory + "aa.xlsx").arrayBuffer();
  //const ab = XLSX.readFile(fileContents, { cellFormula: true });
  const workbook = await XLSX.readFile(jsonDirectory + `aa.xlsx`, { cellFormula: true });
  console.log('ab', workbook);
  XLSX_CALC(workbook);
  //XLSX_CALC.import_functions(formulajs);
  //console.log('ab', workbook);
  //const workbook = XLSX.read(ab, { cellFormula: true });
  //res.json(usersWithPosts)
  //const wb = XLSX.read(ab, {cellFormula: true});
  const ws = workbook.Sheets['국산차 견적'];
  console.log('변경전:',ws['BA26'].v,ws['AL14'].v);
  ws.BA26.v = 36;
  ws.AL14.v = {f: '=ROUNDUP(CQ51*1.1,-2)'};

  
  //=ROUNDUP(CQ51*1.1,-2)
  


  console.log('변경후:',ws['BA26'].v,ws['AL14'].v);
  

  


  res.status(200).json({ name: 'John Doe' })
}
