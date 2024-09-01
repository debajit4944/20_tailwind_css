$(document).ready(function(){
    let open = false;
    let sandwichBtn = false;
    $("#mobile-menu").hide();
    //Function to show element
    function showElement(){
        open = !open;
        if(open == true){
            //do something like addClass() or show()
            $("#sandwichSvg").addClass('block');
            $("#crossSvg").addClass('hidden');
            $("#sandwichBtn").click(function(){
                    sandwichBtn = !sandwichBtn;
                    if(sandwichBtn){
                        $("#mobile-menu").show();
                    }
                    else{
                        $("#mobile-menu").hide();
                    }
            });
            
        }
        else{
            //do something like removeClass() or hide()
            $("#sandwichSvg").addClass('hidden');
            $("#crossSvg").addClass('block');
        }
    }

    // $("#sandwichBtn").click(function(){
        showElement();
    // });
    let dropdown_open = false;

    $('#profileMenu').hide();

    $('#profileDropdown').click(function() {
        dropdown_open = !dropdown_open;
        if (dropdown_open) {
        $('#profileMenu').show();
        } else {
        $('#profileMenu').hide();
        }
    });
});