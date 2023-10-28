import UserReposiRegister from "../Repositories/reposiRegister.js";

const repositoryeRegister = new UserReposiRegister()

class ServicesRegister{
  async ServicesPostRegister(id, body){
    try {
      return await repositoryeRegister.PostRegister(id, body)
    } catch (error) {
      throw error;
    }
  }

  async ServicesPostRegisterBanco(id, body){
    try {
      return await repositoryeRegister.PostRegisterBanco(id, body)
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesRegister;