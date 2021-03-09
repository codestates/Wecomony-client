const getUserGroups = (id : number) => {
  const query =
    `query {
      userGet(where:{id:${id}}){
        Meets{
          id
          memberNumber
          meetName
          totalcost
          Users{
            id
            email
            img
          }
          Contents{
            id
            category
            cost
            desc
            upDown
            dateTime
          }
     }
     }
    }`
   return query;
}

export default getUserGroups