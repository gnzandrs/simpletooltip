/*
|--------------------------------------------------------------------------
|							Simple Tooltip 
|--------------------------------------------------------------------------
|
| author: @gnzandrs
| license: GNU
| description: this code works with a javascript object wich provides to your 
| 			 html control a div container that allow show a tooltip.
| 
*/

var simpleTooltip = function (elementId, tooltip) {
	this.elementId	= elementId;
	this.tooltip	= tooltip;
	
	if (typeof this.elementId != 'string')
	{
		console.log('The element ID have to be a string in the object initiation.');
	}
	
	if (typeof this.tooltip != 'string')
	{
		console.log('The TOOLTIP have to be a string in the object initiation.');
	}
	
	this.createElementListeners = function() {
		var element		= document.getElementById(elementId);
		var ttElement	= document.getElementById('tt'+elementId);
		
		element.onmouseover = 
		 function() { 
			 ttElement.className = ''; 
			 ttElement.className = 'tooltipShow'; 
		 };
		 
		 element.onmouseleave = 
		 function() { 
			 ttElement.className = ''; 
			 ttElement.className = 'tooltipHide'; 
		 };
	}
	
	this.createElementTooltip = function() {			
		var toolTipDiv = document.createElement('div');
		toolTipDiv.className = 'tooltipHide';
		toolTipDiv.id = 'tt' + elementId;
		
		var content = document.createTextNode(tooltip);
		toolTipDiv.appendChild(content);
		
		var element = document.getElementById(elementId);
		element.parentNode.appendChild(toolTipDiv);
		
		toolTipDiv.style.position = 'absolute';
		toolTipDiv.style.top = '-10px';
		toolTipDiv.style.left = '170px';
	}
	
	this.createElementParentDiv = function() {
		var newParentDiv = document.createElement('div');
		newParentDiv.style.position = 'relative';
		
		var element = document.getElementById(elementId);
		var elementParent = document.getElementById(elementId).parentNode;
		
		newParentDiv.appendChild(element);
		elementParent.appendChild(newParentDiv);
	}
	
	this.init = function() {
		this.createElementParentDiv();
		this.createElementTooltip();
		this.createElementListeners();
	}
	
	this.init();
};