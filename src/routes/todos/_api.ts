import type { Request } from "@sveltejs/kit";

/**
 Prisma is a next-generation ORM that makes working with databases easy for application developers and features the following tools: Prisma Client: Auto-generated and type-safe database client for use in your application.
 */
 import PrismaClient from "$lib/prisma";
 const prisma = new PrismaClient();

export const api = async (request: Request, data?: Record<string, unknown>) => {

  // initialize body and status
  let body = {};
  let status = 500;

  // check for the different methods
  switch (request.method.toUpperCase()) {
    case "GET": // get all todos
      body = await prisma.todo.findMany();
      status = 200;
      break;
    case "POST": // post new todo
      body = await prisma.todo.create({
        data: {
          created_at: data.created_at as Date,
          done: data.done as boolean,
          text: data.text as string
        }
      })
      status = 201;
      break;
    case "DELETE": // delete a todo
      body = await prisma.todo.delete({
        where: {
          uid: request.params.uid
        }
      })
      // todos = todos.filter(todo => todo.uid !== request.params.uid)
      status = 200;
      break;
    case "PATCH": // update a todo
      body = await prisma.todo.update({
        where: {
          uid: request.params.uid
        },
        data: {
          done: data.done,
          text: data.text
        }
      })
      status = 200;
      break;
  
    default:
      break;
  }

  // if method != GET and header doesn't accept json
  if (request.method.toUpperCase() !== "GET" &&
    request.headers.accept !== "application/json") {
    return {
      status: 303, // suitable for redirection
      headers: {
        location: "/"
      }
    };
  }

  return {
    status,
    body
  }
}