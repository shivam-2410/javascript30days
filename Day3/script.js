const inputs = document.querySelectorAll(".controls input");

function handle_Update(){
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handle_Update));
inputs.forEach(input => input.addEventListener('mousemove', handle_Update));
