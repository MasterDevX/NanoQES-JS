function SetENG(){
    l1 = "Solve";
    l2 = "Value \"a\" can not be equal to 0!";
    l3 = "\"a\" value:";
    l4 = "\"b\" value:";
    l5 = "\"c\" value:";
    l6 = "New Equation";
    l7 = "1. Find a discriminant:";
    l8 = "&nbsp&nbsp&nbsp Equation has two roots, because discriminant is greater than 0.";
    l9 = "2. Calculate square root of discriminant:";
    l10 = "3. Find roots of equation (X₁ and X₂):";
    l11 = "&nbsp&nbsp&nbsp Equation has only one root, because discriminant is equal to 0.";
    l12 = "2. Find root of equation:";
    l13 = "&nbsp&nbsp&nbsp Equation has no roots, because discriminant is less than 0.";
    l14 = "Solution:";
    SetLANG();
}
function SetUKR(){
    l1 = "Розв'язати";
    l2 = "Значення \"a\" не може дорівнювати 0!";
    l3 = "Значення \"a\":";
    l4 = "Значення \"b\":";
    l5 = "Значення \"c\":";
    l6 = "Нове Рівняння";
    l7 = "1. Знайдіть дискримінант:";
    l8 = "&nbsp&nbsp&nbsp Дискримінант більший, ніж 0, тому рівняння має два корені.";
    l9 = "2. Вирахуйте квадратний корінь з дискримінанту:";
    l10 = "3. Знайдіть корені рівняння (X₁ та X₂):";
    l11 = "&nbsp&nbsp&nbsp Дискримінант дорівнює 0, тому рівняння має тільки один корінь.";
    l12 = "2. Знайдіть корінь рівняння:";
    l13 = "&nbsp&nbsp&nbsp Дискримінант менший, ніж 0, тому рівняння не має коренів.";
    l14 = "Розв'язання:";
    SetLANG();
}
function SetLANG(){
    if(sbts == 0){
        document.getElementById("solvebutton").innerHTML = l6;
        SolvedOut();
    }
    if(sbts == 1){document.getElementById("solvebutton").innerHTML = l1};
    document.getElementById("label_a").innerHTML = l3;
    document.getElementById("label_b").innerHTML = l4;
    document.getElementById("label_c").innerHTML = l5;
}
