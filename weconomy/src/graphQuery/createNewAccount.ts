
const createNewAccount = (id : number, name : string, cost : string) => {
  const changeToNum = Number(cost)
  const query =  `mutation {
    meetAdd(Meet:{
      memberNumber: ${id}
      meetName: "${name}"
      totalcost: ${changeToNum}
    }){
      id
    }
  }`

  return query
}

export default createNewAccount
