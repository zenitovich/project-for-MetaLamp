import AirDatepicker from 'air-datepicker';
let button = {
    content: " Применить",
    className: "custom-button-classname",
    onClick: (dp) => {
    dp.hide();
    },
    };
    
    new AirDatepicker("#arrival", {
    buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
    // range: true,
    // inline: true,
    });
    
    new AirDatepicker("#departure", {
    buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
    });
    
    new AirDatepicker("#data-registration", {
    buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
    }); 

    new AirDatepicker("#dates", {
    buttons: [button, "clear"], // Custom button, and pre-installed 'clear' button
    });