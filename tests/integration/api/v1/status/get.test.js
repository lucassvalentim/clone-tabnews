test("Get to http://localhost:3000/api/v1/status", async () =>{
    const resultado = await fetch("http://localhost:3000/api/v1/status");
    expect(resultado.status).toBe(200);
})