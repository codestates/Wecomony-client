const createNewContents = (value:any) => {

       const query = `mutation {
            contentAdd(Content:{
                category: "${value.category}"
                cost: ${Number(value.cost)}
                desc:"${value.desc}"
                upDown:"${value.upDown}"
                dateTime:"${value.dateTime}"
                meetId: ${Number(value.meetId)}
            }) {
                id
            }
        }`
        return query
}

export default createNewContents;