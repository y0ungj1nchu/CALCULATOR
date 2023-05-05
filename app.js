let Numcheck = false //처음에는 아무것도 적혀있지 않은 상태이므로 false
function Output(char) {
    if(Numcheck == false) {   
        if(isNaN(char) == true) { 
            del()                                            //연산자를 입력 받았을 때 del함수를 호출 후,       
            document.getElementById("line1").value += char;  //입력했던 연산자를 line1에 표시
        }
        else {
            document.getElementById("line1").value += char;  //연산자가 아니면 line1에 표시
        }
    }
    else{
        document.getElementById('line1').value += char   //숫자를 입력받았으면 line1에 표시
    }

    if(isNaN(char) == true) {
        Numcheck = false; //숫자가 아닌게 참이라면 ture
    }
    else{
        Numcheck = true; // 숫자가 아닌게 거짓이라면 false
    }
    
}
function cal() {
    const line1 = document.getElementById("line1");
    let line2 = eval(line1.value); //블록변수line2에 line1의 값을 eval함수로 계산하여 값넣기
    document.getElementById('line2').value = line2;  //line2에 블록변수line2 표시
}
function reset() {
    document.getElementById("line1").value = "";  //line1 전부 초기화
    document.getElementById('line2').value = "";  //line2 전부 초기화
}
function del() {
    let line1 = document.getElementById("line1");
    line1.value = line1.value.substring(0, line1.value.length - 1);  //line1에 0번째 값을 길이에 1만큼 삭제
}