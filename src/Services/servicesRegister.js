import UserReposiRegister from "../Repositories/reposiRegister.js";

const repositoryeRegister = new UserReposiRegister()

class ServicesRegister{
  async ServicesGetRegister(){
    try {
      return await repositoryeRegister.getRegister()
    } catch (error) {
      throw error;
    }
  }
  async ServicesPostRegister(body){
    try {
      return await repositoryeRegister.PostRegister(body)
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesRegister;