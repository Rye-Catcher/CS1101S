/*Studio 3 extension fractal*/
/*Lyu Xiaoteng*/

function find_len(num, n) {
    return num * num >= n 
        ? num
        : find_len(num + 1, n);
}

function besiden(num, rune) {
    return num === 1
        ? rune
        : beside_frac(
            1 / num,
            rune,
            besiden(num - 1, rune)
            );
}

function build_mid_layer(n) {
    return beside_frac(
        1 / 3,
        build_fractal(n - 1),
        beside_frac(
            1 / 2,
            square,
            build_fractal(n - 1)
            )
        );
}

function build_fractal(n) {
    return n <= 0 
        ? blank
        : stack_frac(
            1 / 3,
            besiden(3, build_fractal(n - 1)),
            stack_frac(
                1 / 2,
                build_mid_layer(n),
                besiden(3, build_fractal(n - 1))
            )
          );
}

function build_whole_row(n, len) {
    return len === 1
        ? build_fractal(n)
        : beside_frac(
            1 / len,
            build_fractal(n),
            build_whole_row(n - 1, len - 1)
            );
}


function build_whole_fractal(n, row_num, len) {
    return row_num === 1
        ? build_whole_row(n, len)
        : stack_frac(
            1/ row_num,
            build_whole_row(n, len),
            build_whole_fractal(n - len, row_num - 1, len)
          );
            
}

function gallery(n) {
    return build_whole_fractal(n, find_len(1, n), find_len(1, n));
}
show(build_fractal(3));
show(gallery(4));