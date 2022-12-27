// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { WtfBin } from '../../interfaces/WtfBin';


const wtfBinsUrl = "https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WtfBin[]>
) {
  const wtfBinsData = await fetch(wtfBinsUrl);
  const wtfBins: WtfBin[] = await wtfBinsData.json();
  res.status(200).json(wtfBins);
}
