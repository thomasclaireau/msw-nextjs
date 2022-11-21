import { rest } from 'msw'
import { User } from './types'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/todos', (_req, res, ctx) => {
    return res(
      ctx.json([
        {
          "userId": 1,
          "id": 1,
          "title": "test 1",
          "completed": false
        },
        {
          "userId": 1,
          "id": 2,
          "title": "quis ut nam facilis et officia qui",
          "completed": false
        },
        {
          "userId": 1,
          "id": 3,
          "title": "fugiat veniam minus",
          "completed": false
        },
      ])
    )
  }),
  rest.get('https://jsonplaceholder.typicode.com/users', (_req, res, ctx) => {
    
    return res(
      ctx.json([
        {
          "id": 1,
          "name": "Rabaa Ridene",
          "username": "Rayden",
          "email": "rabaa.ridene@toto.com",
          "address": {
            "street": "Nice poc",
            "suite": "",
            "city": "msw",
            "zipcode": "79466",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "000000000",
          "website": "typescript.org",
          "company": {
            "name": "JT",
            "catchPhrase": "Jobteaser phrase",
            "bs": "harness real-time e-markets"
          }
        },
        {
          "id": 2,
          "name": "Thomas Claireau",
          "username": "thomasclaireau",
          "email": "thomas.claireau@jobteaser.com",
          "address": {
            "street": "Rue du typescript",
            "suite": "000",
            "city": "Nantes",
            "zipcode": "44000",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "010-692-6593 x09125",
          "website": "anastasia.net",
          "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
          }
        },
        {
          "id": 3,
          "name": "Jouanne Jimmy",
          "username": "Geminii",
          "email": "jimmy.jouanne@jobteaser.com",
          "address": {
            "street": "Rue du mock",
            "suite": "000",
            "city": "Le havre",
            "zipcode": "76620",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
          "phone": "0629518695",
          "website": "jobteaser.com",
          "company": {
            "name": "Jobteaser",
            "catchPhrase": "Jobteaser god",
            "bs": "For fun"
          }
        }
      ])
    )
  }),
]
