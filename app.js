// setTimeout:
const helloSetTimeout = () => {
        console.log('Hey Bro, I come from USA within 3.5 second, hahaha!!!');
}
setTimeout(helloSetTimeout, 3400);

// Add Number Using Prompt:
const addNumber = () => {
        const num = prompt('Enter Number Please!');
        const numParse = parseFloat(num);
        if (numParse && typeof numParse === 'number') {
                alert(numParse + 200);
        }
        else {
                alert('Dure Giya Mor, DGM');
        }
}

// Using Confirm Function:
const seeHref = () => {
        const seeHref = confirm('Do you want to see href ?')
        if (seeHref) {
                console.log('www.google.com');
        }
}