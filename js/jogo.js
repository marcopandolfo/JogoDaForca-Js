// eslint-disable-next-line no-unused-vars
const criaJogo = () => {
    let palavraSecreta = '';
    const lacunas = [];
    let etapa = 1;

    const criaLacunas = () => {
        for (let i = 0; i < palavraSecreta.length; i += 1) {
            lacunas.push('');
        }
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
