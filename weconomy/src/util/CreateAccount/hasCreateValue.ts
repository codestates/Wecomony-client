interface props {
    cost: any;
    desc: any;
    dateTime:string;
    meetId:any;
  }


const hasCreateValue = (income1:props, income2:props, outcome1:props, outcome2:props, selectedDate:Date, selectedMeet:string) => {
    
    const arr = [income1, income2, outcome1, outcome2]

    const arr2 = [];


    for (let i = 0; i < 4; i++) {
        if (arr[i].cost !== null || arr[i].desc !== null) {
            arr[i].meetId = selectedMeet
            arr[i].dateTime = selectedDate.toLocaleDateString()
            arr2.push(arr[i])
        }
    }
    return arr2;
}

export default hasCreateValue;

// income1, income2, outcome1, outcome2 를 인수로 받는다.

// 받아온 인수에 length 가 있는 것들만 return 한다.