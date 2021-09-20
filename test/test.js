import wallet from "../../utils/wallet";
import { getOneMemberByParams, Member } from "src/api/utils/member";
import prisma from "../../prisma"
import { SeamlessTransactionStatus } from ".prisma/client"
import { jdbGameMapping } from "../utils/types"
//find user by token.
//find exist betstatus seamless by roundId
//if not found create new, if found update same roundId transac.
//deduct wallet
//getbalance and return ok.

const bet = async () => {
  const { user_id, game, callback_id, round_id } = requestObject;

  const member= await getOneMemberByParams({ username: user_id }); 

  const balance = await wallet.getBalance( member.refCode , member.organisationRefCode);
  console.log("balance Get token ==>", balance);
  

  // create seamlesstransaction
   const seamlessCreate =  await prisma.seamlessTransaction.create({
        data: {
            memberRefCode: member.refCode,
            organisationRefCode : member.organisationRefCode,
            txnid: callback_id,
            status: SeamlessTransactionStatus.DRAFT,
            gameType: jdbGameMapping[game],
            refCode: round_id,
            info: { txns: [{ bet: { game } }], balance},
            webId: process.env.WEB_ID,
            providerRefCode: "jdb",
            transactionDate: "10102021"
          },
      });

      console.log("seamlessCreate ===> ", seamlessCreate)
}

export default bet;
