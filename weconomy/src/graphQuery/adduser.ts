const adduser = (email: string, img: string) => {
  const query = `mutation {
    userAdd(User:{
      email: "${email}"
      img: "${img}"
    }){
      id
      email
      img
      createdAt
      updatedAt
    }
  }`
  return query
}

export default adduser