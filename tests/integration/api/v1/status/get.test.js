test("Get to http://localhost:3000/api/v1/status should return 200", async () =>{
    const resultado = await fetch("http://localhost:3000/api/v1/status");
    expect(resultado.status).toBe(200);
})