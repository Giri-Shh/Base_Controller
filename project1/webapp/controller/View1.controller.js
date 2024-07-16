sap.ui.define([
   "project1/controller/BaseController",
//    'sap/m/MessageToast',
],
    
    function (BaseController,MessageToast) {
        "use strict";

        return BaseController.extend('project1.controller.View1', {
            onInit: function () {
                debugger
                // MessageToast.show("ok Done")
                this.showMessage("ok Done");
            }
        });
    });
