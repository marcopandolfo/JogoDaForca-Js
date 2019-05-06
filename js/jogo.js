// eslint-disable-next-line no-unused-vars
const criaJogo = () => {
    let palavraSecreta = '';
    let lacunas;
    let etapa = 1;

    const criaLacunas = () => {
        lacunas = Array(palavraSecreta.length).fill('');
    };

    const proximaEtapa = () => {
        etapa = 2;
    };

    const setPalavraSecreta = (palavra) => {
        palavraSecreta = palavra.split('');
        criaLacunas();
        proximaEtapa();
    };

    const getLacunas = () => lacunas;

    const getEtapa = () => etapa;

    return {
        setPalavraSecreta,
        getLacunas,
        getEtapa,
    };
};
