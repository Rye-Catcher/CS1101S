function memo(fun) {	    
    let already_run = false;
    let result = undefined;
    return () => {
                     if (!already_run) {
                         result = fun();
                         already_run = true;
                         return result;
                     } else {
                         return result;
                     }
	         };
}

const max_display = 9;
function display_stream(s) {
    function display_stream_iter(st, n) {
        if (is_null(st)) {
        } else if (n === 0) {
            display('', "...");
        } else {
            display(head(st));
            display_stream_iter(stream_tail(st), n - 1);
        }
    }
    display_stream_iter(s, max_display);
}


function stream_combine(f, s1, s2) {
    return is_null(s1) && is_null(s2)
        ? null
        : is_null(s1) || is_null(s2)
        ? error(null, "unexpected argument -- stream_combine")
        : pair(f(head(s1),head(s2)), 
               memo(() => stream_combine(f, stream_tail(s1),
                                         stream_tail(s2))));
}

function scale_stream(stream, factor) {
    return stream_map(x => x * factor,
                      stream);
}

function add_streams(s1, s2) {
    return stream_combine((x1, x2) => x1 + x2, s1, s2);
}

function integrate_series(s) {
    function helper(ss, iter) {
        return pair(head(ss) / iter, () => helper(stream_tail(ss), iter + 1));
    }
    return helper(s, 1);
}

function partial_sum(s) {
    return pair(head(s), () => add_streams(stream_tail(s), partial_sum(s)));
}

const exp_series = 
    pair(1, () => integrate_series(exp_series));
    
const exp_stream = partial_sum(exp_series);

const cos_series = pair(1, () => integrate_series(
        pair(0, 
            () => stream_map(
                    (x) => (-x), 
                    integrate_series(cos_series)))));
                    
const sin_series = pair(0, () => integrate_series(
        pair(1,
            () => integrate_series(
                stream_map(x => -x, sin_series)
                ))
        ));
//display_stream(cos_series);
display_stream(partial_sum(sin_series));
const add_series = add_streams;

function mul_series(s1, s2) {
    return pair(head(s1) * head(s2), 
        () => add_streams(
                mul_series(stream_tail(s1), s2), 
                scale_stream(s1, head(s2))));
} 
    
const one = add_series(
    partial_sum(mul_series(sin_series, sin_series)), 
    partial_sum(mul_series(cos_series, cos_series)));

const sqr_sin = mul_series(sin_series, sin_series);
//display_stream((sqr_sin));
//display_stream(one);