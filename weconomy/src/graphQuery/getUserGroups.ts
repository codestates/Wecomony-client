const getUserGroups = (id : number) => {
  const query =
    `query {
      userGet(where:{id:${id}}){
        Meets{
          id
          meetName
          totalcost
          Users{
            id
            email
            img
          }
     }
     }
    }`
   return query;
}

export default getUserGroups