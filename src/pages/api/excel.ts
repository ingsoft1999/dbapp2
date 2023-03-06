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
  const workbook = await XLSX.readFile(jsonDirectory + `aa-36-3.xlsx`, { cellFormula: true });
  //console.log('ab', workbook);
  //const workbook = XLSX.read(ab, { cellFormula: true });
  //res.json(usersWithPosts)
  //const wb = XLSX.read(ab, {cellFormula: true});
  const ws = workbook.Sheets['국산차 견적'];
  console.log('ws', ws)
  console.log(ws['BA26'].v,ws['AL14'].v);
  ws['BA26'].v = 36;
  //XLSX.utils.sheet_add_aoa(ws, [[36]], { origin: 'BA26' });
  console.log(ws['BA26'].v,ws['AL14'].v);
  try {
    await writeFile(workbook, jsonDirectory + 'aa-36-4.xlsx');
  } catch (error) {
    console.log('error', error)
  }
  

  


  res.status(200).json({ name: 'John Doe' })
}
