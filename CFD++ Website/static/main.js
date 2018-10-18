flatpickr(".datepicker", {});

const choices = new Choices('[data-trigger]',
      {
        searchEnabled: false,
        itemSelectText: '',
      });

function validateForm() {
    var x = document.forms["myForm"]["date"].value;
    if (x == "") {
        alert("Date must be filled out");
        return false;
    }
}
