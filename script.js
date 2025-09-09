function calcularSituacao() {
  const aulas = parseInt(document.getElementById("aulas").value);
  const faltas = parseInt(document.getElementById("faltas").value);
  const p1 = parseFloat(document.getElementById("p1").value);
  const p2 = parseFloat(document.getElementById("p2").value);
  const recInput = parseFloat(document.getElementById("recuperacao").value);

  // validação inicial
  if (isNaN(aulas) || aulas <= 0 || isNaN(faltas) || isNaN(p1) || isNaN(p2)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  // cálculo da frequência
  const percentualFaltas = (faltas / aulas) * 100;
  const frequencia = 100 - percentualFaltas;

  let mensagem = `Número de aulas do semestre: ${aulas}\n`;
  mensagem += `Número de faltas do aluno: ${faltas}\n`;
  mensagem += `Percentual de presença do aluno: ${frequencia.toFixed(2)}%\n`;
  mensagem += `Primeira nota: ${p1}\nSegunda nota: ${p2}\n`;

  // verifica frequência
  if (frequencia < 75) {
    mensagem += `Situação final: Reprovado por falta ❌`;
    alert(mensagem);
    return;
  }

  // cálculo da média
  let media = (p1 + p2) / 2;
  mensagem += `Média inicial: ${media.toFixed(2)}\n`;

  if (media >= 7) {
    mensagem += `Situação final: Aprovado ✅`;
  } else if (media >= 5) {
    if (isNaN(recInput)) {
      mensagem += `O aluno está em recuperação. Estude Mais!.\n`;
      alert(mensagem);
      return;
    }

    const novaMedia = (media + recInput) / 2;
    mensagem += `Nota da recuperação: ${recInput}\n`;
    mensagem += `Nova média: ${novaMedia.toFixed(2)}\n`;

    if (novaMedia >= 5) {
      mensagem += `Situação final: Aprovado após recuperação ✅`;
    } else {
      mensagem += `Situação final: Reprovado ❌`;
    }
  } else {
    mensagem += `Situação final: Reprovado ❌`;
  }

  // exibe resultado final em alerta
  alert(mensagem);
}