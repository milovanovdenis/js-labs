var operator = '+'
var expression = '0 + 0'
var result

function calculate(){
    /* получаем из файла index.html данные, введённые пользователем
    и преобразовываем их к целочисленному типу */
    first_number = Number(document.getElementsByTagName("input")[0].value)
    second_number = Number(document.getElementsByTagName("input")[1].value)

    // проводим расчёты и заменяем значение поля "ответ" на полученный результат
    document.getElementById("result").innerHTML = eval(expression);
}

// функция получает числа и оператор и склеивает их в одно выражение, в последствии заменяя им значение поля "выражение"
function create_expression() {
    first_number = Number(document.getElementsByTagName("input")[0].value)
    second_number = Number(document.getElementsByTagName("input")[1].value)
    expression = first_number + " " + operator + " " + second_number
    document.getElementById('math_expression').innerHTML = expression
}