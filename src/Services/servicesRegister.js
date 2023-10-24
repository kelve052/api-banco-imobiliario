import UserReposiRegister from "../Repositories/reposiRegister.js";

const repositoryeRegister = new UserReposiRegister()

class ServicesRegister{
  async ServicesPostREgister(id){
    return repositoryeRegister.PostRegister(id)
  }
}

export default ServicesRegister;