import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import supertest from 'supertest'
import createApp from './app.js'

const request = supertest(createApp())

describe('GET /ping', () => {
    it('should return 200 with body "pong"', async () => {
        const res = await request.get('/ping')
        assert.equal(res.status, 200)
        assert.equal(res.text, 'pong')
    })
})
