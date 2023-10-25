import UserReposiRegister from "../Repositories/reposiRegister.js";

const repositoryeRegister = new UserReposiRegister()

class ServicesRegister{
  async ServicesPostREgister(id, body){
    try {
      return await repositoryeRegister.PostRegister(id, body)
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesRegister;