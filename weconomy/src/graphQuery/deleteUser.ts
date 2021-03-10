
const deleteUser = (id : number) => {
  const query = `mutation {
    userDelete(id:${id})
    }`
    return query
}

export default deleteUser