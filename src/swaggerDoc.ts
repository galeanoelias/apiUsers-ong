import dotenv from "dotenv";
dotenv.config()
import swaggerJsDoc from "swagger-jsdoc";


const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API: Volunteers",
        version: "1.0.0",
        description: "A API OF Users",
      },
      servers: [
        {
          url: process.env.ORIGIN1,
          description: 'API Users for the ...'
        },
      ],
      tags: [
        {
          name: "User",
          description: "Operations about user"
        },
        {
          name: "Ong",
          description: "Operations about ong"
        }
      ],
      paths: {
        "/auth/user/": {
          get: {
            tags: [
              "User"
            ],
            summary: "GET all users in system",
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              405: {
                description: "Invalid input"
              }
            },
            security: [
              {
                userstore_auth: [
                  "write:user",
                  "read:user"
                ]
              }
            ]
          }
        },
        "/auth/user/register": {
          post: {
            tags: [
              "User"
            ],
            summary: "Create user",
            description: "Created user object",
            operationId: "createUser",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "multipart/form-data": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "multipart/form-data": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          }
        },
        "/auth/user/login": {
          post: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "User"
            ],
            summary: "Login user",
            description: "User Logued",
            operationId: "loginUser",
            parameters: [
              {
                name: "Authorization",
                in: "header",
                description: "Token",
                required: true,
                example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
              }
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/email",
                    $ref1: "#/components/schemas/User/properties/password"
                  }
                },
                "multipart/form-data": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/email",
                    $ref1: "#/components/schemas/User/properties/password"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/email",
                    $ref1: "#/components/schemas/User/properties/password"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/email",
                    $ref1: "#/components/schemas/User/properties/password"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User/properties/email",
                      $ref1: "#/components/schemas/User/properties/password"
                    }
                  },
                  "multipart/form-data": {
                    schema: {
                      $ref: "#/components/schemas/User/properties/email",
                      $ref1: "#/components/schemas/User/properties/password"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User/properties/email",
                      $ref1: "#/components/schemas/User/properties/password"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          }
        },
        "/auth/user/{id}": {
          get: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "User"
            ],
            summary: "Get user by user ID",
            parameters: [
              {
                in: "path",
                name: "id",
                description: "The name that needs to be fetched. Use user1 for testing.",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          },
          put: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "User"
            ],
            summary: "Update user",
            description: "This can only be done by the logged in user.",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "The id that needs to be update",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              required: true,
              description: "Update an existent user in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              404: {
                description: "User not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          },
          delete: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "User"
            ],
            summary: "Delete user",
            description: "This can only be done by the deletedd in user.",
            operationId: "deleteUser",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "The id that needs to be deleted",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              description: "Delete an existent user in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/User/properties/username",
                    $ref2: "#/components/schemas/User/properties/email",
                    $ref3: "#/components/schemas/User/properties/password"
                  }
                }
              },
              required: true
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              },
              404: {
                description: "User not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/User"
                    }
                  }
                }
              }
            }
          }
        },
        "/auth/ong/": {
          get: {
            tags: [
              "Ong"
            ],
            summary: "GET all ongs in system",
            responses: {
              200: {
                description: "Successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              405: {
                description: "Invalid input"
              }
            },
            security: [
              {
                userstore_auth: [
                  "write:ong",
                  "read:ong"
                ]
              }
            ]
          }
        },
        "/auth/ong/register": {
          post: {
            tags: [
              "Ong"
            ],
            summary: "Create ong",
            description: "Created ong object",
            operationId: "createOng",
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                },
                "multipart/form-data": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  },
                  "multipart/form-data": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "User not found"
              }
            }
          }
        },
        "/auth/ong/login": {
          post: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "Ong"
            ],
            summary: "Login Ong",
            description: "Ong Logued",
            operationId: "loginOng",
            parameters: [
              {
                name: "Authorization",
                in: "header",
                description: "Token",
                required: true,
                example: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQwNDJiYTZjMzEwZWZlMGMzMDcwMDAiLCJpYXQiOjE2ODE5MzI5ODYsImV4cCI6MTY4MTkzMzg4Nn0.ea2OM59KgdQKvZs8d2s3gTJfsx5A1kIiFOj7WGyeTvk"
              }
            ],
            requestBody: {
              required: true,
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/email",
                    $ref1: "#/components/schemas/Ong/properties/password"
                  }
                },
                "multipart/form-data": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/email",
                    $ref1: "#/components/schemas/Ong/properties/password"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/email",
                    $ref1: "#/components/schemas/Ong/properties/password"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/email",
                    $ref1: "#/components/schemas/Ong/properties/password"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Ong/properties/email",
                      $ref1: "#/components/schemas/Ong/properties/password"
                    }
                  },
                  "multipart/form-data": {
                    schema: {
                      $ref: "#/components/schemas/Ong/properties/email",
                      $ref1: "#/components/schemas/Ong/properties/password"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/Ong/properties/email",
                      $ref1: "#/components/schemas/Ong/properties/password"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "Ong not found"
              }
            }
          }
        },
        "/auth/ong/{id}": {
          get: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "Ong"
            ],
            summary: "Get ong by ong ID",
            parameters: [
              {
                in: "path",
                name: "id",
                description: "The name that needs to be fetched. Use ong1 for testing.",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/json": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  },
                  "application/xml": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied"
              },
              404: {
                description: "Ong not found"
              }
            }
          },
          put: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "Ong"
            ],
            summary: "Update ong",
            description: "This can only be done by the logged in ong.",
            parameters: [
              {
                in: "path",
                name: "id",
                description: "id that need to be update",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              required: true,
              description: "Update an existent user in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/Ong"
                  }
                }
              }
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              404: {
                description: "Ong not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              }
            }
          },
          delete: {
            security: [
              {
              api_key: [""]
              }
            ],
            tags: [
              "Ong"
            ],
            summary: "Delete ong",
            description: "This can only be done by the deletedd in ong.",
            operationId: "deleteOng",
            parameters: [
              {
                name: "id",
                in: "path",
                description: "The id that needs to be deleted",
                required: true,
                schema: {
                  type: String
                }
              }
            ],
            requestBody: {
              description: "Delete an existent ong in the store",
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/username",
                    $ref2: "#/components/schemas/Ong/properties/email",
                    $ref3: "#/components/schemas/Ong/properties/password"
                  }
                },
                "application/xml": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/username",
                    $ref2: "#/components/schemas/Ong/properties/email",
                    $ref3: "#/components/schemas/Ong/properties/password"
                  }
                },
                "application/x-www-form-urlencoded": {
                  schema: {
                    $ref: "#/components/schemas/Ong/properties/username",
                    $ref2: "#/components/schemas/Ong/properties/email",
                    $ref3: "#/components/schemas/Ong/properties/password"
                  }
                }
              },
              required: true
            },
            responses: {
              200: {
                description: "successful operation",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              400: {
                description: "Invalid username supplied",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              },
              404: {
                description: "User not found",
                content: {
                  "application/josn": {
                    schema: {
                      $ref: "#/components/schemas/Ong"
                    }
                  }
                }
              }
            }
          }
        },
      },
      components: {
        schemas: {
          order: {
            type: "object",
            properties: {
              id: {
                type: String,
                example: "638d039e8ce24f8a608e5a37"
              },
              userId: {
                type: String
              },
              quantity: {
                type: String,
                example: "638d039e8ce24f8a608e5a37"
              },
              shipDate: {
                type: String,
                format: "date-time"
              },
              status: {
                type: String,
                description: "Order Status",
                example: "approved",
                enum: [
                  "placed",
                  "approved",
                  "delivered"
                ]
              },
              complete: {
                type: "boolean"
              }
            },
            xml: {
              name: "order"
            }
          },
          User: {
            type: "object",
            required: [
              "username",
              "email",
              "password"
            ],
            properties: {
              username: {
                type: String,
                required: true,
                example: "Voluntario"
              },
              firstname: {
                type: String,
                required: true,
                example: "Voluntario"
              },
              lastname: {
                type: String,
                required: true,
                example: "Voluntario"
              },
              email: {
                type: String,
                required: true,
                example: "voluntario@voluntariado.com"
              },
              password: {
                type: String,
                required: true,
                example: "12345aB!"
              },
              about_me: {
                type: String,
                required: false,
                example: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              workfield: {
                type: String,
                required: true,
                example: "Unknown"
              },
              workingmodality: {
                type: String,
                required: true,
                example: "Unknown"
              },
            },
            xml: {
              name: "user"
            }
          },
          Ong: {
            type: "object",
            required: [
              "username",
              "email",
              "password"
            ],
            properties: {
              username: {
                type: String,
                required: true,
                example: "OngsVoluntarie"
              },
              email: {
                type: String,
                required: true,
                example: "voluntariado@voluntariado.com"
              },
              password: {
                type: String,
                required: true,
                example: "12345aB!"
              },
              website: {
                type: String,
                required: false,
                example: "www.tuOng.com.ar"
              },
              telephone: {
                type: Number,
                required: true,
                example: "12345aB!"
              },
              about_me: {
                type: String,
                required: false,
                example: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              },
              ong_types: {
                type: String,
                required: true,
                example: "Unknown"
              }
            },
            xml: {
              name: "ong"
            }
          },
          ApiResponse: {
            type: "object",
            properties: {
              code: {
                type: "integer",
                format: "int32"
              },
              type: {
                type: String
              },
              message: {
                type: String
              }
            },
            xml: {
              name: "##default"
            }
          }
        },
        requestBodies: {
          UserArray: {
            description: "List of user object",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/User"
                  }
                }
              }
            }
          }
        },
        securitySchemes: {
          api_key: {
            type: "apiKey",
            name: "Authorization",
            in: "header"
          }
        }
      }
    },
    apis: ["./routes/*.ts"]
}

// Docs in JSON format
export const specs = swaggerJsDoc(options);