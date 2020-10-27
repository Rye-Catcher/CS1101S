// SICP JS 3.3.2

function front_ptr(deque) {
    return head(deque);
}

function rear_ptr(deque) {
    return tail(deque);
}
function set_front_ptr(deque, item) {
    set_head(deque, item);
}
function set_rear_ptr(deque, item) {
    set_tail(deque, item);
}
function is_empty_deque(deque) {
    return is_null(front_ptr(deque));
}
function make_deque() {
    return pair(null, null);
}

function prev_deque_ptr(ptr) {
    return tail(head(ptr))();
}
function item_deque_ptr(ptr) {
    return head(head(ptr));
}
function set_deque_ptr_prev(ptr, new_prev) {
    set_tail(head(ptr), () => new_prev);
}

function front_deque(deque) {
    return is_empty_deque(deque)
        ? error(deque, "front_deque called with an empty deque")
        : item_deque_ptr(front_ptr(deque));
}
function rear_deque(deque) {
    return is_empty_deque(deque)
        ? error(deque, "rear_deque called with an empty deque")
        : item_deque_ptr(rear_ptr(deque));
}

function front_insert_deque(deque, item) {
    const new_pair = pair(pair(item, () => null), front_ptr(deque));
    if(is_empty_deque(deque)) {
        set_front_ptr(deque, new_pair);
        set_rear_ptr(deque, new_pair);
    } else {
        set_front_ptr(deque, new_pair);
        set_deque_ptr_prev(tail(front_ptr(deque)), front_ptr(deque));
    }
    return deque;
}
function front_delete_deque(deque) {
    if(is_empty_deque(deque)){
        error(deque, "front_delete_deque called with an empty deque");
    } else {
        set_front_ptr(deque, tail(front_ptr(deque)));
        if(!is_empty_deque(deque)) {
            set_deque_ptr_prev(front_ptr(deque), null);
        } else {}
    }
    return deque;
}
function rear_insert_deque(deque, item) {
    const new_pair = pair(pair(item, () => rear_ptr(deque)), null);
    if(is_empty_deque(deque)) {
         set_front_ptr(deque, new_pair);
         set_rear_ptr(deque, new_pair);
     } else {
         set_tail(rear_ptr(deque), new_pair);
         set_rear_ptr(deque, new_pair);
     }
     return deque;
}
function rear_delete_deque(deque) {
    if(is_empty_deque(deque)){
        error(deque, "rear_delete_deque called with an empty deque");
    } else {
        if(is_null(prev_deque_ptr(rear_ptr(deque)))) {
            set_front_ptr(deque, null); 
            set_rear_ptr(deque, null);
        } else {
            set_rear_ptr(deque, prev_deque_ptr(rear_ptr(deque)));
            set_tail(rear_ptr(deque), null);
        }
    }
    return deque;
}

const deque = make_deque();
is_empty_deque(deque);
front_insert_deque(deque, 2);
front_insert_deque(deque, 3);
//front_insert_deque(deque, 52);
rear_insert_deque(deque, 4);
rear_insert_deque(deque, 5);
//front_deque(deque);
//rear_deque(deque);
rear_delete_deque(deque);
//rear_deque(deque);
//rear_delete_deque(deque);
//front_deque(deque);
//front_insert_deque(deque, 4);
//rear_deque(deque);
//rear_deque(deque);
//front_delete_deque(deque);
