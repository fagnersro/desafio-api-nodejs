import { test, expect } from 'vitest'
import request from 'supertest'
import { server } from '../app.ts'
import { faker } from '@faker-js/faker'
import { makeCourse } from '../tests/factories/make-course.ts'

test('get course by id', async () => {
  await server.ready()

  const response = await request(server.server)
  .get(`/courses/CDSNKJ29-C9H4-47NH-9DHE-JH4SD3BBG28D`)

  expect(response.status).toEqual(404)
})