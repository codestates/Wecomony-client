const getUserMeets = (id : number) => {
    const query =
      `query {
        userGet(where:{id:${id}}){
          Meets{
            id
            meetName
       }
       }
      }`
     return query;
  }
  
  export default getUserMeets