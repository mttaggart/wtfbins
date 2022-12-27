// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { WtfBin } from '../../../interfaces/WtfBin';


const wtfBinsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WtfBin | string>
) {
  const {id} = req.query;
  console.log(req.query);
  const wtfBinsData = await fetch(wtfBinsUrl);
  const wtfBins: WtfBin[] = await wtfBinsData.json();
  const wtfBin =  wtfBins.find((w: WtfBin) => (
    w.id.toString() == id
  ));
  if (wtfBin) return res.status(200).json(wtfBin);
  return res.status(404).send("WTFBin not found!");
}
