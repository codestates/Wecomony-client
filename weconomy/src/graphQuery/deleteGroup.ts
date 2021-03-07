
const deleteGroup = (id : number) => {
  const query = `mutation {
    meetDelete(id:${id})
    }`
    return query
}

export default deleteGroup