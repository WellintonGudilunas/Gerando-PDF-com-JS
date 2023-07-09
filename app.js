const btGerar = document.querySelector("#gerarPdf");

btGerar.addEventListener("click", () => {
    const conteudoPdf =  document.querySelector("#conteudo");

    const options = {
        margin: [10, 10, 10, 10],
        filename: "teste.pdf",
        html2canvas: {scale: 2},
        jsPdf: {unit: "mm", format: "a4", orientation: "portrait"}
    }

    html2pdf().set(options).from(conteudoPdf).save();
});
