/*RUNE contest - Disco pacman*/
//Name: Disco Pac-Man
//Editor: Lyu Xiaoteng
//Date: 9/1/2020

function runes_contest_LYU_XIAOTENG() {
    function fade(opt, r_c, n) {
        function gen_square(r, g, b) {
            return color(square, r, g, b);
        }
        function gen_element(n, row, column) {
            const r_g = 1 - (row - 1) / (n - 1);
            const r_b = (column - 1) / (n - 1);
            return opt === 1
                ? gen_square(r_g,  r_b, r_c)
                : gen_square(r_c, r_g, r_b);
        }
        function gen_line(n, row, column) {
            return column === n
                ? gen_element(n, row, column)
                : beside_frac(
                    1 / (n - column + 1),
                    gen_element(n, row, column),
                    gen_line(n, row, column + 1));
        }
        function gen_graph(n, row) {
            return row === n
                ? gen_line(n, row, 1)
                : stack_frac(
                    1 / (n - row + 1),
                    gen_line(n, row, 1),
                    gen_graph(n, row + 1));
        }
        return gen_graph(n, 1);
    }
    function gen_cs() {
        return overlay_frac(
            0.01, 
            translate(0.4, -0.4, 
                scale(0.6, overlay_frac(0.1, scale(0.65,  rotate(math_PI, fade(1, 1, 5))), white(square)))),
            scale(0.8, fade(0, 1, 10)));
    }
    function gen_eye() {
        return stack(beside(stack(scale(0.2, black(square)), scale(0.2, black(square))), blank), blank);
    }
    function gen_pacman() {
        return scale(0.8, rotate( 7 * math_PI / 4, overlay_frac(0.01, gen_eye(), gen_cs())));
    }
    return gen_pacman();
}

// testing:
//show(runes_contest_LYU_XIAOTENG());