import UserReepositoriePlayers from "../Repositories/repositories.js";
import UserReposytorieAuth from "../Repositories/reposyAuth.js";

const repositorio = new UserReepositoriePlayers()
const repositorioAuth = new UserReposytorieAuth() //nessesario para verificar name e password em update



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
  async servicesPutPlayer(id, body){
   try {
    await repositorio.repositoriePut(id, body)
   } catch (error) {
    throw error;
   }
  }
}

export default ServicesPlayers