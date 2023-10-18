import UserReepositoriePlayers from "../Repositories/repositories";

const repositorio = new UserReepositoriePlayers



class ServicesPlayers{
  async servicesGetPlayers(){
    return repositorio.repositorieGet
  }
}

export default ServicesPlayers