import UserReepositoriePlayers from "../Repositories/repositories.js";

const repositorio = new UserReepositoriePlayers()



class ServicesPlayers{
  async servicesGetPlayers(){
    return repositorio.repositorieGet()
  }
  async servicesPostPlayers(player){
    try {
      return await repositorio.repositoriePost(player)
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesPlayers