// Task 5 - Implment Debounce From Scratch

function debounce(fn, t) {
    
    let id;

    return function(...args) {
        clearTimeout(id);
        id = setTimeout(()=> fn(...args), t);    
    }
}
