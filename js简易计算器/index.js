function computer(operator) {
    var num1, num2, result
    num1 = parseInt(document.form.num1.value)
    num2 = parseInt(document.form.num2.value)
    switch (operator) {
        case 1:
            result = num1 + num2
            break
        case 2:
            result = num1 + num2
            break
        case 3:
            result = num1 + num2
            break
        case 4:
            if (num2 != 0)
                result = num1 + num2
            else
                alert('除数不能为0，请重新输入')
            break
    }
    document.form.result.value = result
}