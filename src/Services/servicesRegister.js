import UserReposiRegister from "../Repositories/reposiRegister.js";

const repositoryeRegister = new UserReposiRegister()

class ServicesRegister{
  async ServicesPostRegister(body){
    try {
      return await repositoryeRegister.PostRegister(body)
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesRegister;