(function (img, cjs, ss, an) {

var lib={};var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6497B1").s().p("AgnAnQgQgQAAgXQAAgWAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape.setTransform(72,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgQQAPgQAXAAQAXAAAQAQQAQAQAAAWQAAAYgQAPQgQAQgXAAQgWAAgQgQg");
	this.shape_1.setTransform(60.9,16.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6497B1").s().p("AgnAoQgQgQAAgYQAAgWAQgRQARgQAWAAQAYAAAQAQQAQARAAAWQAAAYgQAQQgQAQgYAAQgWAAgRgQg");
	this.shape_2.setTransform(49.8,27.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6497B1").s().p("AgnAnQgQgQAAgXQAAgWAQgQQAQgQAXAAQAYAAAQAQQAQAQAAAWQAAAXgQAQQgQAQgYAAQgXAAgQgQg");
	this.shape_3.setTransform(49.8,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgQQAQgQAWAAQAYAAAPAQQAQAQAAAWQAAAYgQAPQgPAQgYAAQgWAAgQgQg");
	this.shape_4.setTransform(38.7,38.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgQQAQgQAWAAQAYAAAPAQQAQAQAAAWQAAAYgQAPQgPAQgYAAQgWAAgQgQg");
	this.shape_5.setTransform(38.7,16.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#6497B1").s().p("AgmAoQgQgQgBgYQABgWAQgRQAQgQAWAAQAYAAAQAQQAPARAAAWQAAAYgPAQQgQAPgYABQgWgBgQgPg");
	this.shape_6.setTransform(27.7,49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6497B1").s().p("AgmAoQgQgQgBgYQABgWAQgRQAQgQAWAAQAYAAAQAQQAPARAAAWQAAAYgPAQQgQAQgYAAQgWAAgQgQg");
	this.shape_7.setTransform(27.7,27.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#6497B1").s().p("AgmAnQgQgQgBgXQABgWAQgQQAPgQAXAAQAYAAAQAQQAPAQAAAWQAAAXgPAQQgQAQgYAAQgXAAgPgQg");
	this.shape_8.setTransform(27.7,5.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#6497B1").s().p("AgmAnQgQgQAAgXQAAgXAQgPQAQgQAWAAQAYAAAPAQQAQAQAAAWQAAAXgQAQQgPAQgYAAQgWAAgQgQg");
	this.shape_9.setTransform(16.6,60.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgQQAQgQAWAAQAYAAAPAQQAQAQAAAWQAAAYgQAPQgPAQgYAAQgWAAgQgQg");
	this.shape_10.setTransform(16.6,38.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgQQAQgQAWAAQAYAAAPAQQAQAQAAAWQAAAYgQAPQgPAQgYAAQgWAAgQgQg");
	this.shape_11.setTransform(16.6,16.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#6497B1").s().p("AgmAnQgQgPAAgYQAAgWAQgRQAQgPAWAAQAXAAAQAPQAQARAAAWQAAAYgQAPQgQAQgXABQgWgBgQgQg");
	this.shape_12.setTransform(5.5,72);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6497B1").s().p("AgmAoQgQgQAAgYQAAgXAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAXQAAAYgQAQQgQAPgXABQgWgBgQgPg");
	this.shape_13.setTransform(5.5,49.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6497B1").s().p("AgmAoQgQgQAAgYQAAgXAQgQQAQgQAWAAQAXAAAQAQQAQAQAAAXQAAAYgQAQQgQAQgXAAQgWAAgQgQg");
	this.shape_14.setTransform(5.5,27.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,0,77.5,77.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("$$$", "18px 'Impact'", "#CCCCCC");
	this.text.lineHeight = 24;
	this.text.lineWidth = 33;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,0,37.2,26), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6497B1").s().p("AhHAfQAQg/AqgsQBuh5hhhiQgKgTAAgWQgBgfAUgYQBUBIgHB4QgCAkgSAZQhYCDgVCZQgFAiAdAVQBwBPgYBvQjJh9A9jrg");
	this.shape.setTransform(8.6,39.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,17.2,78.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6497B1").ss(1,1,1).p("AP9AAQAABCkrAvQkrAwmnAAQmmAAkrgwQkrgvAAhCQAAhCErgvQErgvGmAAQGnAAErAvQErAvAABCg");
	this.shape.setTransform(102.1,16.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6497B1").s().p("ArRBxQkrguAAhDQAAhBErgwQErgvGmAAQGnAAErAvQErAwAABBQAABDkrAuQkrAwmnAAQmmAAkrgwg");
	this.shape_1.setTransform(102.1,16.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1,-1,206.2,34.2), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("$", "36px 'Impact'", "#CCCCCC");
	this.text.lineHeight = 46;
	this.text.lineWidth = 20;
	this.text.parent = this;
	this.text.setTransform(24.7,2.8,1,1,30);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,45,53.6), null);


(lib.bath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.bath, null, null);


// stage content:
(lib.TUBAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(279.9,123.5,1,1,0,0,0,38.8,38.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},8).to({alpha:1},1).to({alpha:0},9).to({alpha:1},1).to({alpha:0},9).to({alpha:1},1).to({alpha:0},9).to({alpha:1},1).wait(1));

	// Layer 13
	this.instance_1 = new lib.Symbol7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274.5,333.9,1,1,0,0,0,18.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40));

	// Layer 10
	this.instance_2 = new lib.Symbol5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(271.6,334.1,1,1,0,0,0,102.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({scaleX:1,scaleY:0.99,x:271.5},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:0.98},0).wait(1).to({scaleX:1.01,scaleY:0.98,x:271.6},0).wait(1).to({scaleX:1.01,scaleY:0.97},0).wait(1).to({scaleX:1.02,scaleY:0.96},0).wait(1).to({scaleX:1.02,scaleY:0.96,x:271.5},0).wait(1).to({scaleX:1.02,scaleY:0.95},0).wait(1).to({scaleX:1.03,scaleY:0.94},0).wait(1).to({scaleX:1.03,scaleY:0.94,x:271.6},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.04,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:0.92,x:271.5},0).wait(1).to({scaleX:1.04,scaleY:0.91},0).wait(1).to({scaleX:1.05,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:0.9,x:271.6},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.06,scaleY:0.88,x:271.5},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:0.9,x:271.6},0).wait(1).to({scaleX:1.04,scaleY:0.91},0).wait(1).to({scaleX:1.04,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:0.92,x:271.5},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:0.94},0).wait(1).to({scaleX:1.03,scaleY:0.95,x:271.6},0).wait(1).to({scaleX:1.02,scaleY:0.95},0).wait(1).to({scaleX:1.02,scaleY:0.96},0).wait(1).to({scaleX:1.02,scaleY:0.96,x:271.5},0).wait(1).to({scaleX:1.01,scaleY:0.97},0).wait(1).to({scaleX:1.01,scaleY:0.98},0).wait(1).to({scaleX:1.01,scaleY:0.98,x:271.6},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 12
	this.instance_3 = new lib.Symbol6();
	this.instance_3.parent = this;
	this.instance_3.setTransform(323.9,286.2,1,1,0,0,180,8.6,39.1);
	this.instance_3.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({skewY:0,x:330.8,y:286.5},0).wait(20).to({skewY:180,x:323.9,y:286.2},0).wait(1));

	// Layer 8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6497B1").s().p("AAUDJQAdgUgFgkQgViYhYiCQgSgagCgkQgHh4BUhHQAUAXgBAgQAAAVgKATQhhBiBuB5QAqAsAQA/QA9DrjJB+QgYhwBwhPg");
	this.shape.setTransform(327.2,288.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6497B1").s().p("AhHAfQAQg/AqgsQBuh5hhhiQgKgTAAgVQgBggAUgXQBUBHgHB4QgCAkgSAaQhYCCgVCYQgFAkAdAUQBwBPgYBwQjJh+A9jrg");
	this.shape_1.setTransform(327.2,288.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},19).to({state:[{t:this.shape}]},20).wait(1));

	// Layer 7
	this.text = new cjs.Text("In ut hendrerit est. Nam facilisis nulla placerat orci cursus luctus. Fusce ut pulvinar nulla. Ut sit amet ipsum ex. Proin imperdiet eleifend blandit. \n\nPellentesque tincidunt viverra vehicula.", "18px 'Roboto'", "#4C4C4C");
	this.text.lineHeight = 24;
	this.text.lineWidth = 481;
	this.text.parent = this;
	this.text.setTransform(434,114.4);

	this.text_1 = new cjs.Text("Praesent luctus", "36px 'Roboto'", "#4C4C4C");
	this.text_1.lineHeight = 45;
	this.text_1.lineWidth = 481;
	this.text_1.parent = this;
	this.text_1.setTransform(434,49.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(40));

	// Layer 6
	this.instance_4 = new lib.Symbol3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(287.3,248.8,1.69,1.69,0,0,0,22.7,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:22.5,regY:26.8,rotation:0.4,x:286.9,y:249},0).wait(1).to({rotation:0.8,x:287,y:249.2},0).wait(1).to({rotation:1.3,x:286.9,y:249.5},0).wait(1).to({rotation:1.7,y:249.8},0).wait(1).to({rotation:2.1,y:250},0).wait(1).to({rotation:2.5,y:250.3},0).wait(1).to({rotation:2.9,x:287,y:250.6},0).wait(1).to({rotation:3.4,x:286.9,y:250.9},0).wait(1).to({rotation:3.8,y:251.2},0).wait(1).to({rotation:4.2,x:287,y:251.5},0).wait(1).to({rotation:4.6,x:286.9,y:251.7},0).wait(1).to({rotation:5,y:252},0).wait(1).to({rotation:5.5,y:252.3},0).wait(1).to({rotation:5.9,x:287,y:252.6},0).wait(1).to({rotation:6.3,y:252.9},0).wait(1).to({rotation:6.7,x:286.9,y:253.2},0).wait(1).to({rotation:7.1,y:253.4},0).wait(1).to({rotation:7.6,x:287,y:253.7},0).wait(1).to({rotation:8,x:286.9,y:254},0).wait(1).to({rotation:7.6,x:287,y:253.7},0).wait(1).to({rotation:7.2,y:253.5},0).wait(1).to({rotation:6.8,x:286.9,y:253.2},0).wait(1).to({rotation:6.4,y:252.9},0).wait(1).to({rotation:6,y:252.6},0).wait(1).to({rotation:5.6,x:287,y:252.4},0).wait(1).to({rotation:5.2,y:252.1},0).wait(1).to({rotation:4.8,x:286.9,y:251.8},0).wait(1).to({rotation:4.4,y:251.6},0).wait(1).to({rotation:4,x:287,y:251.3},0).wait(1).to({rotation:3.6,x:286.9,y:251.1},0).wait(1).to({rotation:3.2,y:250.8},0).wait(1).to({rotation:2.8,x:287,y:250.5},0).wait(1).to({rotation:2.4,x:286.9,y:250.3},0).wait(1).to({rotation:2,y:249.9},0).wait(1).to({rotation:1.6,y:249.7},0).wait(1).to({rotation:1.2,y:249.5},0).wait(1).to({rotation:0.8,y:249.2},0).wait(1).to({rotation:0.4,x:287,y:248.9},0).wait(1).to({rotation:0,x:286.9,y:248.6},0).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6497B1").s().p("AuIAAQhAhqgHiBQgCgnAEgmIAEgeIeZAAIABAeQgBAmgHAnQgVCBhHBqQjkFWqEAAQq+AAjPlWg");
	this.shape_2.setTransform(280.5,247.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(40));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4C4C4C").s().p("AOtJhQgXAAgQgQQgQgQAAgXIAAjNQhsAmhxAAI0wAAQhyAAhsgmIAAC/QAAAdgPAUQgRAUgXAAIhuAAQgYAAgQgUQgQgUAAgdIAAlCQhoheg5h9Qg9iCAAiQIAAlNMApgAAAIAAFNQAACQg7CCQg6B9hoBeIAAFQQAAAXgQAQQgPAQgYAAg");
	this.shape_3.setTransform(276.5,256.5,0.839,0.839);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4C4C4C").s().p("A3VN2QgYAAgQgQQgQgQAAgYIAAhuQAAgXAQgRQAQgQAYAAIClAAIAAxSQAAi3CDiCQCBiCC3AAQBcAABUAlQBQAjA/A/QBRggBZAMQBZAMBHA3IAmgmQAIgIALAAQAMAAAHAIIBJBJQAIAHAAAMQAAALgIAIIofIfQgIAIgMAAQgKAAgJgIIhIhJQgIgIAAgLQAAgLAIgIIAmgmQg+hPgIhkQgHhkAvhYQgegdgmgPQgogQgsAAQhbAAhBBAQhBBBAABcIAARSMAopAAAQAXAAAQAQQAQAQAAAYIAABuQAAAYgQAQQgQAQgXAAg");
	this.shape_4.setTransform(276.5,121.8,0.839,0.839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(40));

	// Layer 1
	this.instance_5 = new lib.bath();
	this.instance_5.parent = this;
	this.instance_5.setTransform(276.5,177.6,1,1,0,0,0,130,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(40));

	// Layer 17
	this.text_2 = new cjs.Text("$", "34px 'Impact'", "#6497B1");
	this.text_2.lineHeight = 43;
	this.text_2.lineWidth = 19;
	this.text_2.parent = this;
	this.text_2.setTransform(225,62.3);

	this.timeline.addTween(cjs.Tween.get(this.text_2).wait(1).to({rotation:2.3,x:227,y:65.9},0).wait(1).to({rotation:4.6,x:229,y:69.5},0).wait(1).to({rotation:6.9,x:231.1,y:73.1},0).wait(1).to({rotation:9.2,x:233.1,y:76.8},0).wait(1).to({rotation:11.5,x:235.2,y:80.6},0).wait(1).to({rotation:13.8,x:237.3,y:84.3},0).wait(1).to({rotation:16.2,x:239.3,y:88.1},0).wait(1).to({rotation:18.5,x:241.4,y:91.9},0).wait(1).to({rotation:20.8,x:243.5,y:95.8},0).wait(1).to({rotation:23.1,x:245.6,y:99.7},0).wait(1).to({rotation:25.4,x:247.7,y:103.6},0).wait(1).to({rotation:27.7,x:249.8,y:107.6},0).wait(1).to({rotation:30,x:251.9,y:111.6},0).wait(1).to({rotation:32.3,x:254,y:115.7},0).wait(1).to({rotation:34.6,x:256.1,y:119.8},0).wait(1).to({rotation:36.9,x:258.2,y:123.9},0).wait(1).to({rotation:39.2,x:260.2,y:128.1},0).wait(1).to({rotation:41.5,x:262.3,y:132.2},0).wait(1).to({rotation:43.8,x:264.3,y:136.5},0).wait(1).to({rotation:46.2,x:266.4,y:140.7},0).wait(1).to({rotation:48.5,x:268.4,y:145},0).wait(1).to({rotation:50.8,x:270.4,y:149.4},0).wait(1).to({rotation:53.1,x:272.4,y:153.7},0).wait(1).to({rotation:55.4,x:274.4,y:158.1},0).wait(1).to({rotation:57.7,x:276.3,y:162.6},0).wait(1).to({rotation:60,x:278.3,y:167},0).wait(1).to({rotation:62.3,x:280.2,y:171.5},0).wait(1).to({rotation:64.6,x:282.1,y:176},0).wait(1).to({rotation:66.9,x:283.9,y:180.6},0).wait(1).to({rotation:69.2,x:285.8,y:185.1},0).wait(1).to({rotation:71.5,x:287.6,y:189.7},0).wait(1).to({rotation:73.8,x:289.4,y:194.4},0).wait(1).to({rotation:76.2,x:291.1,y:199},0).wait(1).to({rotation:78.5,x:292.9,y:203.7},0).wait(1).to({rotation:80.8,x:294.6,y:208.4},0).wait(1).to({rotation:83.1,x:296.2,y:213.1},0).wait(1).to({rotation:85.4,x:297.9,y:217.8},0).wait(1).to({rotation:87.7,x:299.5,y:222.6},0).wait(1).to({rotation:90,x:350.1,y:222.2},0).wait(1));

	// Layer 16
	this.text_3 = new cjs.Text("$", "34px 'Impact'", "#6497B1");
	this.text_3.lineHeight = 43;
	this.text_3.lineWidth = 19;
	this.text_3.parent = this;
	this.text_3.setTransform(225,62.3);

	this.timeline.addTween(cjs.Tween.get(this.text_3).wait(1).to({rotation:2.3,x:225.9,y:65.8},0).wait(1).to({rotation:4.6,x:227,y:69.2},0).wait(1).to({rotation:6.9,x:228,y:72.8},0).wait(1).to({rotation:9.2,x:229,y:76.3},0).wait(1).to({rotation:11.5,x:230.1,y:79.9},0).wait(1).to({rotation:13.8,x:231.1,y:83.5},0).wait(1).to({rotation:16.2,x:232.2,y:87.2},0).wait(1).to({rotation:18.5,x:233.2,y:90.9},0).wait(1).to({rotation:20.8,x:234.3,y:94.6},0).wait(1).to({rotation:23.1,x:235.4,y:98.4},0).wait(1).to({rotation:25.4,x:236.4,y:102.2},0).wait(1).to({rotation:27.7,x:237.5,y:106},0).wait(1).to({rotation:30,x:238.6,y:109.9},0).wait(1).to({rotation:32.3,x:239.6,y:113.8},0).wait(1).to({rotation:34.6,x:240.7,y:117.8},0).wait(1).to({rotation:36.9,x:241.8,y:121.8},0).wait(1).to({rotation:39.2,x:242.8,y:125.8},0).wait(1).to({rotation:41.5,x:243.8,y:129.9},0).wait(1).to({rotation:43.8,x:244.9,y:134},0).wait(1).to({rotation:46.2,x:245.9,y:138.1},0).wait(1).to({rotation:48.5,x:246.9,y:142.3},0).wait(1).to({rotation:50.8,x:247.8,y:146.5},0).wait(1).to({rotation:53.1,x:248.8,y:150.7},0).wait(1).to({rotation:55.4,x:249.8,y:155},0).wait(1).to({rotation:57.7,x:250.7,y:159.3},0).wait(1).to({rotation:60,x:251.6,y:163.6},0).wait(1).to({rotation:62.3,x:252.5,y:168},0).wait(1).to({rotation:64.6,x:253.3,y:172.3},0).wait(1).to({rotation:66.9,x:254.2,y:176.8},0).wait(1).to({rotation:69.2,x:255,y:181.2},0).wait(1).to({rotation:71.5,x:255.8,y:185.7},0).wait(1).to({rotation:73.8,x:256.6,y:190.2},0).wait(1).to({rotation:76.2,x:257.3,y:194.7},0).wait(1).to({rotation:78.5,x:258,y:199.2},0).wait(1).to({rotation:80.8,x:258.7,y:203.8},0).wait(1).to({rotation:83.1,x:259.3,y:208.3},0).wait(1).to({rotation:85.4,x:259.9,y:212.9},0).wait(1).to({rotation:87.7,x:260.5,y:217.6},0).wait(1).to({rotation:90,x:261.1,y:222.2},0).wait(1));

	// Layer 15
	this.text_4 = new cjs.Text("$", "34px 'Impact'", "#6497B1");
	this.text_4.lineHeight = 43;
	this.text_4.lineWidth = 19;
	this.text_4.parent = this;
	this.text_4.setTransform(225,62.3);

	this.timeline.addTween(cjs.Tween.get(this.text_4).wait(1).to({rotation:2.3,x:228.2,y:65.8},0).wait(1).to({rotation:4.6,x:231.5,y:69.2},0).wait(1).to({rotation:6.9,x:234.8,y:72.8},0).wait(1).to({rotation:9.2,x:238.1,y:76.3},0).wait(1).to({rotation:11.5,x:241.5,y:79.9},0).wait(1).to({rotation:13.8,x:244.8,y:83.5},0).wait(1).to({rotation:16.2,x:248.1,y:87.2},0).wait(1).to({rotation:18.5,x:251.5,y:90.9},0).wait(1).to({rotation:20.8,x:254.8,y:94.6},0).wait(1).to({rotation:23.1,x:258.2,y:98.4},0).wait(1).to({rotation:25.4,x:261.5,y:102.2},0).wait(1).to({rotation:27.7,x:264.9,y:106},0).wait(1).to({rotation:30,x:268.2,y:109.9},0).wait(1).to({rotation:32.3,x:271.6,y:113.8},0).wait(1).to({rotation:34.6,x:274.9,y:117.8},0).wait(1).to({rotation:36.9,x:278.3,y:121.8},0).wait(1).to({rotation:39.2,x:281.6,y:125.8},0).wait(1).to({rotation:41.5,x:284.9,y:129.9},0).wait(1).to({rotation:43.8,x:288.2,y:134},0).wait(1).to({rotation:46.2,x:291.5,y:138.1},0).wait(1).to({rotation:48.5,x:294.8,y:142.3},0).wait(1).to({rotation:50.8,x:298,y:146.5},0).wait(1).to({rotation:53.1,x:301.3,y:150.7},0).wait(1).to({rotation:55.4,x:304.5,y:155},0).wait(1).to({rotation:57.7,x:307.7,y:159.3},0).wait(1).to({rotation:60,x:310.9,y:163.6},0).wait(1).to({rotation:62.3,x:314.1,y:168},0).wait(1).to({rotation:64.6,x:317.2,y:172.3},0).wait(1).to({rotation:66.9,x:320.4,y:176.8},0).wait(1).to({rotation:69.2,x:323.5,y:181.2},0).wait(1).to({rotation:71.5,x:326.5,y:185.7},0).wait(1).to({rotation:73.8,x:329.6,y:190.2},0).wait(1).to({rotation:76.2,x:332.6,y:194.7},0).wait(1).to({rotation:78.5,x:335.6,y:199.2},0).wait(1).to({rotation:80.8,x:338.5,y:203.8},0).wait(1).to({rotation:83.1,x:341.5,y:208.3},0).wait(1).to({rotation:85.4,x:344.4,y:212.9},0).wait(1).to({rotation:87.7,x:347.2,y:217.6},0).wait(1).to({rotation:90,x:350.1,y:222.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(646.5,247.6,770.5,303.2);
// library properties:
lib.properties = {
	id: '2944F536A4239949B9904EBBB6ED1A1F',
	width: 1000,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2944F536A4239949B9904EBBB6ED1A1F'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var images, createjs, ss, AdobeAn;