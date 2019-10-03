export const APIURL = "https://api.rebeneficios.ml";
const AllyaURL = "https://backend.allya.com.br/api/Establishments/";
const APIALLYADETAL = "ffa653df964a4ba5887dcc1f?filter={'include':{'relation':'addresses'}}";
const APIALLYA = `${AllyaURL}exploreLocation?`;
const location = "location=-19.8157,-43.9542";
const companyId = "&companyId=02fa7bf04bf845a680a6eb97";
const limit = "&limit=0";
const categories = "&categories=";
const API_RE = {
  url: APIURL,
  login: `${APIURL}/user/login?_format=json`,
  register: `${APIURL}/user/register?_format=json`,
  requestPass: `${APIURL}/user/password?_format=json`,
  detalhe: AllyaURL + APIALLYADETAL,
  allya: APIALLYA,
  lo: location,
  co: companyId,
  li: limit,
  ca: categories
};

export default API_RE;
