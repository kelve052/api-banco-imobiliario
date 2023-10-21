import UserReposytorieAuth from "../Repositories/reposyAuth.js";

class ServicesAuth {
  async servValidadeCredentials (name, password){
    try {
      const player = await new UserReposytorieAuth().validateNamePlayer(name)
      await new UserReposytorieAuth().validadePasswordPlayer(player, password)
    } catch (error) {
      throw error
    }
  }
}

export default ServicesAuth