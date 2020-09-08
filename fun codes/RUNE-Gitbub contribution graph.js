/*Rune Github contribution graph*/
/*Lyu Xiaoteng*/

function set_green(num) {
    return num === 1
        ? color(square, 0.13, 0.43, 0.22)
        : num === 2
            ? color(square, 0.19, 0.63, 0.31)
            : num === 3
                ? color(square, 0.25, 0.77, 0.39)
                : num === 4
                    ? color(square, 0.61, 0.91, 0.66)
                    : num === 5
                        ? color(square, 0.92, 0.93, 0.94)
                        : black;
}

function set_blank() {
    return color(square, 1, 1, 1);
}

function gen_center_square() {
    return set_green(math_ceil(math_random() * 5));
}

function gen_element() {
    return scale(0.8, gen_center_square());    
}

function gen_line(n) {
    return n === 1
        ? gen_element()
        : beside_frac(
            1 / n,
            gen_element(),
            gen_line(n - 1));
}

function gen_graph(n, m) {
    return n === 1
        ? gen_line(m)
        : stack_frac(
            1 / n,
            gen_line(m),
            gen_graph(n - 1, m));
}

function adjusted_graph(n, m) {
    return scale_independent(1, n / m , gen_graph(n, m));
}

show(adjusted_graph(7, 24));