const hasManyAccount = (id: number) => {

  const query = `query {
    userGet(where:{id: ${id}}){
     Meets{
       id
       meetName
       totalcost
     }
   }
   }
  `
  return query
}

export default hasManyAccount