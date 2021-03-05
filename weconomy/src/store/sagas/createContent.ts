import axios from 'axios';

import createNewContent from '../../graphQuery/createNewContent';


function* workerCreateContent (action:any) {

    yield console.log(action.value)
    
    for (let i = 0; i < 4; i++) {
        axios.post('https://sench.projects1faker.com/graphql?query=' +
        encodeURIComponent(createNewContent(action.value[i]))
        ).then(res => {
            console.log(res)
        })
    }
    
}

export default workerCreateContent