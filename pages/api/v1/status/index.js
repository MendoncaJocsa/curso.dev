function status(resquest, response) {
  //response.status(200).send("alunos do curso.dev são pessoas acima da média");
  response.status(200).json({ chave: "são acima da média" });
}

export default status;
