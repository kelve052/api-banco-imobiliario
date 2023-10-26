import UserRepositoryBanco from "../Repositories/reposiBanco.js";

const repositoryeBanco = new UserRepositoryBanco()

class ServicesBanco{
  async servicesBancoGet(){
    try {
      return await repositoryeBanco.repositorieGetBanco()
    } catch (error) {
      throw error;
    }
  }
  async servicesBancoPost (body){
    try {
      return await repositoryeBanco.repositoriePostBanco(body)
    } catch (error) {
      throw error;
    }
  }
  async servicesBancoPut (id, body){
    try {
      return await repositoryeBanco.repositoriePutBanco(id, body)
    } catch (error) {
      throw error;
    }
  }
  async servicesDelete(id){
    try {
      return await repositoryeBanco.repositorieDeleteBanco(id)
    } catch (error) {
      throw error;
    }
  }
  async servicesDeleteAll(){
    try {
      await repositoryeBanco.repositorieDeleteBancoAll()
    } catch (error) {
      throw error;
    }
  }
}

export default ServicesBanco;