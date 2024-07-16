sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',

], function(Controller,MessageToast) {
    'use strict';
    return Controller.extend("project1.controller.BaseController",{
       
        onInit: function(){
           
        },
        showMessage: function(message) {
            // Utility method to show a message toast
            MessageToast.show(message);
        }
    });
});