//Alert function

const setAlert = (msg, type = 'danger') => {
 return `<p class="alert alert-${type} d-flex justify-content-between">${msg} <button data-bs-dismiss="alert" class= "btn-close"></button></p>`;
}

// Area calculate

const areaCal = (type, val1, val2 = '') =>{
    if(type == 'Rectangle'){
        return setAlert(`The area of rectangle is ${val1 * val2}`, 'success');

    }else if(type == 'Square'){
        return setAlert(`The area of square is ${val1 * val1}`, 'success');
    

    }else if(type == 'Triangle'){
        return setAlert(`The area of Triangle is ${ .5 * val1 * val2}`, 'success');

    }else if(type == 'Circle'){
        return setAlert(`The area of Circle is ${ 3.1416 * (val1 * val1)}`, 'success');
    }
}