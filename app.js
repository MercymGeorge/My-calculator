
    document.addEventListener('DOMContentLoaded', () => {
        const display = document.querySelector('#display');
        const buttons = document.querySelectorAll('.buttons button');

        function appendToDisplay(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function calculate() {
            const expression = display.value;
            const result = eval(expression);
            display.value = result || 'Error';
        }

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const buttonText = button.textContent;
                if (buttonText === '=') calculate();
                else if (buttonText === 'C') clearDisplay();
                else appendToDisplay(buttonText);
            });
        });
    });

