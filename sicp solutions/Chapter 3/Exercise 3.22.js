function make_queue() {
    let f_ptr = null;
    let r_ptr = null;
    function front_ptr() {
        return f_ptr;
    }
    function rear_ptr() {
        return r_ptr;
    }
    function is_empty_queue() {
        return is_null(front_ptr());
    }
    function front_queue() {
        return is_empty_queue() 
            ? error(front_queue, "front_queue called with an empty queue")
            : head(front_ptr());
    }
    function insert_queue(val) {
        const new_pair = pair(val, null);
        if(is_empty_queue()) {
            f_ptr = new_pair;
            r_ptr = new_pair;
        } else {
            set_tail(r_ptr, new_pair);
            r_ptr = new_pair;
        }
    }
    function delete_queue() {
        if(is_empty_queue()) {
            error(delete_queue, "delete_queue called with an empty queue");
        } else {
            f_ptr = tail(f_ptr);
        }
    }
    function dispatch(m) {
        if(m === "front_ptr") {
            return front_ptr;
        } else if(m === "rear_ptr") {
            return rear_ptr;
        } else if(m === "is_empty_queue") {
            return is_empty_queue;
        } else if(m === "front_queue") {
            return front_queue;
        } else if(m === "insert_queue") {
            return insert_queue;
        } else if(m === "delete_queue") {
            return delete_queue;
        } else {
            error(m, "command not found");
        }
    }
    return dispatch;
}


const queue = make_queue();
queue("is_empty_queue")();
queue("insert_queue")(23);
queue("front_queue")();