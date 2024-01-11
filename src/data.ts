import { http, createPublicClient, stringify, Address, formatEther } from 'viem'
import { mainnet } from 'viem/chains'
import { users } from './users.ts'

const client = createPublicClient({
  chain: mainnet,
  transport: http(),
})

const balances = users.map((user) => (
  client.getBalance({ 
    address: user as Address,
  })
))

const results =
  await Promise.all([
    ...balances
  ])

export default 
  results.map((result) => (
  `Balance: ${formatEther(result)}`
  ))
