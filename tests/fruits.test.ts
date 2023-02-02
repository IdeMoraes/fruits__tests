import app from "index";
import supertest from "supertest";

const api = supertest(app);

describe('Testando a api', ()=>{
    it('Testando sucesso em GET: /fruits', async ()=>{
        const result = await api.get('/fruits');
        expect(result.status).toBe(200)
    });
    it('Testando falha em GET: /fruits/:id', async ()=>{
        const result = await api.get('/fruits/Haushaushaus');
        expect(result.status).toBe(404)
    });
    it('Testando falha em POST: /fruits', async ()=>{
        const result = await api.post('/fruits').send({"price": 8});
        expect(result.status).toBe(422)
    })
})