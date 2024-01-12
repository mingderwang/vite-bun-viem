import { createPublicClient, http, formatUnits } from 'viem'
import { mainnet } from 'viem/chains'
 
const client = createPublicClient({ 
  chain: mainnet,
  transport: http()
})
 
export default {
  async fetch(req) {
const client = createPublicClient({ 
  chain: mainnet,
  transport: http()
})
const blockNumber = await client.getBlockNumber() 
    const path = "./package.json";
    const file = Bun.file(path);
    const contents = await file.json();
    return new Response(JSON.stringify({"blockNumber": formatUnits(blockNumber,0)}),
    {
       status: 200,
       headers: {
         "Content-type": file.type 
       },
    }
    );
  },
};
