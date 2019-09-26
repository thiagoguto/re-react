import { gql } from "apollo-boost";

const QueryHome = gql`
  query QUERY_HOME {
    banner: nodeQuery(
      sort: { field: "created", direction: ASC }
      filter: { conditions: [{ field: "type", value: "article" }] }
    ) {
      dados: entities {
        ... on NodeArticle {
          title
          img: fieldImage {
            link: derivative(style: BANNER) {
              url
            }
          }
          id: uuid
        }
      }
    }
    sobre: nodeById(id: "14") {
      ... on NodeSobre {
        title
        body {
          value
        }
        img: fieldImage {
          link: derivative(style: CARD) {
            url
          }
        }
      }
    }
    beneficios: nodeQuery(
      filter: { conditions: [{ field: "type", value: "beneficios" }] }
    ) {
      dados: entities {
        ... on NodeBeneficios {
          title
          cor: fieldCor
          body {
            value
          }
          img: fieldImage {
            link: derivative(style: CARD) {
              url
            }
          }
          id: uuid
        }
      }
    }
    rede: taxonomyTermQuery(
      sort: { field: "name", direction: ASC }
      filter: {
        groups: {
          conditions: [
            {
              field: "name"
              value: ["Cursos", "Farmácias", "Cultura & Lazer", "Restaurante"]
            }
          ]
        }
      }
    ) {
      dados: entities {
        name: entityLabel
        id: entityUuid
        ... on TaxonomyTermRedeDeParceiros {
          item: reverseFieldCategoriaNode(limit: 12) {
            dados: entities {
              ... on NodeParceiros {
                title
                id: uuid
                img: fieldCapa {
                  url
                }
              }
            }
          }
        }
      }
    }
    depoimentos: nodeQuery(
      filter: { conditions: [{ field: "type", value: "page" }] }
    ) {
      dados: entities {
        ... on NodePage {
          title
          body {
            value
          }
          img: fieldAvatar {
            url
            alt
          }
          id: uuid
        }
      }
    }
    calculadora: nodeQuery(
      sort: { field: "created", direction: ASC }
      filter: { conditions: [{ field: "type", value: "simulador" }] }
    ) {
      dados: entities {
        ... on NodeSimulador {
          title
          id: uuid
          convenio: fieldConvenio
          particular: fieldParticular
        }
      }
    }
  }
`;
export default QueryHome;
