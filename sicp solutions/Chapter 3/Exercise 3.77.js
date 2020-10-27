// SICP JS 3.5.4

/*
function integral(delayed_integrand, initial_value, dt) {
    const integ =
        pair(initial_value,
             () => {
                 const integrand = delayed_integrand();
                 return add_streams(scale_stream(integrand, dt), 
                                integ);
               });
    return integ;
}
*/
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

function integral(delayed_integrand, initial_value, dt) {
    return pair(initial_value, 
        () => {
            const integrand = delayed_integrand();
            return is_null(integrand) 
                ? null
                : integral(memo(() => stream_tail(delayed_integrand())),
                        dt * head(integrand) + initial_value,
                        dt);
        });
}

function solve(f, y0, dt) {
    const y = integral( () => dy, y0, dt);
    const dy = stream_map(f, y);
    return y;
}

stream_ref(solve(y => y, 1, 0.001), 500);