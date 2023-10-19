import modelPlayers from "../Model/model.js";

class UserReepositoriePlayers {
  async repositorieGet(){
    const get = await modelPlayers.find();
    console.log(get)
    return get
  }
}

export default UserReepositoriePlayers