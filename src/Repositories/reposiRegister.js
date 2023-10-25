import modelPlayers from "../Model/model.js";

class UserReposiRegister{
  async PostRegister(id, body){
    try {
      const player = await modelPlayers.findById(id)
      if(!player){
        throw new Error("id entered does not exist!")
      }
      if(body.player == "banco"){
        player.register.push(body)
        player.balancer = player.balancer - body.balancerValue
        await player.save()
        return player
      }else{
        const sendingPlayer = await modelPlayers.findOne({name: body.player})
        if(!sendingPlayer){
          throw new Error("Player inserted does not exist!")
        }
        if(sendingPlayer.name == player.name){
          throw new Error("the inserted player cannot be the same as the current player in the transaction")
        }
        if(body.status == "sent"){
          if(player.balancer < body.balancerValue || body.balancerValue <=0){
            throw new Error("BalancerValue cannot be negativo or zero and greater than the current balancer!")
          }
          player.register.push(body)
          player.balancer = player.balancer - body.balancerValue
          await player.save()
          const bodySendingPlayer = {_id: player.register[player.register.length - 1].id, status: "received", player: player.name, balancerValue: body.balancerValue}
          sendingPlayer.register.push(bodySendingPlayer)
          sendingPlayer.balancer = sendingPlayer.balancer + bodySendingPlayer.balancerValue
          await sendingPlayer.save()
          return {player: player, sendingPlayer: sendingPlayer}
        }else{
          // não pode cair nesta condição mas deixei um throw error porque vai que cai em algum teste
          throw new Error("if que não era para acontecer aconteceu linha 27 repositorie register")
        }
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UserReposiRegister