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

	// Layer 1
	this.text = new cjs.Text("", "256px 'FontAwesome'", "#4C4C4C");
	this.text.lineHeight = 258;
	this.text.lineWidth = 256;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.bath, new cjs.Rectangle(0,0,260,260), null);


// stage content:
(lib.TUBAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 13
	this.instance = new lib.Symbol7();
	this.instance.parent = this;
	this.instance.setTransform(274.5,333.9,1,1,0,0,0,18.6,13);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40));

	// Layer 10
	this.instance_1 = new lib.Symbol5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(271.6,334.1,1,1,0,0,0,102.1,16.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:1,scaleY:0.99,x:271.5},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1.01,scaleY:0.98},0).wait(1).to({scaleX:1.01,scaleY:0.98,x:271.6},0).wait(1).to({scaleX:1.01,scaleY:0.97},0).wait(1).to({scaleX:1.02,scaleY:0.96},0).wait(1).to({scaleX:1.02,scaleY:0.96,x:271.5},0).wait(1).to({scaleX:1.02,scaleY:0.95},0).wait(1).to({scaleX:1.03,scaleY:0.94},0).wait(1).to({scaleX:1.03,scaleY:0.94,x:271.6},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.04,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:0.92,x:271.5},0).wait(1).to({scaleX:1.04,scaleY:0.91},0).wait(1).to({scaleX:1.05,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:0.9,x:271.6},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.06,scaleY:0.88,x:271.5},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.89},0).wait(1).to({scaleX:1.05,scaleY:0.9},0).wait(1).to({scaleX:1.05,scaleY:0.9,x:271.6},0).wait(1).to({scaleX:1.04,scaleY:0.91},0).wait(1).to({scaleX:1.04,scaleY:0.92},0).wait(1).to({scaleX:1.04,scaleY:0.92,x:271.5},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:0.93},0).wait(1).to({scaleX:1.03,scaleY:0.94},0).wait(1).to({scaleX:1.03,scaleY:0.95,x:271.6},0).wait(1).to({scaleX:1.02,scaleY:0.95},0).wait(1).to({scaleX:1.02,scaleY:0.96},0).wait(1).to({scaleX:1.02,scaleY:0.96,x:271.5},0).wait(1).to({scaleX:1.01,scaleY:0.97},0).wait(1).to({scaleX:1.01,scaleY:0.98},0).wait(1).to({scaleX:1.01,scaleY:0.98,x:271.6},0).wait(1).to({scaleX:1.01,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:0.99},0).wait(1).to({scaleX:1,scaleY:1},0).wait(1));

	// Layer 12
	this.instance_2 = new lib.Symbol6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(323.9,286.2,1,1,0,0,180,8.6,39.1);
	this.instance_2.alpha = 0.52;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({skewY:0,x:330.8,y:286.5},0).wait(20).to({skewY:180,x:323.9,y:286.2},0).wait(1));

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
	this.instance_3 = new lib.Symbol3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(287.3,248.8,1.69,1.69,0,0,0,22.7,26.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:22.5,regY:26.8,rotation:0.4,x:286.9,y:249},0).wait(1).to({rotation:0.8,x:287,y:249.2},0).wait(1).to({rotation:1.3,x:286.9,y:249.5},0).wait(1).to({rotation:1.7,y:249.8},0).wait(1).to({rotation:2.1,y:250},0).wait(1).to({rotation:2.5,y:250.3},0).wait(1).to({rotation:2.9,x:287,y:250.6},0).wait(1).to({rotation:3.4,x:286.9,y:250.9},0).wait(1).to({rotation:3.8,y:251.2},0).wait(1).to({rotation:4.2,x:287,y:251.5},0).wait(1).to({rotation:4.6,x:286.9,y:251.7},0).wait(1).to({rotation:5,y:252},0).wait(1).to({rotation:5.5,y:252.3},0).wait(1).to({rotation:5.9,x:287,y:252.6},0).wait(1).to({rotation:6.3,y:252.9},0).wait(1).to({rotation:6.7,x:286.9,y:253.2},0).wait(1).to({rotation:7.1,y:253.4},0).wait(1).to({rotation:7.6,x:287,y:253.7},0).wait(1).to({rotation:8,x:286.9,y:254},0).wait(1).to({rotation:7.6,x:287,y:253.7},0).wait(1).to({rotation:7.2,y:253.5},0).wait(1).to({rotation:6.8,x:286.9,y:253.2},0).wait(1).to({rotation:6.4,y:252.9},0).wait(1).to({rotation:6,y:252.6},0).wait(1).to({rotation:5.6,x:287,y:252.4},0).wait(1).to({rotation:5.2,y:252.1},0).wait(1).to({rotation:4.8,x:286.9,y:251.8},0).wait(1).to({rotation:4.4,y:251.6},0).wait(1).to({rotation:4,x:287,y:251.3},0).wait(1).to({rotation:3.6,x:286.9,y:251.1},0).wait(1).to({rotation:3.2,y:250.8},0).wait(1).to({rotation:2.8,x:287,y:250.5},0).wait(1).to({rotation:2.4,x:286.9,y:250.3},0).wait(1).to({rotation:2,y:249.9},0).wait(1).to({rotation:1.6,y:249.7},0).wait(1).to({rotation:1.2,y:249.5},0).wait(1).to({rotation:0.8,y:249.2},0).wait(1).to({rotation:0.4,x:287,y:248.9},0).wait(1).to({rotation:0,x:286.9,y:248.6},0).wait(1));

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6497B1").s().p("AuIAAQhAhqgHiBQgCgnAEgmIAEgeIeZAAIABAeQgBAmgHAnQgVCBhHBqQjkFWqEAAQq+AAjPlWg");
	this.shape_2.setTransform(280.5,247.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(40));

	// Layer 1
	this.instance_4 = new lib.bath();
	this.instance_4.parent = this;
	this.instance_4.setTransform(276.5,177.6,1,1,0,0,0,130,130);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(40));

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