function meuEscopo() {
  const form = document.querySelector("#form");
  const resultado = document.querySelector("#resultado");
  const pessoas = [];

  function handleClickSubmit(evento) {
    evento.preventDefault();
    const nome = form.querySelector("#nome-form").value;
    const sobrenome = form.querySelector("#sobrenome-form").value;
    const peso = form.querySelector("#peso-form").value;
    const altura = form.querySelector("#altura-form").value;
    pessoas.push({
      nome: nome,
      sobrenome: sobrenome,
      peso: peso,
      altura: altura,
    });
    console.log(pessoas);

    resultado.innerHTML += `<p><strong>${nome}</strong> <strong>${sobrenome}</strong> mede <strong>${altura}</strong> m e pesa <strong>${peso}</strong> quilos</p>`
  }

  form.addEventListener("submit", handleClickSubmit);
}
meuEscopo();


