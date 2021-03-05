const createNewContents = (value:any) => {

       const query = `mutation {
            contentAdd(Content:{
                category: "${value.category}"
                cost:"${value.cost}"
                desc:"${value.desc}"
                upDown:"${value.upDown}"
                dateTime:"${value.dateTime}"
                meetId:"${value.meetId}"
            })
        }`

        return query

}

export default createNewContents;