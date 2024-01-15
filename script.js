function replaceAt(string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}
function flames() {
    var res = document.getElementById("output");
    var a = document.getElementById("name1").value.toLowerCase();
    var b = document.getElementById("name2").value.toLowerCase();
    if (a != "" && b != "") {
        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    a = replaceAt(a, i, '*');
                    b = replaceAt(b, j, '*');
                }
            }
        }
        var countLetters = 0;
        for (i = 0; i < a.length; i++) {
            if (a[i] != '*') {
                countLetters++;
            }
        }
        for (i = 0; i < b.length; i++) {
            if (b[i] != '*') {
                countLetters++;
            }
        }
        var flames = "FLAMES";
        var c = 0;
        var l = 1;
        for (i = 0; flames.length != 1; i++) {
            if (l == countLetters) {
                if (c >= flames.length) {
                    c = 0;
                }
                flames = replaceAt(flames, c, '');
                l = 1;
            }
            if (c >= flames.length) {
                c = 0;
            }
            l++;
            c++;
        }
        switch (flames) {
            case 'F':
                flames = "Friendship🫂";
                break;
            case 'L':
                flames = "Love💗.";
                break;
            case 'A':
                flames = "Affection🥰❤";
                break;
            case 'M':
                flames = "Marriage👫🏻";
                break;
            case 'E':
                flames = "Enemies😈";
                break;
            case 'S':
                flames = "Sister👧🏻";
                break;
        }
        res.innerHTML = "<b style='color:black;'> The Relationship between " + document.getElementById("name1").value + "</b> and " + document.getElementById("name2").value + " is <span style='color:red;'>" + flames + "</span></b>";

       } else {
        res.innerHTML = "Please Enter Two Names";
    }
}

function clearFields() {
    // Clear the input fields
    document.getElementById('name1').value = '';
    document.getElementById('name2').value = '';

    // Clear the output
    document.getElementById('output').innerHTML = '';
}