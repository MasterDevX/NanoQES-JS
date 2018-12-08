function SolveEquation(){
    if(sbts == 1){
        a = document.getElementById("input_a").value;
        b = document.getElementById("input_b").value;
        c = document.getElementById("input_c").value;
        d = (b*b)-(4*a*c);
        alias_a = a;
        if(a == 1){alias_a = ""};
        if(a == -1){alias_a = "-"};
        if(a == 0){
            alert(l2);
            return;
        }
        if(b == ""){b = 0};
        if(c == ""){c = 0};
        document.getElementById("input_b").value = b;
        document.getElementById("input_c").value = c;
        x = "x";
        if(b == 0){
            x = "";
            alias_b = "";
        }
        if(b > 0){alias_b = ("+" + b)};
        if(b < 0){alias_b = b};
        if(b == 1){alias_b = "+"};
        if(b == -1){alias_b = "-"};
        if(c == 0){alias_c = ""};
        if(c > 0){alias_c = ("+" + c)};
        if(c < 0){alias_c = c};
        xalias_a = a;
        if(a < 0){xalias_a = ("(" + a + ")")};
        xalias_b = b;
        if(b < 0){xalias_b = ("(" + b + ")")};
        xalias_c = c;
        if(c < 0){xalias_c = ("(" + c + ")")};
        bs = b*b;
        fxac = 4*a*c;
        xalias_fxac = fxac;
        if(fxac < 0){xalias_fxac = ("(" + fxac + ")")};
        dsqrt = Math.sqrt(d);
        mbpdsqrt = -b + dsqrt;
        mbmdsqrt = -b - dsqrt;
        txa = 2*a;
        xalias_txa = txa;
        if(txa < 0){xalias_txa = ("(" + txa + ")")};
        eqfinal = (alias_a + "x²" + alias_b + x + alias_c + "=0");
        document.getElementById("equationview").innerHTML = eqfinal;
        document.getElementById("solvebutton").innerHTML = l6;
        document.getElementById("input_a").readOnly = true;
        document.getElementById("input_b").readOnly = true;
        document.getElementById("input_c").readOnly = true;
        iwidth = document.getElementById("inside").offsetWidth;
        if(iwidth > 138){
            lmargin = 145 + (iwidth - 138);
            lmarginx = (lmargin + "px");
            smargin = lmargin + 13;
            smarginx = (smargin + "px");
            document.getElementById("line").style.marginLeft = lmarginx;
            document.getElementById("solved").style.marginLeft = smarginx;
        }
        SolvedOut();
        document.getElementById("solved").style.visibility = "visible";
        sbts = 0;
    }
    else{
        document.getElementById("solvebutton").innerHTML = l1;
        document.getElementById("line").style.marginLeft = "145px";
        document.getElementById("solved").style.marginLeft = "158px";
        document.getElementById("input_a").readOnly = false;
        document.getElementById("input_b").readOnly = false;
        document.getElementById("input_c").readOnly = false;
        document.getElementById("input_a").value = "";
        document.getElementById("input_b").value = "";
        document.getElementById("input_c").value = "";
        document.getElementById("solved").innerHTML = "";
        document.getElementById("solved").style.visibility = "hidden";
        document.getElementById("equationview").innerHTML = "ax²+bx+c=0";
        sbts = 1;
    }
}
function SolvedOut(){
    document.getElementById("solved").innerHTML = "";
    if(d > 0){
        xfirst = (-b + dsqrt) / (2 * a);
        xsecond = (-b - dsqrt) / (2 * a);
        document.getElementById("solved").innerHTML += l14 + "<br><br>";
        document.getElementById("solved").innerHTML += l7 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp D = b²-4ac = " + xalias_b + "²-4·" + xalias_a + "·" + xalias_c + " = " + bs + "-" + xalias_fxac + " = " + d + " > 0" + "<br>";
        document.getElementById("solved").innerHTML += l8 + "<br><br>";
        document.getElementById("solved").innerHTML += l9 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp √D = √" + d + " = " + dsqrt + "<br><br>";
        document.getElementById("solved").innerHTML += l10 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp X₁ = (-b+√D)/2a = (-" + xalias_b + "+" + dsqrt + ")/2·" + xalias_a + " = " + mbpdsqrt + "/" + xalias_txa + " = " + xfirst + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp X₂ = (-b-√D)/2a = (-" + xalias_b + "-" + dsqrt + ")/2·" + xalias_a + " = " + mbmdsqrt + "/" + xalias_txa + " = " + xsecond + "<br>";        
    }
    if(d == 0){
        xfirst = -(b / (2 * a));
        document.getElementById("solved").innerHTML += l14 + "<br><br>";
        document.getElementById("solved").innerHTML += l7 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp D = b²-4ac = " + xalias_b + "²-4·" + xalias_a + "·" + xalias_c + " = " + bs + "-" + xalias_fxac + " = " + d + "<br>";
        document.getElementById("solved").innerHTML += l11 + "<br><br>";
        document.getElementById("solved").innerHTML += l12 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp X = -(b/(2a)) = -(" + b + "/(2·" + xalias_a + ")) = -(" + b + "/" + xalias_txa + ") = " + xfirst + "<br>";
    }
    if (d < 0){
        document.getElementById("solved").innerHTML += l14 + "<br><br>";
        document.getElementById("solved").innerHTML += l7 + "<br>";
        document.getElementById("solved").innerHTML += "&nbsp&nbsp&nbsp D = b²-4ac = " + xalias_b + "²-4·" + xalias_a + "·" + xalias_c + " = " + bs + "-" + xalias_fxac + " = " + d + " < 0" + "<br>";
        document.getElementById("solved").innerHTML += l13 + "<br>";
    }
}
function SetStatus(){
    sbts = 1;
}
