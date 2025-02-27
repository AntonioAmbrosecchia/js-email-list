let mailGen = {
    "success": true,
    "response": "morar.jorge@bradtke.biz"
};

console.log(mailGen);


let arrEmail = []

for (let i = 0; i < 10; i++) {
    arrEmail.push(mailGen.response)
};

console.log(arrEmail);