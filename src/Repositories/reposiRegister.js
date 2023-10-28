import modelPlayers from "../Model/model.js";
import modelBanco from "../Model/modelBanco.js";

class UserReposiRegister{
  async PostRegister(id, body){
    try {
      const player = await modelPlayers.findById(id)
      if(!player){
        throw new Error("id entered does not exist!")
      }
      const sendingPlayer = await modelPlayers.findOne({name: body.player})
        if(!sendingPlayer){
          throw new Error("Player inserted does not exist!")
        }
        if(sendingPlayer.name == player.name){
          throw new Error("the inserted player cannot be the same as the current player in the transaction")
        }
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
    } catch (error) {
      throw error;
    }
  }



  async PostRegisterBanco(id, body){
    try {
      const banco = await modelBanco.findById(id)
      if(!banco){
        throw new Error("id entered does not exist!")
      }
      const sendingPlayer = await modelPlayers.findOne({name: body.player})
      if(!sendingPlayer){
        throw new Error("Player inserted does not exist!")
      }
      if(body.status ==  "sent"){
        if(banco.balancer < body.balancerValue || body.balancerValue <=0){
          throw new Error("BalancerValue in banco cannot be negativo or zero and greater than the current balancer!")
        }
        banco.register.push(body)
        banco.balancer = banco.balancer - body.balancerValue
        await banco.save()
        const bodySendingPlayer = {_id: banco.register[banco.register.length - 1].id, status: "received", player: `Banco: ${banco.name}`, balancerValue: body.balancerValue}
        sendingPlayer.register.push(bodySendingPlayer)
        sendingPlayer.balancer = sendingPlayer.balancer + bodySendingPlayer.balancerValue
        sendingPlayer.save()
        return {Banco: banco, Player: sendingPlayer}
      }else{
        //body status == received
        if(sendingPlayer.balancer < body.balancerValue || body.balancerValue <=0){
          throw new Error("BalancerValue in player cannot be negativo or zero and greater than the current balancer!")
        }
        banco.register.push(body)
        banco.balancer = banco.balancer + body.balancerValue
        await banco.save()
        const bodySendingPlayer = {_id: banco.register[banco.register.length - 1].id, status: "sent", player: `Banco: ${banco.name}`, balancerValue: body.balancerValue}
        sendingPlayer.register.push(bodySendingPlayer)
        sendingPlayer.balancer = sendingPlayer.balancer - bodySendingPlayer.balancerValue
        sendingPlayer.save()
        return {Banco: banco, Player: sendingPlayer}
      }
    } catch (error) {
      throw error;
    }
  }
}

export default UserReposiRegister