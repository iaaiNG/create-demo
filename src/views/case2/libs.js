export default function (cjs, an) {

	var p; // shortcut to reference prototypes
	var lib={};var ss={};var img={};
	lib.ssMetadata = [];
	
	
	(lib.AnMovieClip = function(){
		this.actionFrames = [];
		this.ignorePause = false;
		this.gotoAndPlay = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
		}
		this.play = function(){
			cjs.MovieClip.prototype.play.call(this);
		}
		this.gotoAndStop = function(positionOrLabel){
			cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		}
		this.stop = function(){
			cjs.MovieClip.prototype.stop.call(this);
		}
	}).prototype = p = new cjs.MovieClip();
	// symbols:
	
	
	
	(lib.di = function() {
		this.initialize(img.di);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,717,1260);
	
	
	(lib.di02 = function() {
		this.initialize(img.di02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,499,506);
	
	
	(lib.云01 = function() {
		this.initialize(img.云01);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,320,82);
	
	
	(lib.云02 = function() {
		this.initialize(img.云02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,215,57);
	
	
	(lib.元宝 = function() {
		this.initialize(img.元宝);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,112,77);
	
	
	(lib.圆01 = function() {
		this.initialize(img.圆01);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,530,124);
	
	
	(lib.圆02 = function() {
		this.initialize(img.圆02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,206,236);
	
	
	(lib.手 = function() {
		this.initialize(img.手);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,258,376);
	
	
	(lib.摇一摇 = function() {
		this.initialize(img.摇一摇);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,490,113);
	
	
	(lib.星 = function() {
		this.initialize(img.星);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,120,98);
	
	
	(lib.标题 = function() {
		this.initialize(img.标题);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,387,198);
	
	
	(lib.活动规则_btn = function() {
		this.initialize(img.活动规则_btn);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,50,51);
	
	
	(lib.猪 = function() {
		this.initialize(img.猪);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,262,214);
	
	
	(lib.福字 = function() {
		this.initialize(img.福字);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,44,41);
	
	
	(lib.福字02 = function() {
		this.initialize(img.福字02);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,107,136);
	
	
	(lib.菱形 = function() {
		this.initialize(img.菱形);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,664,663);
	
	
	(lib.鞭炮 = function() {
		this.initialize(img.鞭炮);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0,0,104,424);// helper functions:
	
	function mc_symbol_clone() {
		var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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
	
	
	(lib.鞭炮01 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.福字();
		this.instance.setTransform(30.95,56.2);
	
		this.instance_1 = new lib.鞭炮();
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.鞭炮01, new cjs.Rectangle(0,0,104,424), null);
	
	
	(lib.菱形_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.菱形();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,664,663);
	
	
	(lib.福字02_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.福字02();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,107,136);
	
	
	(lib.猪_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.猪();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,262,214);
	
	
	(lib.活动规则_btn_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 2
		this.shape = new cjs.Shape();
		this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AkqEhIAApBIJVAAIAAJBg");
		this.shape.setTransform(25.475,24.825);
		this.shape._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));
	
		// 图层 1
		this.instance = new lib.活动规则_btn();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05,x:-1.25,y:-1.25},0).wait(3));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.4,-4.1,59.8,57.9);
	
	
	(lib.标题_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.标题();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.标题_1, new cjs.Rectangle(0,0,387,198), null);
	
	
	(lib.星_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.星();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,120,98);
	
	
	(lib.摇一摇_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.摇一摇();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,490,113);
	
	
	(lib.手_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.手();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,258,376);
	
	
	(lib.圆02_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.圆02();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.圆02_1, new cjs.Rectangle(0,0,206,236), null);
	
	
	(lib.圆01_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.圆01();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,530,124);
	
	
	(lib.元宝_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.元宝();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,112,77);
	
	
	(lib.云02_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.云02();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,215,57);
	
	
	(lib.云01_1 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.云01();
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,320,82);
	
	
	(lib.鞭炮02 = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.活动规则_btn_1();
		this.instance.setTransform(53.15,76.2,1,1,0,0,0,25,25.5);
		new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.活动规则_btn_1(), 3);
	
		this.instance_1 = new lib.鞭炮();
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.鞭炮02, new cjs.Rectangle(0,0,104,424), null);
	
	
	(lib.鞭炮01_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 2
		this.instance = new lib.鞭炮01();
		this.instance.setTransform(50.9,7.2,1,1,1.5004,0,0,50.9,7.2);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1.4838},24).to({rotation:1.5004},25).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-10.9,-1.4,125.7,426.59999999999997);
	
	
	(lib.福字02_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.福字02_1("synched",0);
		this.instance.setTransform(53.5,68,1,1,0,0,0,53.5,68);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:73.1},14).to({y:68},15).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,107,141.1);
	
	
	(lib.猪_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.猪_1("synched",0);
		this.instance.setTransform(131,107,1,1,0,0,0,131,107);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({x:135.5,y:111.5},17).to({x:131,y:107},17).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,0,266.5,218.5);
	
	
	(lib.星_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.星_1("synched",0);
		this.instance.setTransform(55.3,50.8,0.109,0.109,0,0,0,55.5,51);
		this.instance.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:55.3,regY:50.8,scaleX:1,scaleY:1,alpha:1},14).to({scaleX:1.0876,scaleY:1.0876,alpha:0,loop:false},10).to({_off:true},1).wait(5));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-4.8,-4.4,130.5,106.60000000000001);
	
	
	(lib.手_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 2 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EgADAhOIwXwbIwYwbQgCgGQXwvQQTwtABgDQACADQbQgQQhQjgCAAQgDgBwZQrQwYQrgCAAIAAAAgEgAJghNIAAAAIAAAAg");
		mask.setTransform(130.3999,153.125);
	
		// 图层 1
		this.instance = new lib.手_1("synched",0);
		this.instance.setTransform(59.1,310.2,1,1,-2.9861,0,0,59.1,310.2);
	
		var maskedShapeInstanceList = [this.instance];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:5.9698,x:59.15},7).to({rotation:-2.9861,x:59.1},7).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-16,-9.9,305.2,375.59999999999997);
	
	
	(lib.元宝_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 1
		this.instance = new lib.元宝_1("synched",0);
		this.instance.setTransform(56,38.5,1,1,0,0,0,56,38.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({y:33.4},14).to({y:38.5},15).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0,-5.1,112,82.1);
	
	
	(lib.云_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 3 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("EgkeA38MAAAhv3MBZXAAAMAAABv3g");
		mask.setTransform(338.5291,204.223);
	
		// 图层 2
		this.instance = new lib.云01_1("synched",0);
		this.instance.setTransform(-69.2,133.45,1,1,0,0,0,160,41);
		this.instance._off = true;
	
		var maskedShapeInstanceList = [this.instance];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).to({x:839.4},774).wait(1));
	
		// 图层 1
		this.instance_1 = new lib.云02_1("synched",0);
		this.instance_1.setTransform(-10.65,28.5,1,1,0,0,0,107.5,28.5);
	
		var maskedShapeInstanceList = [this.instance_1];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:999.75},599).wait(225));
	
		// 图层 4
		this.instance_2 = new lib.菱形_1("synched",0);
		this.instance_2.setTransform(392.5,216.65,1,1,0,0,0,332,331.5);
	
		var maskedShapeInstanceList = [this.instance_2];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(824));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(105.1,-114.8,572,663);
	
	
	(lib.鞭炮02_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 活动规则
		this.instance = new lib.鞭炮02();
		this.instance.setTransform(53.2,1.4,1,1,1.5004,0,0,53.2,1.4);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.0001,scaleY:1.0001,rotation:-1.4986,x:53.25},24).to({scaleX:1,scaleY:1,rotation:1.5004,x:53.2},25).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11,-1.4,126.1,426.7);
	
	
	(lib.摇一摇_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 图层 2
		this.instance = new lib.摇一摇_1("synched",0);
		this.instance.setTransform(254.3,417.7,1,1,0,0,0,245,56.5);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	
		// 图层 3
		this.instance_1 = new lib.手_mc();
		this.instance_1.setTransform(248.65,280.25,1,1,0,0,0,129,188);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	
		// 图层 1
		this.instance_2 = new lib.di02();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = getMCSymbolPrototype(lib.摇一摇_mc, new cjs.Rectangle(0,0,499.3,506), null);
	
	
	(lib.底部装饰_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_33 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).wait(33).call(this.frame_33).wait(1));
	
		// 图层 12
		this.instance = new lib.星_mc();
		this.instance.setTransform(290.1,-592.65,1,1,0,0,0,60,49);
	
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(34));
	
		// 图层 7 (mask)
		var mask = new cjs.Shape();
		mask._off = true;
		mask.graphics.p("Eg40AZIMAAAgyPMBxpAAAMAAAAyPg");
		mask.setTransform(286.625,75.05);
	
		// 图层 4
		this.instance_1 = new lib.元宝_mc();
		this.instance_1.setTransform(44.35,279.15,1,1,0,0,0,56,38.5);
		this.instance_1._off = true;
	
		var maskedShapeInstanceList = [this.instance_1];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({_off:false},0).to({x:49.05,y:207.1},8,cjs.Ease.get(1)).to({y:219.1},4,cjs.Ease.get(1)).wait(5));
	
		// 图层 2
		this.instance_2 = new lib.元宝_mc();
		this.instance_2.setTransform(511.45,282.45,1,1,0,0,0,56,38.5);
		this.instance_2._off = true;
	
		var maskedShapeInstanceList = [this.instance_2];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({x:520.85,y:208.1},8,cjs.Ease.get(1)).to({y:220.1},4,cjs.Ease.get(1)).wait(5));
	
		// 图层 5
		this.instance_3 = new lib.福字02_mc();
		this.instance_3.setTransform(121.6,329.6,1,1,-23.1729,0,0,53.5,68);
		this.instance_3._off = true;
	
		var maskedShapeInstanceList = [this.instance_3];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({x:87.45,y:181.15},10,cjs.Ease.get(1)).to({x:88.65,y:188.35},4,cjs.Ease.get(1)).wait(7));
	
		// 图层 1
		this.instance_4 = new lib.福字02_mc();
		this.instance_4.setTransform(450.5,322.45,1,1,0,0,0,53.5,68);
		this.instance_4._off = true;
	
		var maskedShapeInstanceList = [this.instance_4];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(13).to({_off:false},0).to({x:483.5,y:182.25},10,cjs.Ease.get(1)).to({x:482.3,y:189.45},4,cjs.Ease.get(1)).wait(7));
	
		// 图层 6
		this.instance_5 = new lib.猪_mc();
		this.instance_5.setTransform(33.7,297.3,1,1,0,0,180,131,107);
		this.instance_5._off = true;
	
		var maskedShapeInstanceList = [this.instance_5];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(9).to({_off:false},0).to({x:123.35,y:183},9,cjs.Ease.get(1)).to({x:114.95,y:192.6},5,cjs.Ease.get(1)).wait(11));
	
		// 图层 10
		this.instance_6 = new lib.猪_mc();
		this.instance_6.setTransform(586.75,336.6,1,1,0,0,0,131,107);
		this.instance_6._off = true;
	
		var maskedShapeInstanceList = [this.instance_6];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:441.75,y:181},9,cjs.Ease.get(1)).to({x:453.75,y:193},5,cjs.Ease.get(1)).wait(11));
	
		// 图层 3
		this.instance_7 = new lib.圆01_1("synched",0);
		this.instance_7.setTransform(283.8,295.15,1,1,0,0,0,265,62);
		this.instance_7._off = true;
	
		var maskedShapeInstanceList = [this.instance_7];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(4).to({_off:false},0).to({y:173.95},17,cjs.Ease.get(1)).wait(13));
	
		// 图层 8
		this.instance_8 = new lib.圆02_1();
		this.instance_8.setTransform(470,370,1,1,0,0,0,103,118);
	
		var maskedShapeInstanceList = [this.instance_8];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_8).to({y:113.2},12,cjs.Ease.get(1)).to({y:118},5,cjs.Ease.get(1)).wait(17));
	
		// 图层 9
		this.instance_9 = new lib.圆02_1();
		this.instance_9.setTransform(103.2,370,1,1,0,0,180,103,118);
	
		var maskedShapeInstanceList = [this.instance_9];
	
		for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
			maskedShapeInstanceList[shapedInstanceItr].mask = mask;
		}
	
		this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:113.2},12,cjs.Ease.get(1)).to({y:118},5,cjs.Ease.get(1)).wait(17));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-77,-596.4,727.3,832.3);
	
	
	(lib._01_首页_mc = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// timeline functions:
		this.frame_0 = function() {
			this.stop()
		}
		this.frame_44 = function() {
			this.stop();
		}
	
		// actions tween:
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));
	
		// 鞭炮02
		this.instance = new lib.鞭炮02_mc();
		this.instance.setTransform(621.9,-214.2,1,1,0,0,0,52,212);
	
		this.btnGuize = new lib.鞭炮02_mc();
		this.btnGuize.name = "btnGuize";
		this.btnGuize.setTransform(621.9,315.45,1,1,0,0,0,52,212);
	
		this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.btnGuize}]},1).wait(16));
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:211.9,y:-209.65},0).wait(1).to({y:-203.85},0).wait(1).to({y:-196.8},0).wait(1).to({y:-188.2},0).wait(1).to({y:-177.9},0).wait(1).to({y:-165.6},0).wait(1).to({y:-150.9},0).wait(1).to({y:-133.35},0).wait(1).to({y:-112.5},0).wait(1).to({y:-87.7},0).wait(1).to({y:-58.45},0).wait(1).to({y:-24.65},0).wait(1).to({y:13.1},0).wait(1).to({y:52.95},0).wait(1).to({y:92.2},0).wait(1).to({y:128.45},0).wait(1).to({y:160.5},0).wait(1).to({y:188.05},0).wait(1).to({y:211.5},0).wait(1).to({y:231.35},0).wait(1).to({y:248.2},0).wait(1).to({y:262.45},0).wait(1).to({y:274.5},0).wait(1).to({y:284.7},0).wait(1).to({y:293.3},0).wait(1).to({y:300.5},0).wait(1).to({y:306.45},0).wait(1).to({y:311.35},0).to({_off:true},1).wait(16));
	
		// 鞭炮01
		this.instance_1 = new lib.鞭炮01_mc();
		this.instance_1.setTransform(96.95,-217.75,1,1,0,0,0,52,212);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:51.9,regY:211.9,x:96.85,y:-213.15},0).wait(1).to({y:-207.35},0).wait(1).to({y:-200.2},0).wait(1).to({y:-191.6},0).wait(1).to({y:-181.25},0).wait(1).to({y:-168.8},0).wait(1).to({y:-154},0).wait(1).to({y:-136.35},0).wait(1).to({y:-115.35},0).wait(1).to({y:-90.4},0).wait(1).to({y:-60.95},0).wait(1).to({y:-26.95},0).wait(1).to({y:11.05},0).wait(1).to({y:51.15},0).wait(1).to({y:90.7},0).wait(1).to({y:127.2},0).wait(1).to({y:159.45},0).wait(1).to({y:187.2},0).wait(1).to({y:210.8},0).wait(1).to({y:230.8},0).wait(1).to({y:247.75},0).wait(1).to({y:262.1},0).wait(1).to({y:274.25},0).wait(1).to({y:284.5},0).wait(1).to({y:293.15},0).wait(1).to({y:300.4},0).wait(1).to({y:306.4},0).wait(1).to({y:311.35},0).wait(1).to({regX:52,regY:212,x:96.95,y:315.45},0).wait(16));
	
		// 标题
		this.instance_2 = new lib.标题_1();
		this.instance_2.setTransform(356.65,283.25,1.4515,1.4515,0,0,0,193.5,99);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22).to({_off:false},0).to({scaleX:0.9478,scaleY:0.9478,alpha:1},10,cjs.Ease.get(1)).to({regX:193.6,scaleX:1.0514,scaleY:1.0514,x:356.75,y:283.35},4,cjs.Ease.get(1)).to({regX:193.5,scaleX:1,scaleY:1,x:356.65,y:283.25},5,cjs.Ease.get(1)).wait(4));
	
		// 摇一摇
		this.instance_3 = new lib.摇一摇_mc();
		this.instance_3.setTransform(355.2,668.15,0.5713,0.5713,0,0,0,249.5,253);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({scaleX:1.0419,scaleY:1.0419,alpha:1},10,cjs.Ease.get(1)).to({scaleX:0.9674,scaleY:0.9674},4,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(1)).wait(11));
	
		// 图层 4
		this.instance_4 = new lib.底部装饰_mc();
		this.instance_4.setTransform(362.9,938.6,1,1,0,0,0,292.4,150.3);
	
		this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45));
	
		// 云
		this.instance_5 = new lib.云_mc();
		this.instance_5.setTransform(264.6,531.35,1,1,0,0,0,298.7,87.2);
		this.instance_5.alpha = 0;
	
		this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:1},15).wait(30));
	
		// 图层 1
		this.instance_6 = new lib.di();
	
		this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45));
	
		this._renderFirstFrame();
	
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-152.2,-431.1,873,1707.4);
	
	
	// stage content:
	(lib.index = function(mode,startPosition,loop,reversed) {
	if (loop == null) { loop = true; }
	if (reversed == null) { reversed = false; }
		var props = new Object();
		props.mode = mode;
		props.startPosition = startPosition;
		props.labels = {};
		props.loop = loop;
		props.reversed = reversed;
		cjs.MovieClip.apply(this,[props]);
	
		// 01_首页 复制
		this.mcIndex = new lib._01_首页_mc();
		this.mcIndex.name = "mcIndex";
		this.mcIndex.setTransform(358.5,630,1,1,0,0,0,358.5,630);
	
		this.timeline.addTween(cjs.Tween.get(this.mcIndex).wait(1));
	
		this._renderFirstFrame();
	
	}).prototype = p = new lib.AnMovieClip();
	p.nominalBounds = new cjs.Rectangle(206.3,198.9,514.5,1125.3999999999999);
	// library properties:
	lib.properties = {
		id: 'EC3D2412327E9E4190E551576F60A1F2',
		width: 717,
		height: 1260,
		fps: 30,
		color: "#666666",
		opacity: 1.00,
		manifest: [
			{src:"images/di.jpg?1681725502770", id:"di"},
			{src:"images/di02.png?1681725502770", id:"di02"},
			{src:"images/云01.png?1681725502770", id:"云01"},
			{src:"images/云02.png?1681725502770", id:"云02"},
			{src:"images/元宝_.png?1681725502770", id:"元宝"},
			{src:"images/圆01.png?1681725502770", id:"圆01"},
			{src:"images/圆02.png?1681725502770", id:"圆02"},
			{src:"images/手_.png?1681725502770", id:"手"},
			{src:"images/摇一摇_.png?1681725502770", id:"摇一摇"},
			{src:"images/星_.png?1681725502770", id:"星"},
			{src:"images/标题_.png?1681725502770", id:"标题"},
			{src:"images/活动规则_btn.png?1681725502770", id:"活动规则_btn"},
			{src:"images/猪_.png?1681725502770", id:"猪"},
			{src:"images/福字_.png?1681725502770", id:"福字"},
			{src:"images/福字02.png?1681725502770", id:"福字02"},
			{src:"images/菱形_.png?1681725502770", id:"菱形"},
			{src:"images/鞭炮_.png?1681725502770", id:"鞭炮"}
		],
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
	an.compositions['EC3D2412327E9E4190E551576F60A1F2'] = {
		getStage: function() { return exportRoot.stage; },
		getLibrary: function() { return lib; },
		getSpriteSheet: function() { return ss; },
		getImages: function() { return img; }
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
	
	
	an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
		var lastW, lastH, lastS=1;		
		window.addEventListener('resize', resizeCanvas);		
		resizeCanvas();		
		function resizeCanvas() {			
			var w = lib.properties.width, h = lib.properties.height;			
			var iw = window.innerWidth, ih=window.innerHeight;			
			var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
			if(isResp) {                
				if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
					sRatio = lastS;                
				}				
				else if(!isScale) {					
					if(iw<w || ih<h)						
						sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==1) {					
					sRatio = Math.min(xRatio, yRatio);				
				}				
				else if(scaleType==2) {					
					sRatio = Math.max(xRatio, yRatio);				
				}			
			}
			domContainers[0].width = w * pRatio * sRatio;			
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function(container) {				
				container.style.width = w * sRatio + 'px';				
				container.style.height = h * sRatio + 'px';			
			});
			stage.scaleX = pRatio*sRatio;			
			stage.scaleY = pRatio*sRatio;
			lastW = iw; lastH = ih; lastS = sRatio;            
			stage.tickOnUpdate = false;            
			stage.update();            
			stage.tickOnUpdate = true;		
		}
	}
	an.handleSoundStreamOnTick = function(event) {
		if(!event.paused){
			var stageChild = stage.getChildAt(0);
			if(!stageChild.paused || stageChild.ignorePause){
				stageChild.syncStreamSounds();
			}
		}
	}
	an.handleFilterCache = function(event) {
		if(!event.paused){
			var target = event.target;
			if(target){
				if(target.filterCacheList){
					for(var index = 0; index < target.filterCacheList.length ; index++){
						var cacheInst = target.filterCacheList[index];
						if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
							cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
						}
					}
				}
			}
		}
	}
	

}