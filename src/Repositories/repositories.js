import modelPlayers from "../Model/model";

class UserReepositoriePlayers {
  async repositorieGet(){
    const get = await modelPlayers.find();
    return get
  }
}

export default UserReepositoriePlayers