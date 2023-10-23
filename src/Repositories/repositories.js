import modelPlayers from "../Model/model.js";

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
}

export default UserReepositoriePlayers