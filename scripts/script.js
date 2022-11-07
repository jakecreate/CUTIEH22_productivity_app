const habitStack = document.querySelector(".habit-stack");

habitStack.addEventListener('keydown', (event) => {
    console.log(event.code);
        if (event.code == "Enter") {
        let input = habitStack.querySelector('input');
        let a = document.createElement('a');
        a.href = './source.html';
        let br = document.createElement('br')
        let inputTag = document.createElement('input');

        a.innerHTML = input.value;
        event.preventDefault();
        input.remove();

        habitStack.appendChild(a);
        habitStack.appendChild(br)

        inputTag.type="text";
        inputTag.placeholder = "create a new stack";

        habitStack.appendChild(inputTag);
        }
        
});

const mySchedule = document.querySelector(".my-schedule");


mySchedule.addEventListener('keydown', (event) => {
    console.log(event.code);
        if (event.code == "Enter") {
            event.preventDefault();
            // get id of check box for label
            let currCheckBox = mySchedule.querySelectorAll('input');
            let CBId = currCheckBox[currCheckBox.length - 2].id;

            // get content of inputLabel for label
            let inputLabel = mySchedule.querySelectorAll("input");
            let contentOfLabel = inputLabel[inputLabel -1];

            // remove inputLabel
            inputLabel[inputLabel.length - 1].remove();
            // create label / content = inputLabel.innerHTML;
            let label = document.createElement('label');
            label.for = CBId;
            label.innerHTML = contentOfLabel;
            event.preventDefault();

            mySchedule.appendChild(label);
            mySchedule.appendChild(document.createElement('br'));

            // create checkbox with id++
                let newCheckBox = document.createElement('input');
                newCheckBox.type = "checkbox";
                newCheckBox.id = CBId++;

                mySchedule.appendChild(newCheckBox);
            // create label
            let newInput = document.createElement('input');
            newInput.placeholder = '[time] [location] event';
            mySchedule.appendChild(newInput);



        }
        
});

const identityStatement = document.querySelector(".identity-statement");

identityStatement.addEventListener('keydown', (event) => {
    console.log(event.code);
    if (event.code == "Enter") {
        let input = identityStatement.querySelector('input');
        let a = document.createElement('p');
        let br = document.createElement('br')
        let inputTag = document.createElement('input');

        a.innerHTML = input.value;
        event.preventDefault();
        input.remove();

        identityStatement.appendChild(a);

        inputTag.type="text";
        inputTag.placeholder = "I will be... / I am...";

        identityStatement.appendChild(inputTag);
        }
        
});
