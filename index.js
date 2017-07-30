const app = "I don't do much.";
const token = "df2e25748b4bb544105b2ec1d9a69ee0b5ed8709"

fetch("https://api.github.com/user/repos",
  {headers:
    {Authorization: `token ${token}`}
  }
  ).
  then(res => res.json()).
  then(json => console.log(json))
