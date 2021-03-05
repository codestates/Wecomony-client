import axios from 'axios';

import createNewContents from '../../graphQuery/createNewContent';


function* workerCreateContent (action:any) {
    

    for (let i = 0; i < action.value.length; i++) {
        yield axios.post('https://sench.projects1faker.com/graphql?query=' +
        encodeURIComponent(createNewContents(action.value[i]))

        ).then(res => {
            console.log(res)
        })
    }
    
}

export default workerCreateContent