let rowValueEntered;
let columnValueEntered;
let rowFirstContainer;
let columnFirstContainer;
let box;
let rows;
let columns;
let form = document.forms[0];
let height = form.elements.columns;
let width = form.elements.rows;
let promise = new Promise(function (resolve, reject) {
    // inorder to prevent the user from clicking the button before the value for width/ height has been entered and recogized by the code i used the promise object
    setTimeout(function () {
        width.addEventListener('change', rowInput);

        function rowInput() {
            rowValueEntered = parseInt(width.value);
            if (isNaN(rowValueEntered)) {
                let box = rowValueEntered;
            } else {
                rowFirstContainer = rowValueEntered;
                // value of width
            }

        }
        height.addEventListener('change', columnInput);

        function columnInput() {
            // the value for the height
            columnValueEntered = parseInt(height.value);
            if (isNaN(columnValueEntered)) {
                let notNumberContainer = columnValueEntered;
            } else {
                columnFirstContainer = columnValueEntered;
            }
        }
        let setButton = form.elements.set;
        setButton.addEventListener('click', makeGrid)

        function makeGrid() {
            let rows = rowFirstContainer;
            let columns = columnFirstContainer;
            for (i = 0; i < rows; i++) {
                for (let j = 0; j < columns; j++) {
                    let div = document.createElement("div");
                    div.classList = "grid-cell";
                    div.style.backgroundColor = "white";
                    box = document.getElementById("grid");
                    box.prepend(div);
                    // cell creation
                }
            }
            let accessGridContainer = document.getElementById("grid");
            accessGridContainer.style.setProperty("--rows", rows);
            accessGridContainer.style.setProperty("--columns", columns);

        }

    }, 1000)

});
let colorPicker = document.querySelector("#color");
colorPicker.addEventListener('change', setTheBackground);

function setTheBackground() {
    let EventHandlerToParentElement = document.querySelector("#grid");
    EventHandlerToParentElement.addEventListener('click', changesTheColorOfTheCell);

    function changesTheColorOfTheCell(event) {
        let eventTargetContainer = event.target;
        if (event.target.className == "grid-cell") {
            eventTargetContainer.style.backgroundColor = colorPicker.value;
        }
        // color selector code

    }
}
//   reload code
let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", resetThePage);

function resetThePage() {
    location.reload(true);
}