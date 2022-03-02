({
    myAction : function(component, event, helper) {

    },
    playerMove : function(component, event, helper) {
        var row = component.find("numRow").getElement().value;
        var column = component.find("numColumn").getElement().value;
        var move = component.find("move").getElement().value;

        var appevent =$A.get("e.c:makingTheMove");
        appevent.setParams({"row":row, "column": column, "move" : move});

        appevent.fire()
    }
})
