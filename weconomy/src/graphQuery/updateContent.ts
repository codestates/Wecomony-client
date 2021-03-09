

const updateContent = (id : number, desc : string, cost : number) => {
const query = `mutation {
  contentEdit(Content:{id:${id}, cost:${cost}, desc:"${desc}"}){
  id
  cost
  desc
}
  }`
return query
}

export default updateContent