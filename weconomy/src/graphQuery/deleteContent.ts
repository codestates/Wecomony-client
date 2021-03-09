
const deleteContent = (id : number) => {
  const query = `mutation {
    contentDelete(id:${id})
    }`

    return query
}

export default deleteContent