const updateTotalCost = (id : number, totalcost: string) => {
  const query = `mutation {
    meetEdit(Meet:{id:${id}, totalcost : ${totalcost}}){
      id
      totalcost
    }
    }`
    return query
}

export default updateTotalCost