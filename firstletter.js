const s = 'adfgt';

function getLetter(s) {
    let letter;
    s = s[0];
    // Write your code here
    // switch (s) {
    //     case 'a':
    //     case 'e':
    //     case 'i':
    //     case 'o':
    //     case 'u':
    //         letter = 'A';
    //         break;
    //     case 'b':
    //     case 'c':
    //     case 'd':
    //     case 'f':
    //     case 'g':
    //         letter = 'B';
    //         break;
    //     case 'h':
    //     case 'j':
    //     case 'k':
    //     case 'l':
    //     case 'm':
    //         letter = 'C';
    //         break;
    //     case 'n':
    //     case 'p':
    //     case 'q':
    //     case 'r':
    //     case 's':
    //     case 't':
    //     case 'v':
    //     case 'w':
    //     case 'x':
    //     case 'y':
    //     case 'z':
    //         letter = 'D';
    //         break;
    // }

    switch (true) {
        case s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u':
            letter = 'A';
            break;
        case s == 'b' || s == 'c' || s == 'd' || s == 'f' || s == 'g':
            letter = 'B';
            break;
        case s == 'h' || s == 'j' || s == 'k' || s == 'l' || s == 'm':
            letter = 'C';
            break;
        case s == 'n' || s == 'p' || s == 'q' || s == 'r' || s == 's' || s == 't' || s == 'v' || s == 'w' || s == 'x' || s == 'y' || s == 'z':
            letter = 'D';
            break;
    }
    return letter;
}

console.log(getLetter("easgasga"));
