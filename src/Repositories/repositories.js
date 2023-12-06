import modelPlayers from "../Model/model.js";
import modelBanco from "../Model/modelBanco.js"

class UserReepositoriePlayers {
  async repositorieGet(){
    const get = await modelPlayers.find();
    return get
  }
  async repositoriePost(player){
    try {
      const post = await modelPlayers.create(player)
      return post
    } catch (error) {
      // throw new Error("the name entered already exists, choose another!");
      throw error
    }
  }
  async repositoriePut(id, body){
    try {
      const  {name} = body
      const Player = await modelPlayers.findById(id)
      if(!Player){
        throw new Error("id entered does not exist!")
      }
      if(Player.name == name){
        const newPlayer = await modelPlayers.findByIdAndUpdate(id, body, { new: true });
        return newPlayer;
      }else{
        const existPlayer  = await modelPlayers.findOne({name: name})
        if(existPlayer){
          throw new Error("Name already belongs to player!")
        }
        try {
          //codico responsavel por atualizar name dos palyer no registro caso name seja atualizado
          const registerRelation = Player.register.filter(item => !item.player.startsWith("Banco"));
          const idsRelation = [];

          for (let c = 0; c < registerRelation.length; c++) {
            const player = await modelPlayers.findOne({ name: registerRelation[c].player });
            if (player) {
              idsRelation.push(player._id);
            }
          }

          for (let c = 0; c < registerRelation.length; c++) {
            const playerId = idsRelation[c];

            await modelPlayers.findOneAndUpdate(
              { _id: playerId, 'register._id': registerRelation[c]._id },
              { $set: { 'register.$.player': body.name } }
            );
          }
        } catch (error) {
          throw new Error("error in alter name register!")
        }
        try {
          //codico responsavel por alterar o registro no Banco caso name for alterado
          const registerRelationBanco = Player.register.filter(item => item.player.startsWith("Banco"));
          const bancosrelationsIds = [] // armazena ids dos bancos que tem registro com o player a ser atualizado
          for(let c = 0; c<registerRelationBanco.length;c++){        
            const nameBanco = await modelBanco.findOne({ name: (registerRelationBanco[0].player.split(' ')[1])})//o split esta sendo usado para pegar de "Banco: nome do banco" apenas "nome do banco"          
            if(nameBanco){
              bancosrelationsIds.push(nameBanco._id)
            }
          }
          for (let c = 0; c < registerRelationBanco.length; c++) {
            const bancoId = bancosrelationsIds[c];

            await modelBanco.findOneAndUpdate(
              { _id: bancoId, 'register._id': registerRelationBanco[c]._id },
              { $set: { 'register.$.player': body.name } }
            );
          }
        } catch (error) {
          throw new Error("error in alter name register for Banco!")
        }
        const newPlayer = await modelPlayers.findByIdAndUpdate(id, body, { new: true });
        return newPlayer
      }
    } catch (error) {
      throw error
    }
  }
  async repositorieDelete(id){
    try {
      const Player = await modelPlayers.findById(id)
      if(!Player){
        throw new Error("id entered does not exist!")
      }
      await modelPlayers.findByIdAndDelete(id)
    } catch (error) {
      throw error
    }
  }
  async repositoiredeleteAllPlayers(){
    try {
      await modelPlayers.deleteMany()
      return;
    } catch (error) {
      throw error;
    }
  }
}

export default UserReepositoriePlayers