import fastify from 'fastify'

const app = fastify();

app.get('/polls', () => {
    return("Exibir enquetes")
})

app.listen({ port: 3333 }).then(() => {
    console.log("Servidor escutando na porta 3333")
})