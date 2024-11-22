const playersRouter = {
  "/player": {
    get: {
      tags: ["Player"],
      summary: "Lista todos os usuários cadastrados",
      responses: {
        200: {
          description: "Lista de usuários retornada com sucesso",
          content: {
            "application/json": {
              example: [
                { id: 1, name: "João", team: "Yellow" },
                { id: 2, name: "Maria", team: "Blue" }
              ]
            }
          }
        },
        400: {
          description: "Erro na requisição",
          content: {
            "application/json": {
              example: { error: true, code: 400, message: "Erro ao listar usuários" }
            }
          }
        }
      }
    },
    post: {
      tags: ["Player"],
      summary: "Cria um novo usuário",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "João",
              team: "Yellow",
              password: "t$K12345"
            }
          }
        }
      },
      responses: {
        201: {
          description: "Usuário criado com sucesso",
          content: {
            "application/json": {
              example: {
                id: 1,
                name: "João",
                team: "Yellow"
              }
            }
          }
        },
        400: {
          description: "Dados inválidos",
          content: {
            "application/json": {
              example: { error: true, code: 400, message: ["Nome é obrigatório", "Email já cadastrado"] }
            }
          }
        }
      }
    }
  },
  "/player/{id}": {
    put: {
      tags: ["Player"],
      summary: "Atualiza dados de um usuário",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "ID do usuário",
          example: "6c7ff479-c935-4a04-bd39-c129fd27a6b5"
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "João Silva",
              team: "Red"
            }
          }
        }
      },
      responses: {
        202: {
          description: "Usuário atualizado com sucesso",
          content: {
            "application/json": {
              example: {
                id: 1,
                name: "João Silva",
                team: "Red"
              }
            }
          }
        },
        400: {
          description: "Dados inválidos",
          content: {
            "application/json": {
              example: { error: true, code: 400, message: ["Usuário não encontrado", "Email inválido"] }
            }
          }
        }
      }
    },
    delete: {
      tags: ["Player"],
      summary: "Deleta um usuário",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
          description: "ID do usuário",
          example: "6c7ff479-c935-4a04-bd39-c129fd27a6b5"
        }
      ],
      responses: {
        204: {
          description: "Usuário deletado com sucesso"
        },
        400: {
          description: "Erro ao deletar usuário",
          content: {
            "application/json": {
              example: { error: true, code: 400, message: ["Usuário não encontrado", "ID deve ser um número inteiro positivo"] }
            }
          }
        }
      }
    }
  },
  "/deleteAllPlayers": {
    delete: {
      tags: ["Player"],
      summary: "Deleta todos os jogadores",
      responses: {
        204: {
          description: "Todos os jogadores deletados com sucesso"
        },
        400: {
          description: "Erro ao deletar jogadores",
          content: {
            "application/json": {
              example: { error: true, code: 400, message: "Erro ao tentar deletar jogadores" }
            }
          }
        }
      }
    }
  },
  "/bank": {
    get: {
      tags: ["Bank"],
      summary: "Lista todas as contas bancárias",
      responses: {
        200: {
          description: "Lista de contas retornada com sucesso",
          content: {
            "application/json": {
              example: [
                { id: 1, name: "Banco A", balancer: 1000 },
                { id: 2, name: "Banco B", balancer: 500 }
              ]
            }
          }
        }
      }
    },
    post: {
      tags: ["Bank"],
      summary: "Cria uma nova conta bancária",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Banco54sssss88",
              balancer: 88
            }
          }
        }
      },
      responses: {
        201: {
          description: "Conta criada com sucesso",
          content: {
            "application/json": {
              example: { id: 1, name: "Banco54sssss88", balancer: 88 }
            }
          }
        }
      }
    }
  },
  "/bank/{id}": {
    put: {
      tags: ["Bank"],
      summary: "Atualiza uma conta bancária",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
          description: "ID da conta bancária",
          example: 1
        }
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              name: "Banco Atualizado",
              balancer: 1500
            }
          }
        }
      },
      responses: {
        202: {
          description: "Conta atualizada com sucesso",
          content: {
            "application/json": {
              example: { id: 1, name: "Banco Atualizado", balancer: 1500 }
            }
          }
        }
      }
    },
    delete: {
      tags: ["Bank"],
      summary: "Deleta uma conta bancária",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "integer" },
          description: "ID da conta bancária",
          example: 1
        }
      ],
      responses: {
        204: {
          description: "Conta deletada com sucesso"
        }
      }
    }
  },
  "/banksDeleteAll": {
    delete: {
      tags: ["Bank"],
      summary: "Deleta todas as contas bancárias",
      responses: {
        204: {
          description: "Todas as contas deletadas com sucesso"
        }
      }
    }
  },
  "/register": {
    get: {
      tags: ["Register"],
      summary: "Lista todos os registros",
      responses: {
        200: {
          description: "Lista de registros retornada com sucesso",
          content: {
            "application/json": {
              example: [
                { id: 1, status: "sent", player: "Maria1", balancerValue: 61 },
                { id: 2, status: "pending", player: "João", balancerValue: 100 }
              ]
            }
          }
        }
      }
    },
    post: {
      tags: ["Register"],
      summary: "Cria um novo registro",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            example: {
              status: "sent",
              player: "Maria1",
              balancerValue: 61
            }
          }
        }
      },
      responses: {
        201: {
          description: "Registro criado com sucesso",
          content: {
            "application/json": {
              example: { id: 1, status: "sent", player: "Maria1", balancerValue: 61 }
            }
          }
        }
      }
    },
    delete: {
      tags: ["Register"],
      summary: "Deleta todos os registros",
      responses: {
        204: {
          description: "Todos os registros deletados com sucesso"
        }
      }
    }
  }
};

export { playersRouter };
