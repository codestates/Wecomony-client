
const createNewAccount = (name : string, cost : string) => {
  const changeToNum = Number(cost)
  const query =  `mutation {
    meetAdd(Meet:{
      meetName: "${name}"
      totalcost: ${changeToNum}
    }){
      id
    }
  }`

  return query
}

export default createNewAccount
