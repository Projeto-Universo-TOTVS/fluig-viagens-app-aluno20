/**
 * Dataset customizado: ds-viagens-paises-aluno20
 * Lista de países para o app de viagens.
 * Colunas: codigo (ISO 3166-1 alfa-3), nome (pt-BR), sigla (ISO 3166-1 alfa-2).
 *
 * Executado no servidor (motor Rhino, base ES5): usar apenas var/function.
 */
function createDataset(fields, constraints, sortFields) {
    var dataset = DatasetBuilder.newDataset();

    try {
        dataset.addColumn("codigo");
        dataset.addColumn("nome");
        dataset.addColumn("sigla");

        var paises = [
            ["BRA", "Brasil", "BR"],
            ["ARG", "Argentina", "AR"],
            ["CHL", "Chile", "CL"],
            ["URY", "Uruguai", "UY"],
            ["PRY", "Paraguai", "PY"],
            ["PER", "Peru", "PE"],
            ["COL", "Colômbia", "CO"],
            ["MEX", "México", "MX"],
            ["USA", "Estados Unidos", "US"],
            ["CAN", "Canadá", "CA"],
            ["PRT", "Portugal", "PT"],
            ["ESP", "Espanha", "ES"],
            ["FRA", "França", "FR"],
            ["ITA", "Itália", "IT"],
            ["DEU", "Alemanha", "DE"],
            ["GBR", "Reino Unido", "GB"],
            ["JPN", "Japão", "JP"],
            ["CHN", "China", "CN"],
            ["AUS", "Austrália", "AU"],
            ["ZAF", "África do Sul", "ZA"]
        ];

        for (var i = 0; i < paises.length; i++) {
            dataset.addRow(paises[i]);
        }
    } catch (e) {
        dataset = DatasetBuilder.newDataset();
        dataset.addColumn("ERROR");
        dataset.addRow([String(e)]);
    }

    return dataset;
}
