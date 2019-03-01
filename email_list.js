"use strict";

var $ = function(id) {
    return document.getElementById(id);
};

var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var errorMessage = "";
    var isValid = true;
    

   

    // validate the entries
    if (emailAddress1 == "") {
        $("email_address1").nextElementSibling.firstChild.nodeValue
        = "First email address entry required";
        isValid = false; }
    else { 
        $("email_address1").nextElementSibling.firstChild.nodeValue = ""; }
        
    if (emailAddress2 == "") {
        $("email_address2").nextElementSibling.firstChild.nodeValue
        = "Second email address entry required";
        isValid = false; }
    else {
            $("email_address2").nextElementSibling.firstChild.nodeValue = ""; }

    
        if (firstName == "") {
            $("first_name").nextElementSibling.firstChild.nodeValue
            = "First name required";
            isValid = false; }
        else { 
            $("first_name").nextElementSibling.firstChild.nodeValue = ""; }
    }

    // submit the form if all entries are valid
    // otherwise, display an error message
  
window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
};
