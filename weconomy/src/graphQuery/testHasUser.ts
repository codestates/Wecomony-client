const testHasUser = (email: string) => {
  const query = `query{
    userGet(where:{email:"${email}"}){
      id
    }
  }`
   return query
}

export default testHasUser