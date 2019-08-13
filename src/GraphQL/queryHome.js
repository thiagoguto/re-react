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
    depoimentos: nodeQuery(
      filter: { conditions: [{ field: "type", value: "page" }] }
    ) {
      dados: entities {
        ... on NodePage {
          title
          prof: fieldProf
          body {
            value
          }
          img: fieldAvatar {
            url
          }
          id: uuid
        }
      }
    }
  }
`;
export default QueryHome;
