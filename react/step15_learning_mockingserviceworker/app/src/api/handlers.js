import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get("/api/contacts", async () => {
    return HttpResponse.json(
      [
        {
          name: 'mock-contact1',
          email: 'contact1@abc.com',
          phone: '123-456-7890'
        },
        {
          name: 'mock-contact2',
          email: 'contact2@abc.com',
          phone: '999-888-1234'
        }
      ]
    )
  })
]