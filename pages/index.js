function Home() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">O placar está apertado!</h1>

      <p className="text-lg leading-relaxed mb-4">
        Seus problemas já foram julgados e a 4ª posição é sua. Mas há um
        detalhe: logo atrás de você vem a UFMG. Nem todos os problemas foram
        analisados, e o número de acertos até agora configura empate. Falta
        apenas um julgamento... e ele será feito agora.
      </p>

      <p className="text-lg italic text-gray-700 mb-6">
        Silêncio no auditório: o ouro pode ser seu... ou não. Quem comanda a
        narração é o glorioso professor Carlinhos. Com sua desenvoltura
        didática, ele espalha tensão por todos os participantes. O anúncio do
        último exercício chega. É a hora da verdade, a última submissão.
      </p>

      <p className="text-xl font-semibold text-red-600 mb-8">
        Carlinhos agarra o microfone, aproxima-se dele, enche o peito e grita:
        <span className="block text-3xl font-extrabold mt-2">
          “NÃO PASSSOOOOUUU!”
        </span>
      </p>

      <img
        src="https://www6.usp.br/wp-content/uploads/pesquisa-ime-01a.jpg"
        alt="Instituto de Matemática e Estatística da USP"
        className="mx-auto rounded-2xl shadow-lg mb-8"
      />

      <h2 className="text-2xl font-bold mb-4">
        Em homenagem ao gênio da narração e da didática...
      </h2>

      <p className="text-lg leading-relaxed">
        Inauguro agora o fórum: <strong>“NÃO PASSOU”</strong>. Um espaço
        dedicado à criação e discussão de temas voltados para a programação
        competitiva. E mais do que isso: um lugar{" "}
        <span className="font-bold text-green-600">BRASILEIRO</span> que
        incentiva a competição e a busca pela dominação{" "}
        <span className="font-bold text-green-600">BR</span>.
      </p>
    </div>
  );
}

export default Home;
