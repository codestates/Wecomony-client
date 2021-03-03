interface props {
    category: any;
    cost: any;
    desc: any;
  }


 const validCheck = (income1:props, income2:props, outcome1:props, outcome2:props, outcomeCounter:number, incomeCounter:number) => {

    const obj = {error: 'none'}

    if (!income1.cost && !income1.desc) { // 수입을 작성하지 않으면
      if (outcomeCounter === 1) { // 지출 항목이 1개일 때
        if (!outcome1.category || !outcome1.cost || !outcome1.desc) {
            obj.error = "지출 칸에 작성하지 않은 부분이 있습니다."
        }
      } else if (outcomeCounter > 1) { // 지출 항목이 2개 일 때
        if (!outcome1.category || !outcome1.cost || !outcome1.desc) {
           obj.error = "지출 칸에 작성하지 않은 부분이 있습니다."
        } else if (!outcome2.category || !outcome2.cost || !outcome2.desc) {
            obj.error = "지출 칸에 작성하지 않은 부분이 있습니다."
        }
      }
    } else if ((income1.cost && !income1.desc) || (!income1.cost && income1.desc)) { // 수입 첫 항목 중 하나가 비어있다면
        obj.error = "수입 칸에 작성하지 않은 부분이 있습니다."
    } else if ((income2.cost && !income2.desc) || (!income2.cost && income2.desc)) {
        obj.error = "수입 칸에 작성하지 않은 부분이 있습니다."
    } else if (isNaN(income1.cost) || isNaN(income2.cost)) {
        obj.error = "수입의 금액 칸은 숫자만 입력해주세요."
    }
    
     if (!outcome1.cost && !outcome1.desc) {
      if (incomeCounter === 1) {
        if (!income1.category || !income1.cost || !income1.desc) {
            obj.error = "수입 칸에 작성하지 않은 부분이 있습니다."
        }
      } else if (incomeCounter > 1) {
        if (!income1.category || !income1.cost || !income1.desc) {
            obj.error = "수입 칸에 작성하지 않은 부분이 있습니다."
        } else if (!income2.category || !income2.cost || !income2.desc) {
            obj.error = "수입 칸에 작성하지 않은 부분이 있습니다."
        }
      }
    } else if ((outcome1.cost && !outcome1.desc) || (!outcome1.cost && outcome1.desc)) {
       obj.error = "지출 칸에 작성하지 않은 부분이 있습니다."
    } else if ((outcome2.cost && !outcome2.desc) || (!outcome2.cost && outcome2.desc)) {
        obj.error = "지출 칸에 작성하지 않은 부분이 있습니다."
    } else if (isNaN(outcome1.cost) || isNaN(outcome2.cost)) {
        obj.error = "지출의 금액 칸은 숫자만 입력해주세요."
    }
     return obj
  };

  export default validCheck;