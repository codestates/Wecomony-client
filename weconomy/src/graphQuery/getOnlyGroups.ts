

const getOnlyGroups = (id : number) => {
  const query = `query {
    userGet(id:${id}){
    Meets{
      id
    }
   }
   }
  `
  return query;
}

export default getOnlyGroups