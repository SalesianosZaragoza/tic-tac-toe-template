({
    myAction : function(component, event, helper) {

    },

    painting : function(component, event, helper) {
        var row = event.getParam("row");
        var column = event.getParam("column");
        var move = event.getParam("move");

        component.get("v.var1");
        component.get("v.var2");
        component.get("v.var3");
        component.get("v.var4");
        component.get("v.var5");
        component.get("v.var6");
        component.get("v.var7");
        component.get("v.var8");
        component.get("v.var9");

        if(row == 1 && column == 1)
            component.set("v.var1", move);
        
        if(row == 1 && column == 2)
            component.set("v.var2", move);       
        
        if(row == 1 && column == 3)
            component.set("v.var3", move);
        
        if(row == 2 && column == 1)
            component.set("v.var4", move);   

        if(row == 2 && column == 2)
            component.set("v.var5", move);
        
        if(row == 2 && column == 3)
            component.set("v.var6", move);       
        
        if(row == 3 && column == 1)
            component.set("v.var7", move);
        
        if(row == 3 && column == 2)
            component.set("v.var8", move);  

        if(row == 3 && column == 3)
            component.set("v.var9", move);  
    }
})
