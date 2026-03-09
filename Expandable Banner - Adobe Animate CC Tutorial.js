(function (cjs, an) {

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
// helper functions:

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


(lib.Tween37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0,-18.9,0,19).s().p("AjLDGQgqAAgegeQgdgdAAgqQAAgqAdgdQAegdAqAAIArAAIgBgLQAAhMA2g1QA1g2BKAAQBNAAA1A2QA1A1AABMIAAALIABAAQAqAAAeAdQAdAdAAAqQAAAqgdAdQgeAegqAAg");
	this.shape.setTransform(68.9,-90.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0.1,-15.1,0.1,15.1).s().p("Aj0CeQgZAAgSgRQgSgSAAgZQAAgZASgSQASgSAZAAIAqAAQgMgPAAgVQAAgYASgRQARgSAZAAIAlAAQgNgRAAgWQAAgZASgSQARgRAaAAIBIAAQAZAAARARQASASAAAZQAAAWgOARIBqAAQAZAAARASQASARAAAYQAAAVgMAPIAqAAQAZAAASASQARASAAAZQAAAZgRASQgSARgZAAg");
	this.shape_1.setTransform(263.15,94.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0,-27,0,27).s().p("AmKD/QgoAAgdgcQgdgdABgpQgBgoAdgcQAdgdAoAAIBDAAQgSgZAAghQAAgnAcgdQAdgcApAAICqAAQgXgaAAglQAAgoAdgcQAcgdAoAAIB1AAQAoAAAdAdQAdAcgBAoQABAlgXAaIA8AAQAoAAAdAcQAdAdgBAnQAAAhgSAZIBDAAQApAAAcAdQAcAcAAAoQAAApgcAdQgcAcgpAAg");
	this.shape_2.setTransform(340.65,-25.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],1,-15,1,23.4).s().p("AjLDGQgqAAgdgeQgegdAAgqQAAgqAegdQAdgdAqAAIArAAIAAgMQAAhLA1g1QA1g2BLAAQBLAAA1A2QA2A1AABLIAAAMIABAAQAqAAAdAdQAeAdAAAqQAAAqgeAdQgdAegqAAg");
	this.shape_3.setTransform(737.1,30.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],1.5,-11.5,1.5,21.1).s().p("Aj0CeQgZAAgSgRQgSgSAAgZQAAgZASgSQASgSAZAAIAqAAQgMgPAAgUQAAgYASgSQASgSAZAAIBpAAQgOgRAAgWQAAgZASgSQASgRAZAAIBIAAQAZAAASARQARASAAAZQAAAWgNARIAkAAQAZAAASASQASASAAAYQAAAUgMAPIAqAAQAZAAASASQASASAAAZQAAAZgSASQgSARgZAAg");
	this.shape_4.setTransform(1012.675,0.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],-2.4,-14.2,-2.4,21.4).s().p("AjMDGQgpAAgegeQgdgdAAgqQAAgqAdgdQAegdApAAIAsAAIgBgMQAAhLA2g1QA1g2BKAAQBMAAA1A2QA1A1AABLIAAAMIACAAQApAAAeAdQAeAdAAAqQAAAqgeAdQgeAegpAAg");
	this.shape_5.setTransform(1135.1,-19.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0,-18.9,0,19).s().p("AjLDGQgqAAgdgeQgegdAAgqQAAgqAegdQAdgdAqAAIArAAIgBgLQAAhMA2g1QA1g2BLAAQBLAAA2A2QA1A1AABMIAAALIABAAQAqAAAdAdQAeAdAAAqQAAAqgeAdQgdAegqAAg");
	this.shape_6.setTransform(-1135.1,-90.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0.1,-15.1,0.1,15.1).s().p("Aj0CeQgZAAgSgRQgRgSAAgZQAAgZARgSQASgSAZAAIApAAQgLgPAAgVQAAgYASgRQARgSAaAAIAlAAQgOgRAAgWQAAgZARgSQASgRAaAAIBIAAQAZAAARARQASASAAAZQAAAWgOARIBqAAQAYAAATASQARARAAAYQAAAVgMAPIAqAAQAZAAASASQASASAAAZQAAAZgSASQgSARgZAAg");
	this.shape_7.setTransform(-940.85,94.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],0,-27,0,27).s().p("AmKD/QgpAAgcgcQgcgdgBgpQABgoAcgcQAcgdApAAIBDAAQgSgZAAghQAAgnAdgdQAcgcAoAAICqAAQgWgaAAglQAAgoAdgcQAcgdAoAAIB1AAQAoAAAdAdQAcAcAAAoQAAAlgWAaIA8AAQAoAAAdAcQAcAdAAAnQAAAhgSAZIBDAAQApAAAcAdQAdAcAAAoQAAApgdAdQgcAcgpAAg");
	this.shape_8.setTransform(-863.35,-25.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],1,-15,1,23.4).s().p("AjLDGQgqAAgegeQgdgdAAgqQAAgqAdgdQAegdAqAAIArAAIAAgMQgBhLA2g1QA1g2BKAAQBMAAA1A2QA2A1AABLIAAAMIABAAQAqAAAdAdQAeAdAAAqQAAAqgeAdQgdAegqAAg");
	this.shape_9.setTransform(-466.9,30.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],1.5,-11.5,1.5,21.1).s().p("Aj0CeQgZAAgSgRQgSgSAAgZQAAgZASgSQASgSAZAAIAqAAQgMgPAAgUQAAgYASgSQASgSAZAAIBpAAQgOgRAAgWQAAgZASgSQASgRAZAAIBIAAQAZAAASARQARASAAAZQAAAWgNARIAkAAQAZAAASASQASASAAAYQAAAUgMAPIAqAAQAZAAASASQASASAAAZQAAAZgSASQgSARgZAAg");
	this.shape_10.setTransform(-191.325,0.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#65CFFD","rgba(14,74,245,0)"],[0,1],-2.4,-14.2,-2.4,21.4).s().p("AjMDGQgpAAgegeQgdgdAAgqQAAgqAdgdQAegdApAAIArAAIAAgMQAAhLA1g1QA2g2BKAAQBMAAA1A2QA1A1AABLIAAAMIACAAQApAAAfAdQAdAdAAAqQAAAqgdAdQgfAegpAAg");
	this.shape_11.setTransform(-68.9,-19.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1165.6,-110.7,2331.2,221.5);


(lib.Tween33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1E28C8").s().p("EhdvAGPIAAseMC7fAAAIAAMfg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-599.9,-39.9,1199.9,79.9);


(lib.Tween32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#205BF7").ss(2,1).p("AHbAcQgZAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgZAAgWgMQgUgNgMgUQgMAUgVANQgWAMgZAAQgYAAgWgMQgVgNgMgUQgMAUgUANQgWAMgZAAQgYAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgZAAgVgMQgVgNgNgUQgLAUgVANQgVAMgZAAQgZAAgWgMQgUgNgMgUQgNAUgUANQgVAMgZAA");
	this.shape.setTransform(0,7.8422);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#205BF7").ss(2,1).p("AJ5AcQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgMAUgVAMQgWANgZAAQgZAAgVgNQgVgMgMgUQgMAUgUAMQgWANgZAAQgYAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgNgUQgLAUgVAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgNAUgUAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgMAUgVAMQgWANgZAA");
	this.shape_1.setTransform(0,-0.5328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#205BF7").ss(2,1).p("AMXAcQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgMgUQgNAUgUAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgNAUgUAMQgWANgZAAQgYAAgWgNQgUgMgNgUQgMAUgUAMQgWANgZAAQgYAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgNgUQgLAUgVAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgNAUgUAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgNAUgUAMQgWANgZAAQgZAAgVgNQgUgMgNgUQgMAUgUAMQgWANgZAA");
	this.shape_2.setTransform(0,-8.8647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-12.6,160.2,24.299999999999997);


(lib.Tween31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#258AF7","#382CBE"],[0,1],0,36.9,0,-42).s().p("AsmGzIJSr1QBYhwB8AAQB8AABYBwIJTL1g");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.7,-43.5,161.5,87);


(lib.Tween30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#258AF7","#382CBE"],[0,1],0,44.2,0,-50.1).s().p("AvEIIILHuJQBqiGCTAAQCVAABpCGILHOJg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.5,-51.9,193,103.9);


(lib.Tween28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#205BF7").ss(2,1).p("AHbAcQgZAAgVgMQgWgNgLgUQgMAUgVANQgWAMgZAAQgZAAgVgMQgUgNgNgUQgMAUgUANQgWAMgZAAQgZAAgVgMQgVgNgLgUQgMAUgWANQgVAMgZAAQgYAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgZAAgWgMQgUgNgMgUQgMAUgVANQgWAMgYAAQgZAAgWgMQgVgNgMgUQgMAUgUANQgWAMgZAA");
	this.shape.setTransform(0,7.8422);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#205BF7").ss(2,1).p("AJ5AcQgZAAgWgMQgUgNgMgUQgMAUgVANQgWAMgZAAQgYAAgWgMQgVgNgMgUQgMAUgUANQgWAMgZAAQgZAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgZAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgYAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAAQgZAAgWgMQgUgNgMgUQgMAUgVANQgWAMgYAAQgZAAgWgMQgVgNgMgUQgMAUgUANQgWAMgZAAQgZAAgVgMQgVgNgMgUQgMAUgVANQgVAMgZAA");
	this.shape_1.setTransform(0.025,-0.5078);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#205BF7").ss(2,1).p("AMXAcQgZAAgVgNQgUgMgNgUQgMAUgUAMQgWANgZAAQgZAAgWgNQgUgMgMgUQgNAUgUAMQgVANgZAAQgZAAgVgNQgVgMgMgUQgMAUgVAMQgWANgZAAQgZAAgVgNQgUgMgNgUQgMAUgUAMQgWANgZAAQgZAAgVgNQgVgMgLgUQgNAUgVAMQgVANgZAAQgYAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgWgNQgUgMgMgUQgMAUgVAMQgWANgYAAQgZAAgWgNQgUgMgNgUQgMAUgUAMQgWANgZAAQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAAQgZAAgVgNQgVgMgMgUQgMAUgVAMQgVANgZAA");
	this.shape_2.setTransform(0,-8.8647);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.1,-12.6,160.2,24.299999999999997);


(lib.Tween26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205BF7").s().p("AgGAlQgPAAgLgLQgLgLAAgPQAAgOALgLQALgLAPAAIANAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAg");
	this.shape.setTransform(-41.225,8.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#205BF7").s().p("AjRAlQgPAAgKgLQgLgLAAgPQAAgOALgLQAKgLAPAAIGiAAQAQAAAKALQALALAAAOQAAAPgLALQgKALgQAAg");
	this.shape_1.setTransform(-8.975,11.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#205BF7").s().p("Ag9AkQgPAAgLgKQgLgLAAgPQAAgPALgKQALgKAPAAIB7AAQAPAAALAKQALAKAAAPQAAAPgLALQgLAKgPAAg");
	this.shape_2.setTransform(-26.125,-11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205BF7").s().p("AjIAkQgQAAgKgKQgLgLAAgPQAAgPALgKQAKgKAQAAIGSAAQAPAAALAKQAKAKAAAPQAAAPgKALQgLAKgPAAg");
	this.shape_3.setTransform(21.775,-11);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#205BF7").s().p("AkGAlQgPAAgLgLQgLgLAAgPQAAgOALgLQALgLAPAAIINAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAg");
	this.shape_4.setTransform(1.625,-3.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205BF7").s().p("AiEAlQAPgBAKgKQALgLAAgPQAAgOgLgLQgKgKgPgBIEJAAQgPABgKAKQgLALAAAOQAAAPALALQAKAKAPABg");
	this.shape_5.setTransform(-4.125,3.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.6,-14.6,91.2,29.299999999999997);


(lib.Tween25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205BF7").s().p("AgFAdQgLAAgJgIQgIgJAAgMQAAgLAIgJQAJgIALAAIAKAAQAMAAAJAIQAJAJgBALQABAMgJAJQgJAIgMAAg");
	this.shape.setTransform(32.6,7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#205BF7").s().p("AikAdQgMAAgJgJQgIgIAAgMQAAgLAIgIQAJgJAMAAIFJAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAg");
	this.shape_1.setTransform(7.125,8.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#205BF7").s().p("AgwAdQgMAAgJgIQgIgJAAgMQAAgLAIgJQAJgIAMAAIBhAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAg");
	this.shape_2.setTransform(20.65,-8.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#205BF7").s().p("AieAdQgMAAgJgIQgIgJAAgMQAAgLAIgJQAJgIAMAAIE9AAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAg");
	this.shape_3.setTransform(-17.175,-8.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#205BF7").s().p("AjPAdQgMAAgIgJQgJgIAAgMQAAgLAJgIQAIgJAMAAIGfAAQALAAAJAJQAJAIAAALQAAAMgJAIQgJAJgLAAg");
	this.shape_4.setTransform(-1.25,-2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#205BF7").s().p("AhoAdQAMAAAIgIQAJgJAAgMQAAgLgJgJQgIgIgMAAIDRAAQgMAAgIAIQgJAJABALQgBAMAJAJQAIAIAMAAg");
	this.shape_5.setTransform(3.3,2.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36,-11.5,72.1,23.1);


(lib.Tween24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#258AF7","#382CBE"],[0,1],0,43.8,0,-42.2).s().p("AtGHEIJqsSQBbh1CBAAQCBAABcB1IJqMSg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.9,-45.2,167.9,90.4);


(lib.Tween23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#258AF7","#382CBE"],[0,1],0,61.3,0,-69.6).s().p("A07LSIPbzpQCTi6DNAAQDPAACRC6IPbTpg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.9,-72.1,267.9,144.3);


(lib.Tween22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A21390").s().p("AxCHEIMksSQB3h1CnAAQCoAAB3B1IMkMSg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.1,-45.2,218.3,90.4);


(lib.Tween21 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FECCD2").ss(1.5,1,1).p("AgngqIATAiQAZAlAjAO");
	this.shape.setTransform(-8.35,16.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FECCD2").ss(1.5,1,1).p("Agpg0IAWAmQAcArAhAY");
	this.shape_1.setTransform(-5.025,-7.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FECCD2").ss(1.5,1,1).p("AhVAsIA2gRQA/gaA2gs");
	this.shape_2.setTransform(2.975,20.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FECCD2").ss(1.5,1,1).p("AhMBKIA1gkQA8gwAog/");
	this.shape_3.setTransform(5.975,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FECCD2").ss(1.5,1,1).p("AAmlGIAGA8QAFBLgDBPQgKD7hSC8");
	this.shape_4.setTransform(-4.9687,2.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FC0D1B").s().p("Ah8DkQgwhIgEgPQgPgvAUgMQARgJAYAQQAmAYAYgZQAZgagqgzQg9hJAIg8QADgYANgFQAOgGAQASQAqAvAJggQAJgegZhFQgKgdASghQARgeAcgNQAcgOARATQATAWgIA8QgRBzAFA2QAGA7AdgsQAPgWAegLQAdgLASAIQAxAWhjBnQhXBbgIAQQgNAdBOgMQAogGAPANQAMALgKAXQgYAzhDATQg2AQgsAbIggAZQgEgsgrg/g");
	this.shape_5.setTransform(0.0287,-2.1848);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-35.6,36.7,72.30000000000001);


(lib.Tween19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFBCC").ss(1.5,1,1).p("AA3g6QgIAWgSAaQgiAygwAT");
	this.shape.setTransform(11.45,22.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFBCC").ss(1.5,1,1).p("AA7hJQgLAXgUAeQgnA7gvAj");
	this.shape_1.setTransform(6.85,-9.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFBCC").ss(1.5,1,1).p("AB3A9QgegGgsgRQhZgkhKg+");
	this.shape_2.setTransform(-4.175,28.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFBCC").ss(1.5,1,1).p("ABrBnQgfgQgqgiQhUhCg4hZ");
	this.shape_3.setTransform(-8.35,-0.65);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFBCC").ss(1.5,1,1).p("Ag0nDIgHBTQgHBoAEBtQANFcByED");
	this.shape_4.setTransform(6.7988,4.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDA929").s().p("AA+GtQg9glhKgWQgqgMglgdQgigcgOgdQgOgfASgPQAUgSA3AIQBsAQgSgnQgKgXh4h+QhHhJgPgvQgMgoAcgMQAZgMAoAPQApAQAVAfQApA8AHhSQAHhKgXigQgMhTAbgeQAXgaAnATQAnASAXAqQAaAugOAoQgiBgAMApQAMArA6hAQAWgZAUAIQASAIAFAgQALBThVBmQg6BHAjAjQANAPAZAAQAYAAAWgOQAjgWAWANQAcAQgUBBQgHAVhCBjQg7BYgFA8QgPgPgegTg");
	this.shape_5.setTransform(-0.0089,-2.9806);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.2,-49.2,50.4,99.5);


(lib.Tween18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E28C8").ss(1.5,1,1).p("ABolHIAIBDQAGBUgLBSQghEIi7Ce");
	this.shape.setTransform(-4.2293,4.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#23D5D8").s().p("AgwASIgVgQIAUgPQAZgRAYAAQAYgBAZAPQANAHAIAHQgIAHgMAJQgZARgYAAIgCAAQgXAAgYgNg");
	this.shape_1.setTransform(0.95,29.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#23D5D8").s().p("AgtAYIgXgLIASgSQAWgUAXgFQAXgEAcAKQAOAGAJAGQgGAJgLAJQgWAUgYAEIgOACQgRAAgUgIg");
	this.shape_2.setTransform(6.025,19.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("AgjAlIgagDIALgYQAPgZAVgLQAVgMAdACQAPABAKADQgCAKgIANQgPAZgVALQgSAKgZAAIgHAAg");
	this.shape_3.setTransform(9.1,9.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#23D5D8").s().p("AgiAnIgZgDIAJgYQAOgaAVgMQAUgMAeAAQAPABAKACQgCALgHANQgOAZgVANQgTAMgcAAIgDAAg");
	this.shape_4.setTransform(11.575,-0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23D5D8").s().p("AgtAYQAHgcARgRQARgRAcgHQAOgEAMAAIgEAaQgHAcgRARQgRARgcAHIgZAEQgBgLAEgPg");
	this.shape_5.setTransform(12.15,-10.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#23D5D8").s().p("AgtAYQAHgcARgRQARgRAcgHQAOgEAMABIgEAZQgHAcgRARQgRARgcAHIgZAEQgBgLAEgPg");
	this.shape_6.setTransform(12.15,-20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgDgZIAZADQAcAHARARQARARAHAcQAEAOAAAMQgMAAgOgEg");
	this.shape_7.setTransform(-12.6,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgEgaIAaAEQAcAHARARQARARAHAcQAEAPgBAKQgKAAgPgDg");
	this.shape_8.setTransform(-6.6,15.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgDgZIAZADQAcAHARARQARARAHAcQAEAPAAALQgMgBgOgDg");
	this.shape_9.setTransform(-2.7,7.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgDgaIAZAEQAcAHARARQARARAHAcQADAPABALQgLAAgPgEg");
	this.shape_10.setTransform(-0.35,-1.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgEgaIAaAEQAcAHARARQARARAHAcQAEAPgBALQgLAAgOgEg");
	this.shape_11.setTransform(0.95,-10.775);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#23D5D8").s().p("AAYAuQgcgHgRgRQgRgRgHgcIgDgZIAZADQAcAHARARQARARAHAcQAEAPAAALQgMgBgOgDg");
	this.shape_12.setTransform(2.25,-20.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#23D5D8").s().p("AgGA0QgUgXgEgYQgEgXALgbIAMgXIASARQAUAXAEAXQAEAXgLAcQgGAOgGAJQgJgHgJgKg");
	this.shape_13.setTransform(5.925,-30.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.5,-37.4,35.1,75.9);


(lib.Tween17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D96F6").ss(2,1).p("AAtAsIhYhX");
	this.shape.setTransform(-4.45,1.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2D96F6").ss(2,1).p("AgwAxIBhhh");
	this.shape_1.setTransform(4.925,-4.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2D96F6").ss(2,1).p("AAAiXIAAEv");
	this.shape_2.setTransform(0,8.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("Ah2B3QgxgxAAhGQAAhEAxgyQAygxBEAAQBGAAAwAxQAyAyAABEQAABFgyAyQgwAxhGAAQhEAAgygxg");
	this.shape_3.setTransform(0,-6.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.8,-23.5,33.6,48.1);


(lib.Tween16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E28C8").ss(2,1).p("AAhAhIhBhB");
	this.shape.setTransform(-3.25,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1E28C8").ss(2,1).p("AgjAkIBHhH");
	this.shape_1.setTransform(3.6,-3.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E28C8").ss(2,1).p("AAAhuIAADd");
	this.shape_2.setTransform(0,6.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("AhWBXQgkgkAAgzQAAgyAkgkQAkgkAyAAQAzAAAkAkQAkAkAAAyQAAAzgkAkQgkAkgzAAQgyAAgkgkg");
	this.shape_3.setTransform(0,-4.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.3,-17.2,24.6,35.5);


(lib.Tween15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#2D96F6").ss(2,1).p("AAdAdIg5g5");
	this.shape.setTransform(-2.925,0.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#2D96F6").ss(2,1).p("AggAhIBBhB");
	this.shape_1.setTransform(3.25,-2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#2D96F6").ss(2,1).p("AAAhjIAADH");
	this.shape_2.setTransform(0,5.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("AhNBOQghggAAguQAAgtAhggQAgghAtAAQAuAAAgAhQAhAgAAAtQAAAughAgQggAhguAAQgtAAggghg");
	this.shape_3.setTransform(0,-4.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.1,-15.5,22.2,32.1);


(lib.Tween14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E28C8").ss(2,1).p("AAeAeIg7g7");
	this.shape.setTransform(-2.975,0.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1E28C8").ss(2,1).p("AghAiIBChD");
	this.shape_1.setTransform(3.4,-2.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E28C8").ss(2,1).p("AAAhmIAADN");
	this.shape_2.setTransform(0.05,5.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("AhQBRQgighAAgwQAAguAigiQAigiAuAAQAwAAAhAiQAiAiAAAuQAAAwgiAhQghAigwAAQguAAgigig");
	this.shape_3.setTransform(0.025,-4.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.4,-16,22.9,33.1);


(lib.Tween13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#1E28C8").ss(2,1).p("AAUAUIgngn");
	this.shape.setTransform(-1.975,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#1E28C8").ss(2,1).p("AgVAWIArgr");
	this.shape_1.setTransform(2.225,-1.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#1E28C8").ss(2,1).p("AAAhDIAACH");
	this.shape_2.setTransform(0,3.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#23D5D8").s().p("Ag1A2QgWgWAAggQAAgeAWgXQAXgWAeABQAfgBAXAWQAWAXAAAeQAAAggWAWQgXAVgfAAQgeAAgXgVg");
	this.shape_3.setTransform(0.025,-3.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-10.6,15.1,22.2);


(lib.Tween12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9999").ss(1.5,1).p("AB0iyIgaAtQghAygoAdQAEA0AHAxQgagNgigdQhIg4gvhKAAWl8IgHBGQgFBYADBcQABAmADAmACYBnIgWAoQgeAsgpAQQAHAbAIAZQgZgEglgPQhLgeg/g1AAcAvQAMBRATBLABKD/QAUBCAbA8");
	this.shape.setTransform(-0.9,3.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AA0FpQgzggg/gSQgjgKgfgYQgdgXgLgZQgLgaAOgNQARgPAvAHQBbANgPghQgJgThmhqQg8g+gMgoQgKghAXgKQAWgKAhANQAjANASAaQAiAzAGhFQAGhAgTiFQgKhGAXgZQATgWAhAQQAgAPAUAjQAVAmgMAiQgcBSAKAiQAKAkAxg2QATgUAQAGQAQAHADAbQAKBFhIBWQgxA8AeAeQALAMAVAAQAUABATgNQAdgSATALQAXANgRA3QgFASg4BTQgxBKgFAyQgMgMgagQg");
	this.shape_1.setTransform(-0.0053,-2.4913);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.2,-41.4,42.4,83.9);


(lib.Tween10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#860E7B").s().p("AAAEbQjNgCAAgGIAAotIGbADIAAItQAAAFiEAAIhKAAg");
	this.shape.setTransform(-20.65,73.29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#860E7B").s().p("AivBDIAAiGIFfABIAACFg");
	this.shape_1.setTransform(-17.6,38.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382CBE").s().p("AhsBCIABiEIDYABIgBCEg");
	this.shape_2.setTransform(-13.875,25.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#860E7B").s().p("AiMBNIABiaIEXAAIAACbg");
	this.shape_3.setTransform(-14.05,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#860E7B").s().p("Ah6AnIAAhOID1ABIAABOg");
	this.shape_4.setTransform(-12.275,-3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#860E7B").s().p("AhbAnIAAhNIC3AAIgBBNg");
	this.shape_5.setTransform(-9.075,-24.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#032B61").s().p("AhaAXIhAgtIE1AAIAAAtg");
	this.shape_6.setTransform(-15.475,-9.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#032B61").s().p("Ag9AVIg7gpIDxAAIAAApg");
	this.shape_7.setTransform(-12,-30.875);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#148B9B").s().p("AinBSIABgeQBZgcBpg4QA1gcAjgWIA0AAIgBClg");
	this.shape_8.setTransform(-16.675,-19.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#032B61").s().p("AhrAaIhEgzIFfABIAAAyg");
	this.shape_9.setTransform(-17.575,13.625);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#148B9B").s().p("AjNBmIAAgmQBugiCBhFQBBgjArgcIBAABIAADMg");
	this.shape_10.setTransform(-20.575,0.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC0D1B").s().p("AjVD6IAQoSIGbADIAAItQAAABgNAAQg+AAlggfg");
	this.shape_11.setTransform(19.775,73.4196);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC0D1B").s().p("AivBDIAAiFIFfAAIAACGg");
	this.shape_12.setTransform(17.55,38.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#205BF7").s().p("AhrBCIAAiEIDYABIAACEg");
	this.shape_13.setTransform(13.85,25.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC0D1B").s().p("AiLBOIAAibIEXABIAACag");
	this.shape_14.setTransform(14.025,24.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FC0D1B").s().p("Ah6AnIAAhNID1AAIAABNg");
	this.shape_15.setTransform(12.375,-3.15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC0D1B").s().p("AhbAnIABhNIC2AAIAABNg");
	this.shape_16.setTransform(9.225,-24.825);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#094F9A").s().p("AiaAXIAAgtIE1AAIhAAtg");
	this.shape_17.setTransform(15.575,-9.375);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#094F9A").s().p("Ah4AVIAAgpIDxAAIg7Apg");
	this.shape_18.setTransform(12.175,-30.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23D5D8").s().p("AimBTIAAimIA0AAIBXA0QBpA4BZAcIAAAfg");
	this.shape_19.setTransform(16.8,-19.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#094F9A").s().p("Ai7AZIAAgyIF3AAIhJAzg");
	this.shape_20.setTransform(18.775,13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#23D5D8").s().p("AjNBmIAAjLIBAAAIBsA/QCBBEBuAjIAAAlg");
	this.shape_21.setTransform(20.625,0.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#148B9B").s().p("AiIAoQBKgXBVgtQArgXAdgTIAqAAIAACIIkRgBIAAAGIAAgfg");
	this.shape_22.setTransform(-13.6375,-39.5052);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDA929").s().p("AgLAoIgRhPIA5AAIAABPg");
	this.shape_23.setTransform(-2.775,-50.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDA929").s().p("AgJAoIgQhPIAyAAIAABPg");
	this.shape_24.setTransform(-2.4,-58.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDA929").s().p("AgIAnIgMhNIApAAIAABNg");
	this.shape_25.setTransform(-1.95,-65.525);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#23D5D8").s().p("AiIBEIAAiHIArAAIBHApQBWAuBJAXIAAAZg");
	this.shape_26.setTransform(13.825,-39.75);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FEC92E").s().p("AgcAoIAAhPIA5AAIgRBPg");
	this.shape_27.setTransform(3.025,-50.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FEC92E").s().p("AgYAnIAAhOIAyAAIgQBPg");
	this.shape_28.setTransform(2.7,-58.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FEC92E").s().p("AgUAnIAAhNIApAAIgNBNg");
	this.shape_29.setTransform(2.25,-65.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.2,-69.4,82.5,171);


(lib.Tween9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B1287").s().p("AAAAlQitABibgLQikgLhvgVIgHgJIg7gWQBpAcC6APQCvAPDLgBQDMABCvgPQC6gPBpgcIg7AWIgIAJQjeAqlsAAIgRAAg");
	this.shape.setTransform(0,-42.5739);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_1.setTransform(-49.075,-10.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_2.setTransform(-45.525,-10.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_3.setTransform(-41.975,-10.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_4.setTransform(-38.425,-10.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_5.setTransform(-34.875,-10.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_6.setTransform(-31.325,-10.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_7.setTransform(-27.775,-10.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8B1287").s().p("AgFAZIAAgxIAKAAIAAAxg");
	this.shape_8.setTransform(-24.25,-10.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B1287").s().p("AgEAZIAAgxIAKAAIAAAxg");
	this.shape_9.setTransform(-20.7,-10.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8B1287").s().p("AgFAZIAAgxIAKAAIAAAxg");
	this.shape_10.setTransform(-17.15,-10.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_11.setTransform(-13.625,-10.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_12.setTransform(-10.075,-10.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_13.setTransform(-6.525,-10.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_14.setTransform(-2.975,-10.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_15.setTransform(0.575,-10.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_16.setTransform(4.125,-10.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_17.setTransform(7.675,-10.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_18.setTransform(11.225,-10.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_19.setTransform(14.775,-10.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8B1287").s().p("AgFAZIAAgxIAKAAIAAAxg");
	this.shape_20.setTransform(18.3,-10.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8B1287").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_21.setTransform(21.85,-10.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_22.setTransform(25.4,-10.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B1287").s().p("AgFAZIAAgxIALAAIAAAxg");
	this.shape_23.setTransform(28.95,-10.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_24.setTransform(32.475,-10.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_25.setTransform(36.025,-10.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_26.setTransform(39.575,-10.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_27.setTransform(43.125,-10.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8B1287").s().p("AgEAZIAAgxIAJAAIAAAxg");
	this.shape_28.setTransform(46.675,-10.25);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FDA929").s().p("AoUAuIgBgeIgbgHIgyg7Ig7gWQBpAcC6AQQCvAPDLgBQDMABCvgPQC6gQBpgcIg7AWIgyA7IgbAHIgBAeQjhAak0ABQkzgBjhgag");
	this.shape_29.setTransform(0,-38.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FCE576").s().p("AhFAPIAjgdIBFAAIAjAdg");
	this.shape_30.setTransform(-46.675,6.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#B2282F").s().p("AgMARIAAghIAaAAIAAAhg");
	this.shape_31.setTransform(-49.25,9.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CC1C32").s().p("AgyARIAAghIBlAAIAAAhg");
	this.shape_32.setTransform(-46.7,9.325);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FC0D1B").s().p("AgLDcIAAm3IAXAAIAAG3g");
	this.shape_33.setTransform(-47.875,31.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#CC1C32").s().p("AgXDcIAAm3IAvAAIAAG3g");
	this.shape_34.setTransform(-46.675,31.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FCE576").s().p("AhFAPIAjgdIBFAAIAjAdg");
	this.shape_35.setTransform(45.35,6.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B2282F").s().p("AgNARIAAghIAaAAIAAAhg");
	this.shape_36.setTransform(42.8,9.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC1C32").s().p("AgyARIAAghIBlAAIAAAhg");
	this.shape_37.setTransform(45.325,9.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FC0D1B").s().p("AgLDcIAAm3IAXAAIAAG3g");
	this.shape_38.setTransform(44.125,31.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC1C32").s().p("AgXDcIAAm3IAvAAIAAG3g");
	this.shape_39.setTransform(45.325,31.325);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FCE576").s().p("AoQATIgUglIARAGQAXAIAgACQARABHLgBQHMABARgBQAzgEAVgMIgUAlg");
	this.shape_40.setTransform(-0.675,-15.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDA929").s().p("AoRAsIAAhXIQjAAIAABXg");
	this.shape_41.setTransform(-0.65,-11.15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#CC1C32").s().p("AoUACIgBgeQIXA5IUg5IgBAeQjhAak0ABQkzgBjhgag");
	this.shape_42.setTransform(0,-34.525);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#910720").s().p("AgugNIBcgFIAAAgQguAEguAAg");
	this.shape_43.setTransform(36.8,-32.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FCE576").s().p("AoUBRIgBgeIgbgHIgyg7Ig7gWIgOhGQBiAgDAASQCzAQDWAAQDXAACzgQQDAgSBiggIgOBGIg7AWIgzA7IgbAHIAAAeQjiAakzABQkzgBjhgag");
	this.shape_44.setTransform(0.025,-42.475);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#910720").s().p("AgtARIAAgmIBbAHIAAAkIgTAAQgoAAgggFg");
	this.shape_45.setTransform(-38.1,-33.0109);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#910720").s().p("AgtANIAAgZIBbAAIAAAZg");
	this.shape_46.setTransform(-38.1,-6.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#910720").s().p("AguANIAAgZIBcAAIAAAZg");
	this.shape_47.setTransform(36.8,-6.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FC0D1B").s().p("AgWHDIAAuFIAtAAIAAOFg");
	this.shape_48.setTransform(34.475,8.225);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#CC1C32").s().p("AguHDIAAuFIBcAAIAAOFg");
	this.shape_49.setTransform(36.8,8.225);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#CC1C32").s().p("AgWHDIAAuFIAtAAIAAOFg");
	this.shape_50.setTransform(-35.775,8.225);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FC0D1B").s().p("AgtHDIAAuFIBbAAIAAOFg");
	this.shape_51.setTransform(-38.1,8.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.3,-53.3,136.7,106.6);


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0413A0").s().p("AgYjSIAGAAIAVAAIAGgBIChGhIgdAAIgshzIjFAEIgoB0IgdABgAhCgDIgXBAICtgDIgZhAgAgYh/IgfBaIBmgCIgihZg");
	this.shape.setTransform(0.625,15.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0413A0").s().p("Ai1C9QhPhLgChtQgChsBLhOQBNhPBsgCQBsgCBOBMQBPBLACBtQACBshMBOQhLBPhtACIgGAAQhoAAhMhKgAgDj9Qg0ABgvAVQgtAUgiAkQgjAkgSAuQgTAvABAzQAAAzAVAvQAUAtAkAjQAkAiAuATQAvATAzgBQAzgBAvgVQAtgUAigkQAjgkASguQAUgvgCgzQAAgzgVgvQgUgtgkgjQgjgigugSQgvgTgxAAIgCAAg");
	this.shape_1.setTransform(-0.1,-2.9736);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0413A0").s().p("AjXDgQhdhZgCiBQgDiABahdQBZhdCCgCQB/gCBdBZQBdBZACCBQACCAhZBdQhZBdiBACIgGAAQh9AAhahXgAgEktQg+ABg3AZQg2AYgqAqQgoArgWA3QgXA4ABA9QABA9AZA4QAYA1ArApQAqApA3AWQA4AXA9gBQA9gBA4gZQA1gYApgrQAqgqAVg3QAXg4gBg9QgBg9gZg4QgYg1grgpQgqgpg2gWQg3gWg6AAIgEAAg");
	this.shape_2.setTransform(-0.1,-2.9738);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0413A0").s().p("AgDAkIhCEHIgJgDIBCkHIiEDuIgIgFICEjtIi8DDIgHgHIC8jDIjoCMIgFgIIDoiMIkEBLIgDgJIEEhLIkPAFIAAgJIEPgEIkGhBIABgJIEHBBIjtiDIAFgIIDtCDIjDi8IAGgHIDEC8IiMjoIAIgFICMDoIhMkEIAJgDIBMEEIgFkOIAJgBIAEEPIBCkHIAJADIhCEHICDjuIAIAFIiCDtIC7jDIAHAHIi8DDIDoiMIAFAIIjoCMIEFhLIACAJIkFBLIEPgFIAAAJIkPAEIEHBBIgCAJIkGhBIDsCDIgEAIIjtiDIDDC8IgHAHIjCi8ICLDoIgIAFIiLjoIBKEEIgJADIhKkEIAEEOIgJABg");
	this.shape_3.setTransform(-0.1,-2.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0413A0").s().p("AgbgZQAIgHATgBQASAAAIAHIABA7Ig1ABg");
	this.shape_4.setTransform(-22.15,-24.2266);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIABA7Ig0ABg");
	this.shape_5.setTransform(-8.575,-32.7766);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0413A0").s().p("AgbgZQAIgHATgBQASAAAIAHIABA7Ig1ABg");
	this.shape_6.setTransform(7.3,-33.0516);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAIAHIABA7Ig1ABg");
	this.shape_7.setTransform(-29.65,-10.2266);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0413A0").s().p("AgbgZQAIgHATgBQATAAAHAHIABA7Ig1ABg");
	this.shape_8.setTransform(-29.35,5.7734);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIABA7Ig0ABg");
	this.shape_9.setTransform(-21.375,19.1234);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIABA7Ig0ABg");
	this.shape_10.setTransform(-7.475,26.7984);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQASAAAIAHIACA7Ig1ABg");
	this.shape_11.setTransform(8.4,26.5234);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIABA7Ig0ABg");
	this.shape_12.setTransform(21.975,18.3234);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAIAHIABA7Ig1ABg");
	this.shape_13.setTransform(29.65,4.4234);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIABA7Ig0ABg");
	this.shape_14.setTransform(29.375,-11.4266);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#0413A0").s().p("AgagZQAHgHATgBQATAAAHAHIACA7Ig1ABg");
	this.shape_15.setTransform(21.2,-25.0266);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.4,-36.4,64.8,72.9);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F118F").s().p("AvdAkIBkghQB/geCGALQC7AQCgAAQDAACAygVQAwgVE7AHQEbAGCGAPQBHAIBjACQBCAEANAig");
	this.shape.setTransform(-1.625,39.1482);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DCCDDF").s().p("AmODZQCKi+DChuQDTh4D+gNQhfBYg7CGQgjBQggCDg");
	this.shape_1.setTransform(24.425,10.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8FBF8").s().p("AiVF3QgViYgtiqQhalTh5hXQD8gPDJCCQCsBvBoC+QBOCNAfBuQAPA3AAAag");
	this.shape_2.setTransform(-0.525,-5.2323);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DCCDDF").s().p("AgiCZQgiAIgkATQgRAJgLAHQBUiYAhhSQASgyASg7QAPg1gBgFIA7CpQA3CygXBAQg0hQhsAbg");
	this.shape_3.setTransform(-28.1359,11.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8FBF8").s().p("Ah0BgQAPgdAcgmQA4hMBAgwIgCAcQgCAhAEAdQAEAcAhAoQARATAQAOg");
	this.shape_4.setTransform(70.525,25.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DCCDDF").s().p("AgoAJQgahmgxgPIA1ABQA4ACAYAHQAmALA8AXIiMCtQgCgxgOgzg");
	this.shape_5.setTransform(61.3,23.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DCCDDF").s().p("AjQCJQAPgcAcgmQA3hMBCgwIAdgVQBMguBSgMQApgHAZAEQgTAPgYAYQgvAygbAuQgqBLgZA+g");
	this.shape_6.setTransform(79.75,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#DCCDDF").s().p("AAZiYIArBlQAqB0gKBVQgKgMgTgMQgngXgvABQgwACgcAhIgKAOg");
	this.shape_7.setTransform(-51.474,16.3625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8FBF8").s().p("AgPAeQhRiRhVgQIAzgSQA/gTA7gDQA7gEBHAMQAkAFAYAHIiGFEQgXhGgohJg");
	this.shape_8.setTransform(-67.225,16.2592);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F8FBF8").s().p("AhThbQghhCgnhBIghgzQCrgGB3BMQA8AlAbAnIgCAmQgEAxgKA6QgKA5gmA1QhbB9gNAVQAAiZhojUg");
	this.shape_9.setTransform(-43.55,3.9529);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#382CBE").s().p("AoVBUIAAinIQrAAIAACng");
	this.shape_10.setTransform(-11.175,23.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#A21390").s().p("AtDA8QAHgNAMgQQAYgfAdgSQAqgaA3gDQAcgBATADIIwgMQJUgIC2AaQAsAHApAuQAUAXAMAXg");
	this.shape_11.setTransform(4.625,33.216);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.6,-42.7,201.3,85.5);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC1C32").s().p("AgzORIAA8hIBnAAIAAchg");
	this.shape.setTransform(-11.525,50.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FD8B25").s().p("AgzORIAA8hIBnAAIAAchg");
	this.shape_1.setTransform(11.6,50.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8B1287").s().p("AhBBkQgRgqAAgyQAAhFAfgyQAfgxArAAQAgAAAcAeQgVgPgXAAQgrAAgfAxQgfAyAABFQAAAqANAlQAMAkAVAXQgcgUgRgpg");
	this.shape_2.setTransform(-16.725,-71.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B1287").s().p("AA2BmQAMglABgqQgBhFgegyQgfgxgrAAQgWAAgWAPQAcgeAgAAQArAAAfAxQAeAyABBFQgBAygQAqQgRApgbAUQAUgXAMgkg");
	this.shape_3.setTransform(16.8,-71.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2B2F54").s().p("AgEAzQgEgGAAgKIAAgFIgyhHIALgQIAxBHIAFgBIAFACIAkgyIALAQIglAyIAAAEQAAAKgEAGQgFAHgGAAQgHAAgEgHg");
	this.shape_4.setTransform(-14.85,-72.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#2B2F54").s().p("AgEAzQgEgGAAgKIABgFIgzhHIALgQIAyBHIADgBQAEAAACACIAkgyIALAQIglAyIAAAEQAAAKgEAGQgFAHgHAAQgGAAgEgHg");
	this.shape_5.setTransform(14.55,-72.275);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCE576").s().p("AhJB3QgfgxAAhGQAAhFAfgxQAegyArAAQAsAAAfAyQAeAxAABFQAABGgeAxQgfAygsAAQgrAAgegyg");
	this.shape_6.setTransform(-14.475,-70.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCE576").s().p("AhJB3QgfgxAAhGQAAhFAfgxQAegyArAAQAsAAAfAyQAeAxAABFQAABGgeAxQgfAygsAAQgrAAgegyg");
	this.shape_7.setTransform(14.525,-70.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FC0D1B").s().p("AikARIAAghIFJAAIAAAhg");
	this.shape_8.setTransform(-16.35,-50.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CC1C32").s().p("AiCAJIAAgQIEFAAIAAAQg");
	this.shape_9.setTransform(-12.975,-47.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FD8B25").s().p("AiCAJIAAgQIEFAAIAAAQg");
	this.shape_10.setTransform(12.925,-47.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CC1C32").s().p("AiRAJIAAgQIEjAAIAAAQg");
	this.shape_11.setTransform(-14.475,-91);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FD8B25").s().p("AiRAJIAAgQIEjAAIAAAQg");
	this.shape_12.setTransform(14.45,-91);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC0D1B").s().p("AikARIAAghIFJAAIAAAhg");
	this.shape_13.setTransform(-16.35,-93.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC1C32").s().p("AhKB7ICVj1IAAD1g");
	this.shape_14.setTransform(-7.35,-129.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FC0D1B").s().p("AhIA7IAAh1ICRAAIAAB1g");
	this.shape_15.setTransform(-7.15,-111);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CC1C32").s().p("AiAAxIBuhiICTAAIAABig");
	this.shape_16.setTransform(-12.75,-100.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8B1287").s().p("AhAOXIAA8tICBAAIAActg");
	this.shape_17.setTransform(12.925,49.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8B1287").s().p("AhAOXIAA8tICBAAIAActg");
	this.shape_18.setTransform(-12.85,49.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FC0D1B").s().p("AiCPEIAA+HIEFAAIAAeHg");
	this.shape_19.setTransform(-12.95,45.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FC0D1B").s().p("AiRDnIAAnNIEjAAIAAHNg");
	this.shape_20.setTransform(-14.45,-72.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDA929").s().p("AikARIAAghIFJAAIAAAhg");
	this.shape_21.setTransform(16.35,-50.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDA929").s().p("AikARIAAghIFJAAIAAAhg");
	this.shape_22.setTransform(16.35,-93.525);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FD8B25").s().p("AhKB7IAAj1ICVD1g");
	this.shape_23.setTransform(7.325,-129.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDA929").s().p("AhIA7IAAh1ICRAAIAAB1g");
	this.shape_24.setTransform(7.15,-111);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FD8B25").s().p("AiAAxIAAhiICTAAIBuBig");
	this.shape_25.setTransform(12.725,-100.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDA929").s().p("AiCPEIAA+HIEFAAIAAeHg");
	this.shape_26.setTransform(12.925,45.125);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDA929").s().p("AiRDnIAAnNIEjAAIAAHNg");
	this.shape_27.setTransform(14.45,-72.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.8,-141.5,65.69999999999999,283);


(lib.Tween3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#23D5D8").s().p("ArPAwIABhzIWeAUIgBBzg");
	this.shape.setTransform(0.025,143.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3E47A8").s().p("AgnBkIACjIIBNABIgCDIg");
	this.shape_1.setTransform(13.75,107.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3E47A8").s().p("AgnBkIADjIIBMABIgCDIg");
	this.shape_2.setTransform(-0.225,106.925);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3E47A8").s().p("AgnBkIACjIIBNABIgDDIg");
	this.shape_3.setTransform(-14.175,106.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3E47A8").s().p("AnOAWIABg4IOcAMIgBA5g");
	this.shape_4.setTransform(0.125,134.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#23D5D8").s().p("AnPAzIAChyIOdAMIgCBzg");
	this.shape_5.setTransform(0.175,131.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#3E47A8").s().p("AlhAQIABgqILCAKIgBArg");
	this.shape_6.setTransform(0,68.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#23D5D8").s().p("AlhAmIABhVILCAJIgBBXg");
	this.shape_7.setTransform(0.025,65.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3E47A8").s().p("Al/ARIABgrIL+AKIgBArg");
	this.shape_8.setTransform(0,84.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#23D5D8").s().p("Al/AmIABhWIL+ALIgBBWg");
	this.shape_9.setTransform(0.025,81.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#3E47A8").p("AkUikIIyAIIgJFBIoygIg");
	this.shape_10.setTransform(-0.175,106.2252);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#23D5D8").s().p("AlGE0IAJpwIKEAJIgJJwg");
	this.shape_11.setTransform(-0.175,97.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3E47A8").s().p("AA5hbIArAYIjHCfg");
	this.shape_12.setTransform(-19.075,-58.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#3E47A8").s().p("ADikEIAXB8InxGNg");
	this.shape_13.setTransform(4.825,35.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#3E47A8").s().p("ACCjeIAmApIlPGUg");
	this.shape_14.setTransform(6.7,-37.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3E47A8").s().p("AgSBEIgjgXQgKgGgCgLQgCgLAGgKIAshCQAGgJALgDQAKgCAKAGIAiAXQAKAGACALQACALgGAKIgsBCQgGAJgLACIgFABQgIAAgGgEg");
	this.shape_15.setTransform(38.275,-23.598);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#3E47A8").s().p("AiHCkIDrljIAlAYIjvFng");
	this.shape_16.setTransform(36.9,-26.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#23D5D8").s().p("Ai7B0IDolVICPBcIjvFng");
	this.shape_17.setTransform(31.775,-29.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3E47A8").s().p("AhchGIC5jZIisI/g");
	this.shape_18.setTransform(-10.675,-32.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#23D5D8").s().p("AiIAKICci4IB1BDIh6Eag");
	this.shape_19.setTransform(-15.35,-50.675);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3E47A8").s().p("AhXAYIABgYICugrIidBXg");
	this.shape_20.setTransform(23.425,-87.65);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#3E47A8").s().p("AgVgEIhBgpICtAvIgCAcIgRAQg");
	this.shape_21.setTransform(-10.575,-87.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3E47A8").s().p("AgwBKIgLgUIBEhRIAzg0IgpBXIgnBIg");
	this.shape_22.setTransform(15.8,-94.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#3E47A8").s().p("AgbgIIgehJIA8BEIA3BFIgPAYIgZACg");
	this.shape_23.setTransform(-2.775,-94.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#3E47A8").s().p("AgXBSIALhiIAOhPIAOBXIAIBbIgYANg");
	this.shape_24.setTransform(6.225,-96.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#23D5D8").s().p("AAAgIQhDgBguAaIAAgOQAfgYBSACQBVABAdAZIgBANQgsgbhFgBg");
	this.shape_25.setTransform(6.15,-82.6323);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#1698A2").s().p("AAAAPQhDgBgtAbQgBgTADgWIADgQQgBgOAjgHQAegHAsABQAtABAfAHQAiAIgBAOIACAQQACAWgBATQgsgchFgBg");
	this.shape_26.setTransform(6.1264,-85.0067);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#3E47A8").s().p("ABtBPQgXgCgigdQglgggPgiQgPAiglAeQgiAdgWABIgBgTQgEhRA5glQAdgTAfgDQA3AFAbAmQAaAlgCA/IgBAYg");
	this.shape_27.setTransform(6.1229,-80.4125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#3E47A8").s().p("Ag3CPIAEkdIABAAQAtABAfAqQAfAqgBA6QAAA7giApQggApgsABg");
	this.shape_28.setTransform(11.4765,-74.525);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#23D5D8").s().p("AhNBlQgggsAAg6QABg7AhgpQAhgpAsAAQAuABAfAqQAgAqgBA6QgBA7ghApQghApgsABIgCAAQgqAAgggqg");
	this.shape_29.setTransform(6.1262,-74.5242);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#3E47A8").s().p("AgXAjIABg9QAXAAAXgIIAAAhQgBAPgOAKQgMALgTAAIgBAAg");
	this.shape_30.setTransform(8.525,-58.0739);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#23D5D8").s().p("AAAA6QgTAAgOgOQgOgPABgTIAAgUQAAgUAOgOQAOgOATABQATAAAOAOQAOAOAAAUIgBAUQAAAUgOANQgOAOgTAAIAAAAg");
	this.shape_31.setTransform(6.1991,-60.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#1698A2").s().p("AAABoQhFAAgLgFQgegNgDhCQgEhEAjgeQAcgaA4AAQA4ACAcAaQAhAggFBDQgFBCgeAMQgIAEgmAAIghgBg");
	this.shape_32.setTransform(6.1668,-78.3214);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3E47A8").s().p("AhZAVIAHguICsAzg");
	this.shape_33.setTransform(23.625,-82.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3E47A8").s().p("AhZAYICtgvIAGAvg");
	this.shape_34.setTransform(-10.325,-82.725);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3E47A8").s().p("AhNAJQgIAAgGgGQgGgFAAgIIDDADQgBAHgFAFQgGAGgIAAg");
	this.shape_35.setTransform(-25.875,-123.075);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#23D5D8").s().p("AhNATQgIAAgGgGQgGgGAAgHQAAgIAGgGQAGgGAIAAICbACQAIABAGAGQAGAFAAAHQAAAIgGAGQgGAGgIAAg");
	this.shape_36.setTransform(-25.875,-124.075);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#23D5D8").s().p("AALA4IgoAAQgGAAgEgCIABhSQAAgLAJgIQAIgIALAAIAoAAIAKACIAAADIgBBPQgBAMgHAIQgJAHgKAAIgBAAg");
	this.shape_37.setTransform(-26.95,-113.8735);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3E47A8").s().p("AAUBEIgpgBQgLAAgIgIQgIgIAAgLIABhQQABgLAIgIQAIgIALAAIAoABQAMAAAIAIQAIAJgBALIgBBPQAAALgIAIQgIAIgKAAIgBAAg");
	this.shape_38.setTransform(-26.0985,-112.7235);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#1698A2").s().p("AgkAZIgjgyICPACIglAxg");
	this.shape_39.setTransform(-25.675,-121.075);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#3E47A8").s().p("AgEB6QgHAAgEgFQgFgFAAgGIADjTQAAgGAFgFQAFgFAGAAIAGABQAHAAAEAEQAFAFAAAHIgDDSQAAAHgFAEQgFAFgGAAg");
	this.shape_40.setTransform(-26.025,-113.625);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#3E47A8").s().p("AgFAiQgGAAAAgHIAAg1QAAgHAHAAIAKAAQAAAAABAAQABABAAAAQABAAAAAAQABABAAAAQACADAAACIAAA1QAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgDACgCAAg");
	this.shape_41.setTransform(-20.725,-113.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#3E47A8").s().p("AhGA5QgqiQANjlIAeAAQACDhAXBVQAcBgB3CzIgpAwQhkiUgghwg");
	this.shape_42.setTransform(-19.0642,-80.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#23D5D8").s().p("AhbA5QgqiQANjlIBAABQgDCZAYBqQAoC5B3BdIhTBfQhkiUgghwg");
	this.shape_43.setTransform(-16.9642,-80.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FD9727").s().p("AgpBpIgNgFQgFgZAOg7QAPg8gEgWIABAAQAFALgBADIADgIQALAMAKAPQAJAQgCAGQAKgXABgZQAAgSgFgfQAnA8AIA1QAJBAgpAgQgHAEgLACQgJACgKAAQgNAAgOgEg");
	this.shape_44.setTransform(-26.5606,-139.0958);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FC5B1F").s().p("AgZB/Qg6gRANhLIAOg+QAJgmgDgUQAIAFAQAVQAPAVgCAHQAKgXAAgZQABgTgGggQA1A8AUBGQAYBUgyAmQgHAEgLACQgKADgKAAQgMAAgOgEg");
	this.shape_45.setTransform(-24.9433,-137.1913);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3E47A8").s().p("AAAAxQghgBgWgYQgXgYAAghIABgNIBmgCIA1ALIABAGQgBAhgXAXQgXAYggAAIAAAAg");
	this.shape_46.setTransform(6.5245,-56.7745);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#23D5D8").s().p("AjkB3ICFnLIBKgFIA9ABIBqAWIBlBuIntIug");
	this.shape_47.setTransform(5.1,-27.175);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#3E47A8").s().p("AjyD0IFmpOICHAgIn1KVg");
	this.shape_48.setTransform(4.675,-17);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#23D5D8").s().p("AjrF6IBUl/IGLnvIAhCwIopM5g");
	this.shape_49.setTransform(-3.25,11.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#3E47A8").s().p("AkRGXICQlAIGTnwImtMzg");
	this.shape_50.setTransform(-3.55,20.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#23D5D8").s().p("AirgnICNiaQDHi3AXgeQgCAcAYCjIAfDEInpGqg");
	this.shape_51.setTransform(4.425,21.225);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#23D5D8").s().p("ADajvQAJAIApDKIAmDIIpjBFg");
	this.shape_52.setTransform(-0.35,37.575);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3E47A8").s().p("AkEJdICDy/IE4AEIBOTBg");
	this.shape_53.setTransform(1.125,1.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3E47A8").s().p("ABQCHQgagGgbgfIgMgKQgbgeguhIQgggygbgyIAcgVQAGgBBlCEIBlCCQgNAKgPAAIgLgBg");
	this.shape_54.setTransform(28.8,-31.8325);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#23D5D8").s().p("ABOCnQgcgDgegiIgMgLQgggjg6heIgzhXIBUhGQANAZA+BYQBCBbAYAZQASASAAAbQAAAagPASQgOARgUAAIgHgBg");
	this.shape_55.setTransform(29.475,-34.9795);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72,-150.2,144.1,300.5);


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B1C8A").s().p("Ag2gBIBtgCIAAAFIhtACg");
	this.shape.setTransform(0.175,27.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B1C8A").s().p("Ag0AZQgDgMACgVIACgTIBmgCIADAUQACAVgDAMQgRAFgkABQgjAAgRgFg");
	this.shape_1.setTransform(0.2794,30.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D50BE").s().p("AgyAZQgFgKABgYIADgXIBmgCQAIApgIARQgEAKgvABIgDAAQgrAAgEgKg");
	this.shape_2.setTransform(0.3002,30.5762);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CBEBF2").s().p("Ag/AJIB+gCIgEAGIh2ABgAhPgLICfgCIgEAFIiXACg");
	this.shape_3.setTransform(0.225,19.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FC0D1B").s().p("AhTgPICngDIgcAjIhwACg");
	this.shape_4.setTransform(0.225,19.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B1C8A").s().p("AAAAgIgHhAIACAAIACATIAJgSIADABIgMAWIAFAog");
	this.shape_5.setTransform(-4.7,24.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5B1C8A").s().p("AAAAjIgBgpIgNgUIACgBIALAQIgBgYIACAAIAAAZIAOgRIABABIgPAUIABApg");
	this.shape_6.setTransform(0.3,23.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B1C8A").s().p("AAAAhIADgrIgJgTIACgBIAHAQIACgSIACAAIgGBBg");
	this.shape_7.setTransform(5.125,24);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F1F2F2").s().p("Ag0A0QgUjZA0hjIAAgBIARgBIAGAAIAGADQAbAqAOBXQAcCtg+DjIgjAAQgWhbgLh7g");
	this.shape_8.setTransform(0.2702,-7.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F1F2F2").s().p("AA4EFQisjSA0ikQAchaBPgzQAQgGAMgDIACAAQh4BjAsDTQAYBzA4BlIgSAAIABABg");
	this.shape_9.setTransform(-11.9772,-7.0375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F1F2F2").s().p("AhAEJQAzhmATh1QAkjWh6hgIANACQANADAGAEIApAeQAsAoAXA1QBJCoixDkIgCABg");
	this.shape_10.setTransform(11.0116,-7.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FC0D1B").s().p("AgLCdQhNhfgDhaQgDhLA0hCQAwg9BKgbQhQAzgbBbQg0CjCsDSQg7grgtg6g");
	this.shape_11.setTransform(-15.6557,-6.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FC0D1B").s().p("AAhEKQg3hkgYh0QgtjSB4hkIgBAAIAegFIAAABQg0BjAUDZQALB7AWBbg");
	this.shape_12.setTransform(-7.6233,-7.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FC0D1B").s().p("AgtEKQA8jjgbitQgOhXgagqIgGgCIAXACQB6BggkDWQgUB1gyBmg");
	this.shape_13.setTransform(6.5162,-7.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FC0D1B").s().p("AAYiEQgXg1gsgoIgogfQgGgDgOgEQBSARA8BAQA/BEACBUQABBihPBgQguA5g8ArQCxjkhJiog");
	this.shape_14.setTransform(14.5764,-7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-34,49.9,68.1);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEC42D").s().p("AFwA8QgKgIgHgDIhSgrIgugRIgigKIgRgFQgLgEgHgBIgugKIgxgGIgTgBIhPAAIgUABIgvAGIhSAUIgiAKIgtARIhTArIgRALIgfAUIAbgZIAPgNIBXg5IAngSIAigNIARgHIBDgRIAzgIIBngBIA9AHIBNATIASAHIAiANIA7AfIBCAsIAPANIAbAZg");
	this.shape.setTransform(72.675,8.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiB3IAAhiQABgRgKgIQgKgKgPAAQgPAAgJAKQgJAIAAARIAABiIg4AAIAAjtIA4AAIAABVQARgdAkAAQAfAAATAVQATAVAAAiIAABpg");
	this.shape_1.setTransform(123.2,24.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8B3QgXgRgEgiIA2AAQAIATAdAAQAPABALgLQAKgKgBgVIAAgZQgTAcghAAQgigBgXgZQgYgZAAgoQAAgoAYgbQAXgaAjAAQAhAAASAaIAAgXIA4AAIAACyQAAAlgVAaQgKAMgSAIQgSAGgYABQgoAAgYgRgAgahLQgMALAAAWQAAAWAMAKQANALAOAAQAOAAANgLQAMgMgBgUQABgWgMgMQgNgLgOAAQgPAAgMAMg");
	this.shape_2.setTransform(103.15,31.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaCAIAAizIA2AAIAACzgAgWhHQgJgKAAgOQAAgNAJgJQAKgKAMAAQANAAAKAKQAJAJAAANQAAAOgJAKQgJAJgOAAQgNAAgJgJg");
	this.shape_3.setTransform(89.275,23.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiB3IAAhiQABgRgKgIQgIgKgRAAQgPAAgJAKQgKAIABARIAABiIg4AAIAAjtIA4AAIAABVQARgdAkAAQAfAAATAVQAUAVgBAiIAABpg");
	this.shape_4.setTransform(75.5,24.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFCFIAmhZIhGiwIA+AAIAoB2IArh2IA6AAIhyEJg");
	this.shape_5.setTransform(55.1,31.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AATB3Ig4hIIAABIIg3AAIAAjtIA3AAIAACEIA3hKIBLAAIhOBbIBOBYg");
	this.shape_6.setTransform(34.75,24.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BNQgXgPgBgdIA4AAQACAQAUAAQAKAAAGgFQAGgEAAgHQAAgHgKgEQgLgEgOgDQgMgDgRgFQgPgEgLgKQgKgKAAgSQAAgYAUgQQAUgQAjAAQAhAAAWAQQAWAQAAAbIg3AAQgCgKgFgDQgGgDgKAAQgVAAAAANQAAAMAZAEQAcAFAVAKQALAEAHAJQAJAKgBAQQAAAZgVAQQgVAQgiAAQggAAgVgPg");
	this.shape_7.setTransform(16.65,27.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#78FFFE").s().p("AAfAgIAAgmIgBgJQgBgDgDgCQgCgBgDAAQgHAAgFAEQgEAFAAAJIAAAjIgJAAIAAgoQAAgGgCgEQgDgDgGAAQgFgBgDADQgEADgCAEQgBAEAAAIIAAAgIgKAAIAAg9IAJAAIAAAIQACgEAGgDQAEgCAHAAQAGAAAEACQAEADACAFQAHgLAMABQAJAAAEAFQAGAFAAAKIAAAqg");
	this.shape_8.setTransform(130.4,57.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#78FFFE").s().p("AgUAYQgIgIAAgQQAAgQAKgIQAIgHAKAAQANAAAIAIQAIAJAAAOQAAALgEAHQgDAHgHADQgHAEgIAAQgMAAgIgIgAgMgRQgFAGAAALQAAAMAFAGQAFAGAHAAQAIAAAFgGQAFgGAAgMQAAgLgFgGQgFgFgIAAQgHAAgFAFg");
	this.shape_9.setTransform(119.325,57.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#78FFFE").s().p("AgSAYQgIgIAAgQQAAgJAEgHQADgIAHgDQAGgEAHAAQAKAAAHAFQAGAFACAJIgKACQgCgGgDgDQgEgEgFAAQgHAAgFAGQgFAGAAALQAAAMAFAGQAFAGAGAAQAGAAAEgEQAFgEABgIIAKACQgCAKgHAGQgHAGgKAAQgLAAgIgIg");
	this.shape_10.setTransform(110.425,57.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#78FFFE").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_11.setTransform(102.875,59.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#78FFFE").s().p("AAPArIAAgnQgBgIgDgDQgDgDgHAAQgDgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAIgIAKAAQAHAAAFACQAFADACAFQACAEAAAJIAAAng");
	this.shape_12.setTransform(95.1,55.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#78FFFE").s().p("AgSAnQgGgFAAgKIAKABQAAAFADADQAFACAGAAQAGAAAFgCQADgEABgEIABgOQgGAIgKAAQgNAAgGgJQgHgKAAgLQAAgJADgIQADgGAHgFQAFgEAIAAQALAAAGAJIAAgHIAKAAIAAAzQAAAPgDAGQgDAGgGAEQgGADgJAAQgLAAgHgFgAgLgdQgEAGAAALQAAAMAEAFQAFAGAHgBQAHABAFgGQAEgFAAgLQAAgMgEgGQgGgFgHAAQgGAAgFAFg");
	this.shape_13.setTransform(85.5,58.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#78FFFE").s().p("AgEArIAAg9IAJAAIAAA9gAgEgdIAAgNIAJAAIAAANg");
	this.shape_14.setTransform(78.275,55.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#78FFFE").s().p("AAOArIAAgnQABgIgEgDQgEgDgFAAQgEgBgEADQgEADgCAEQgCACAAAIIAAAiIgKAAIAAhVIAKAAIAAAfQAHgIAKAAQAIAAAEACQAGADABAFQADAEAAAJIAAAng");
	this.shape_15.setTransform(70.85,55.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#78FFFE").s().p("AgVAqIgCgKIAGABQAEAAACgBQAAAAABgBQAAAAABAAQAAgBAAAAQABgBAAAAIAEgIIAAgDIgXg8IALAAIANAjIADAOIAFgNIANgkIAKAAIgXA9IgFAOQgDAFgEADQgDACgFAAIgGgBg");
	this.shape_16.setTransform(61.8,58.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#78FFFE").s().p("AAMArIgTggIgHAHIAAAZIgLAAIAAhVIALAAIAAAwIAYgYIANAAIgXAWIAaAng");
	this.shape_17.setTransform(53.4,55.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#78FFFE").s().p("AgQAbQgHgFgBgKIAKgBQABAGAEADQAEAEAGAAQAHAAAEgDQADgDAAgEQAAgEgDgCQgCgBgIgCIgQgFQgEgBgDgEQgCgEAAgEQAAgEACgEQACgDAEgDQACgCAEgBQAEgBAFAAQAGAAAGACQAFACADAEQADADAAAGIgKACQgBgFgDgDQgDgDgGAAQgGAAgEADQgDACAAADIABAEIAFADIAIACIAPAFQAEABADAEQACADAAAGQAAAFgDAFQgDAEgFADQgGACgHAAQgLAAgGgFg");
	this.shape_18.setTransform(44.2,57.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#78FFFE").s().p("AgFAGIAAgLIALAAIAAALg");
	this.shape_19.setTransform(36.875,59.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#78FFFE").s().p("AAMAfIgKgkIgCgLIgLAvIgMAAIgSg9IAKAAIALAjIADANIADgNIAKgjIAKAAIAJAjIADAMIADgMIALgjIAKAAIgTA9g");
	this.shape_20.setTransform(28.75,57.125);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#78FFFE").s().p("AAMAfIgKgkIgCgLIgMAvIgLAAIgSg9IAKAAIAKAjIAEANIADgNIAKgjIAJAAIAKAjIADAMIADgMIALgjIAKAAIgTA9g");
	this.shape_21.setTransform(17.4,57.125);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#78FFFE").s().p("AAMAfIgKgkIgCgLIgMAvIgLAAIgSg9IAKAAIAKAjIAEANIADgNIAKgjIAJAAIAKAjIADAMIADgMIALgjIAKAAIgTA9g");
	this.shape_22.setTransform(6.05,57.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,140.5,64.8);


(lib.fullscreen_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006666").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,125);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0413A0").s().p("AgaAAIABgEIA0AJg");
	this.shape.setTransform(2.675,0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0413A0").s().p("AAFG4IAAkDIhjhSIgeicIgfgaIgWhMIgagRIgQhnIghgTIgciBIg5gLQAWgBAZAAQAxABAOALQASANAUA7QAKAeAGAbIAbAFQAdAGAGAIQAJAKAHApQAHAqAJAKQAJAJApAIIAPAhQAQAiAKAJQAMALAvAPIASBCQAWBHASATQARASBSAVQBOAUAQAXQAWAigJB0QgEA6gJAzg");
	this.shape_1.setTransform(39.1536,44.8438);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,73,88.9), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AbRFlMgmYgAVQlfgDlzhtQk5hckHiSQjqiChShqQgngyANgbQANgdBEABMA9/AAzQAwAABqAgQBvAhBtAwQEZB8AEBiQgBB8jtBsQhfArhqAaQhkAZhFAAIgDAAg");
	mask.setTransform(298.3468,59.3488);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0CDDC").s().p("Egu6AIKICGzIIQeg2QABAMAGAWQANAqAaAuQBWCSDBB6QJrGEW1AAMAlrAAAIAALfg");
	this.shape.setTransform(300.25,75.675);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(62.8,23.7,471.09999999999997,71.3), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AC/AoQhXgjhUAAQhRAAhYAjQgsARgbARIgoAAIAaiTIHPAHIAgCMQgbgRgrgRg");
	mask.setTransform(26.075,7.375);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C26619").s().p("AgKAoIAIhPIANABIgIBOg");
	this.shape.setTransform(24.6,6.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C26619").s().p("AgMAqIAMhTIANAAIgNBTg");
	this.shape_1.setTransform(21.675,7.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C26619").s().p("AgPAsIARhYIAOABIgRBYg");
	this.shape_2.setTransform(18.725,7.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C26619").s().p("AgRAvIAVhdIAOAAIgVBdg");
	this.shape_3.setTransform(15.775,7.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C26619").s().p("AgUAyIAbhiIAOAAIgbBig");
	this.shape_4.setTransform(12.825,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C26619").s().p("AgWA0IAfhnIAOAAIgfBng");
	this.shape_5.setTransform(9.875,8.175);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C26619").s().p("AgZA2IAlhsIAOAAIglBtg");
	this.shape_6.setTransform(6.925,8.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C26619").s().p("AgHgjIAMgBIADBJIgMAAg");
	this.shape_7.setTransform(27.9,6.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C26619").s().p("AgCAoIgIhOIANgBIAIBPg");
	this.shape_8.setTransform(30.825,6.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#C26619").s().p("AgMgpIANAAIAMBTIgNAAg");
	this.shape_9.setTransform(33.775,7.125);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#C26619").s().p("AgPgrIAOgBIARBYIgOABg");
	this.shape_10.setTransform(36.725,7.375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C26619").s().p("AgRguIAOAAIAVBdIgOAAg");
	this.shape_11.setTransform(39.675,7.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C26619").s().p("AAHAyIgbhiIAOAAIAbBig");
	this.shape_12.setTransform(42.625,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C26619").s().p("AgWgzIAOAAIAfBnIgOAAg");
	this.shape_13.setTransform(45.575,8.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C26619").s().p("AgYg2IANAAIAkBsIgNABg");
	this.shape_14.setTransform(48.5,8.425);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(4.4,2.9,46.7,11), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.7625);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4625,13.8625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+gtQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.7625);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhtAMg");
	this.shape.setTransform(6.4125,13.8625);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4566,10.7625);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.8875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAOADAXIARCkIhuAMg");
	this.shape.setTransform(6.4625,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4566,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+guQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+guQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgYAOgRQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4625,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_6, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAOACAXIARCaIhuAMg");
	mask.setTransform(8.4566,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_5, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+guQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_4, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4566,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgYAOgRQAPgSAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_3, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+guQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_2, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgYAOgRQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_1, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+gtQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9125);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2_0, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5uN3IS+4JQBYhwBzg7QBug5B3AAQB4AABvA5QByA7BYBwIS+YJg");
	mask.setTransform(182.875,88.775);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205BF7").s().p("Aj6KuQpagGn2gTQnfgSAAgPQAAgkC5ofQC9onAYgFQBBgMAzgfQAYgPA0gtQArglAhgPQAygXBEAAQBDAAA0AcQAgARAyAtQAyAtAfARQA0AcBDAAQBDAAA1gcQAfgRAygtQAzgtAfgRQA0gcBDAAQBDAAA1AcQAfARAyAtQAxAtAgARQA0AcBDAAQBDAAA0gcQAggRAygtQAygtAfgRQA1gcBDAAQBDAAA0AcQAfARAyAtQAzAtAfARQA0AcBDAAQBDAAA4ghQAdgSA7g0QA0gvAjgQQA2gZBCAMQAHABBQC+QBXDOBUDZQDuJtgtA3QlzBTzvAAQjRAAjqgDg");
	this.shape.setTransform(183.4321,133.6665);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(18.2,64.8,329.40000000000003,112.7), null);


(lib.ClipGroup_1_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4625,13.8875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_7, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+gtQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhtAMg");
	this.shape.setTransform(6.4125,13.8875);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_6, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/gtQgCgXAOgSQAPgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4566,10.7875);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_5, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAOACAXIARCaIhuAMg");
	mask.setTransform(8.4625,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4625,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_4, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4566,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_3, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+guQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_2, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/guQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4625,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgYAOgRQAPgSAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape.setTransform(6.4316,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_1, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag+gtQgDgYAPgRQAOgSAXgDQAWgCASAOQASAPACAXIARCZIhuAMg");
	mask.setTransform(8.4316,10.8066);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape.setTransform(6.4125,13.9066);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1_0, new cjs.Rectangle(2.1,2.6,10.8,19), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5DHEIJqsTQBch0CCAAQCBAABbB0IFjHEQBXBTBugFQBugEBUhdIFUmxQBbh0CCAAQCBAABcB0IJrMTg");
	mask.setTransform(167.4,45.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F118F").s().p("AVBIFQg0geg0AAQgzAAg0AeQgzAeg0AAQg0AAg0geQgzgeg0AAQg0AAg0AeQgzAeg0AAQg0AAg0geQgzgeg0AAQg0AAg0AeQgzAeg0AAQgzAAg0geQg0geg0AAQgyAAg0AeQg0Aeg0AAQgzAAg0geQg0geg0AAQgzAAg0AeQgzAeg0AAQg0AAg0geQgzgeg0AAQg0AAg0AeQgzAeg0AAQg0AAgzgeQg0geg0AAQgzAAg0AeQg0Aeg0AAQg9AAgngRQhQgkgSgFQgYgIgIgJQgKgKAEgRQAEgPAdgNQAagMAAgRQAAgRgegQQgegQAAgQQAAgQAegQQAegQAAgRQAAgQgegQQgegQAAgQQAAgRAegQQAegQAAgQQAAgQgegQQgegQAAgRQAAgQAegQQAegQAAgQQAAgQgegQQgegQAAgQQAAgQAegQQAegQAAgRQAAgQgegQQgegQAAgQQAAgRAegQQAegQAAgQQAAgQgegQQgegQAAgRQAAgQAegQQAegQAAgQQAAgRgegQQgegQAAgQQAAgVAIgFIAfgKQASgFBQgkQAngRA9AAQA0AAA0AeQA0AeAzAAQA0AAA0geQA0geAzAAQA0AAA0AeQA0AeAzAAQA0AAAzgeQA0geA0AAQA0AAAzAeQA0AeA0AAQA0AAAzgeQA0geA0AAQA0AAAzAeQA0AeAzAAQAzAAA0geQAzgeA0AAQA0AAA0AeQA0AeAzAAQA0AAA0geQA0geAzAAQA0AAAzAeQA0AeA0AAQA0AAAzgeQA0geA0AAQA0AAAzAeQA0AeA0AAQA0AAAzgeQA0geAzAAQA9AAAoARQBQAkARAFIAfAKQAIAFAAAVQAAARgeAQQgeAQAAAQQAAAQAeAQQAeAQAAARQAAAQgeAQQgeAQAAAQQAAARAeAQQAeAQAAAQQAAAQgeAQQgeAQAAARQAAAQAeAQQAeAQAAAQQAAARgeAQQgeAQAAAPQAAAQAeAQQAeAQAAARQAAAQgeAQQgeAQAAAQQAAARAeAQQAeAQAAAQQAAAQgeAQQgeARAAAQQAAAQAeAQQAeAQAAAQQAAARgeAQQgeAQAAAQQAAAQAeAQQAeARAAAQQAAAVgIAFIgfAKQgTAGhOAiQgoASg9AAQgzAAg0geg");
	this.shape.setTransform(168.5407,92.275);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A21390").s().p("A5DHEIJqsTQBch0CCAAQCBAABbB0IFjHEQBXBTBugFQBugEBUhdIFUmxQBbh0CCAAQCBAABcB0IJrMTg");
	this.shape_1.setTransform(167.4,45.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(7.1,0,320.7,90.4), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5uN3IS+4JQBYhwByg7QBvg5B3AAQB4AABuA5QBzA7BZBwIS9YJg");
	mask.setTransform(177.05,88.775);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#205BF7").s().p("AiNNcQpxgNobgTQoEgTAAgIQAAgRIpsIQIqsIAPgDQA0gJA5gxQAygrA9AAQA5AAA5AzQA6AzA5AAQA5AAA5gzQA6gzA5AAQA4AAA5AzQA6AzA5AAQA5AAA5gzQA6gzA5AAQA5AAA5AzQA6AzA5AAQAmAAAfgTQARgKAigdQAdgbAUgJQAfgOAmAHQO9Z/goAxQiWAhq0AAQm/AAqggOg");
	this.shape.setTransform(182.1552,109.1546);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(12.4,21.7,329.40000000000003,155.8), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// obj 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0413A0").s().p("Ehj5AeSQlVhriokPQjTlTBIpBQBLpUGDl3QFWlNIgiAQHphzIhBGQIGBDGDDQQICEUFoCQQFeCMEKAnQDzAlDkgpQC0ghEDhlQKskOGSiAQJFi6IJhOQJbhaJ7AjQK3AmMfC+QSAERMRifQJzh/FtmNQEEkbBomGQAzjDAAiKMACWA+GMjFnAAAQhoAWiZAHQgtACgtAAQj8AAjPhBg");
	this.shape.setTransform(706.0075,305.8513);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,105.6,1412,400.6), null);


(lib.cta_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FED931").ss(2,1,1).p("AgVgsIArAsIgrAt");
	this.shape.setTransform(118.325,19.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231F20").s().p("Ag6A7QgZgYAAgjQAAgiAZgYQAYgZAiAAQAjAAAYAZQAZAYAAAiQAAAjgZAYQgYAZgjgBQgiABgYgZg");
	this.shape_1.setTransform(117.375,19.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231F20").s().p("AgpBAIAAh/IBSAAIAAASIg8AAIAAAkIA0AAIAAAQIg0AAIAAAnIA9AAIAAASg");
	this.shape_2.setTransform(89.325,17.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AAYBAIgYgxIgZAAIAAAxIgWAAIAAh/IAtAAQAVAAAMAKQAMAKAAATQAAAMgGAJQgGAIgLAFIAcA1IAAABgAgZgCIAXAAQAKAAAGgGQAHgFAAgLQAAgKgGgFQgGgGgLAAIgXAAg");
	this.shape_3.setTransform(78.725,17.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231F20").s().p("AgaA6QgNgIgGgOQgHgOAAgSIAAgGQAAgTAHgOQAGgPANgHQAMgIAOAAQAPAAANAIQAMAHAHAOQAGAOAAATIAAAGQAAATgGAOQgHAOgMAIQgMAIgQAAQgOAAgMgIgAgWgjQgHALgBAVIAAAGQAAAVAIAMQAJALANAAQAPAAAIgLQAIgLAAgWIAAgGQAAgVgIgLQgIgMgPAAQgNAAgJAMg");
	this.shape_4.setTransform(66.35,17.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("AgnBAIAAh/IAWAAIAABtIA5AAIAAASg");
	this.shape_5.setTransform(55.725,17.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AgvBAIAAh/IAwAAQAWAAAMALQANALAAATQAAASgMAKQgNALgWAAIgaAAIAAAvgAgZAAIAaAAQAMAAAGgGQAHgFAAgLQAAgKgHgHQgGgGgLAAIgbAAg");
	this.shape_6.setTransform(44.975,17.85);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231F20").s().p("AAbBAIgbgvIgbAvIgaAAIAohAIgmg/IAZAAIAaAvIAbgvIAZAAIgmA/IAnBAg");
	this.shape_7.setTransform(33.2,17.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231F20").s().p("AgpBAIAAh/IBSAAIAAASIg8AAIAAAkIA0AAIAAAQIg0AAIAAAnIA9AAIAAASg");
	this.shape_8.setTransform(22.775,17.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FECE31").s().p("ArKClIAAlJIWWAAIAAFJg");
	this.shape_9.setTransform(71.55,19.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3,143.1,33);


(lib.close_btn1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgcArIAAhVIA4AAIAAAPIgmAAIAAAUIAhAAIAAANIghAAIAAAXIAnAAIAAAOg");
	this.shape.setTransform(35.675,9.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPAoQgIgDgEgHQgFgGAAgIIASAAQAAAOAQAAQAGAAAEgCQADgDAAgFQAAgFgDgCQgEgDgIgDIgPgGQgOgHAAgNQAAgHAEgFQAEgGAHgDQAHgDAIAAQAKAAAHAEQAHADAEAGQAEAGAAAIIgSAAQAAgGgEgDQgDgEgHAAQgFAAgEADQgDADAAAEQAAAEAEADQAEADAHACQAPAFAHAGQAHAGAAAKQAAALgJAHQgIAGgOAAQgJAAgIgEg");
	this.shape_1.setTransform(28.325,9.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSAnQgIgFgFgKQgEgJAAgNIAAgDQAAgMAEgKQAFgJAIgGQAIgFAKAAQALAAAIAFQAIAGAFAJQAEAKAAAMIAAADQAAANgEAJQgEAKgJAFQgIAFgLAAQgJAAgJgFgAgNgVQgEAHAAANIAAADQAAANAEAHQAFAIAIAAQAJAAAFgHQAFgHAAgOIAAgDQAAgNgFgHQgFgHgJAAQgIAAgFAHg");
	this.shape_2.setTransform(20.475,9.125);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaArIAAhVIARAAIAABHIAlAAIAAAOg");
	this.shape_3.setTransform(13.35,9.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAhQgKgLAAgTIAAgFQAAgMAFgJQAEgKAIgFQAIgFAKAAQAPAAAJAIQAJAIABAOIgSAAQAAgIgEgEQgEgDgIAAQgIAAgEAGQgFAGAAAOIAAAFQAAAOAEAGQAEAHAJAAQAIAAAEgEQAEgEAAgIIASAAQgBAOgJAIQgJAIgPAAQgQAAgJgLg");
	this.shape_4.setTransform(5.975,9.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AmAC0IAAlnIMBAAIAAFng");
	this.shape_5.setTransform(23.5,9.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-8.3,77,36);


(lib.Tween34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.cta_btn = new lib.cta_button();
	this.cta_btn.name = "cta_btn";
	this.cta_btn.setTransform(129.9,27.45,1,1,0,0,0,71.5,16.4);
	new cjs.ButtonHelper(this.cta_btn, 0, 1, 1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaA/QgLgGgIgKQgHgKAAgLIAXAAQABAKAJAIQAIAGAMAAQANAAAJgFQAHgFAAgJQAAgJgHgFQgHgFgQgEQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgLQANgMAVAAQAWAAAOAMQAOAMABARIgYAAQAAgJgHgHQgIgGgMAAQgLAAgIAFQgHAGAAAJQABAHAGAFQAGAEARAEQAQAEALAFQALAEAEAHQAGAIAAAKQgBASgOALQgOALgXAAQgOAAgNgGg");
	this.shape.setTransform(42.35,30.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAzQgRgSAAgeIAAgDQAAgTAIgQQAHgPANgJQAOgIAOgBQAaAAAPARQAOASAAAfIAAAJIhYAAQAAATALAMQALAMAQAAQAMAAAIgFQAIgFAHgIIANALQgQAaghAAQgbAAgQgSgAgUgnQgKAKgCASIBCAAIAAgCQgBgRgJgJQgIgKgPAAQgMAAgJAKg");
	this.shape_1.setTransform(28.6,30.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAdBDIAAhWQABgOgHgHQgGgHgOAAQgKAAgJAGQgHAGgFAJIAABdIgXAAIAAiDIAWAAIAAARQAPgTAXAAQAqAAABAvIAABWg");
	this.shape_2.setTransform(14.1,30.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgLBaIAAiDIAWAAIAACDgAgJhDQgDgDgBgGQABgFADgEQADgEAGAAQAHAAADAEQAEAEgBAFQABAGgEADQgDAEgHgBQgGABgDgEg");
	this.shape_3.setTransform(3.35,27.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKBeIAAi7IAVAAIAAC7g");
	this.shape_4.setTransform(-3.575,27.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBDIAAiDIAWAAIAAAPQALgRAUAAQAHAAADABIAAAVIgLAAQgWAAgIATIAABcg");
	this.shape_5.setTransform(-11,30.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKBaIAAiDIAVAAIAACDgAgJhDQgDgDAAgGQAAgFADgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEADQgEAEgGgBQgFABgEgEg");
	this.shape_6.setTransform(-19.75,27.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgpA5QgNgKAAgSQAAgUAQgKQAPgMAcAAIAWAAIAAgLQAAgLgHgIQgHgGgNgBQgMAAgIAHQgIAGAAAJIgXAAQAAgLAHgIQAHgKAMgFQAMgGANAAQAYAAAMAMQANAMABATIAAA8QAAATAEAKIAAACIgXAAQgDgEgBgKQgQARgUAAQgUAAgMgMgAgfAaQAAALAHAGQAHAGALAAQAKAAAKgFQAJgGAEgJIAAgbIgSAAQgoAAAAAYg");
	this.shape_7.setTransform(-30.45,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAdBeIAAhYQAAgNgGgHQgHgHgNAAQgKAAgIAGQgJAGgFAJIAABeIgWAAIAAi7IAWAAIAABIQAQgTAXAAQAqAAAAAuIAABYg");
	this.shape_8.setTransform(-52,27.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgbBXQgOgGgHgLIALgNQAPASAVAAQAPAAAKgJQAJgKAAgRIAAgLQgOAQgWAAQgXAAgOgTQgPgTAAgfQAAgfAPgSQAOgSAXAAQAYAAANARIABgPIAVAAIAACAQAAAagQAOQgOAPgaAAQgNAAgOgGgAgXg8QgJANAAAZQAAAWAJAMQAJANAQAAQAVAAAKgUIAAg7QgKgTgVAAQgPAAgKANg");
	this.shape_9.setTransform(-67.05,32.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLBaIAAiDIAWAAIAACDgAgJhDQgDgDgBgGQABgFADgEQADgEAGAAQAHAAADAEQAEAEgBAFQABAGgEADQgDAEgHgBQgGABgDgEg");
	this.shape_10.setTransform(-77.65,27.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeBeIAAhYQAAgNgHgHQgGgHgOAAQgKAAgJAGQgIAGgFAJIAABeIgWAAIAAi7IAWAAIAABIQAQgTAWAAQAqAAABAuIAABYg");
	this.shape_11.setTransform(-88.4,27.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnBcIgIgBIAAgTIAGABQALAAAHgFQAGgEAEgNIAFgNIgviCIAZAAIAgBiIAehiIAYAAIg1CYQgLAhgbAAg");
	this.shape_12.setTransform(-109.175,32.875);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcBeIgtg9IgOAOIAAAvIgXAAIAAi7IAXAAIAABxIAMgPIAogqIAcAAIgzA2IA5BNg");
	this.shape_13.setTransform(-121.325,27.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaA/QgLgGgIgKQgHgKAAgLIAXAAQABAKAJAIQAIAGAMAAQANAAAJgFQAHgFAAgJQAAgJgHgFQgHgFgQgEQgRgDgKgFQgKgFgFgHQgFgHAAgKQAAgQAOgLQANgMAVAAQAWAAAOAMQAOAMABARIgYAAQAAgJgHgHQgIgGgMAAQgLAAgIAFQgHAGAAAJQABAHAGAFQAGAEARAEQAQAEALAFQALAEAEAHQAGAIAAAKQgBASgOALQgOALgXAAQgOAAgNgGg");
	this.shape_14.setTransform(-135.85,30.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAdBeIAAhYQABgNgHgHQgGgHgOAAQgKAAgJAGQgHAGgFAJIAABeIgXAAIAAi7IAXAAIAABIQAOgTAXAAQAqAAABAuIAABYg");
	this.shape_15.setTransform(-157,27.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgDBKQgIgJAAgRIAAhRIgYAAIAAgRIAYAAIAAggIAWAAIAAAgIAYAAIAAARIgYAAIAABRQgBAIAEAEQAEAEAHAAIALgBIAAASQgJACgIAAQgQAAgGgJg");
	this.shape_16.setTransform(-169.2,28.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgLBaIAAiDIAWAAIAACDgAgJhDQgDgDgBgGQABgFADgEQAEgEAFAAQAHAAADAEQADAEAAAFQAAAGgDADQgDAEgHgBQgFABgEgEg");
	this.shape_17.setTransform(-176.75,27.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAgBCIgghjIgeBjIgTAAIgniDIAXAAIAaBiIAfhiIARAAIAgBkIAZhkIAWAAIgmCDg");
	this.shape_18.setTransform(-190.1,30.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AA3CcIhtjBIAADBIhLAAIAAk3IBLAAIBtDBIAAjBIBLAAIAAE3g");
	this.shape_19.setTransform(322.275,-16.275);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhFCOQgfgTgRgiQgSgiAAgsIAAgQQAAguAQgjQARgjAggTQAfgTAnAAQAoAAAfATQAfASARAjQARAjAAAtIAAANQAAAugRAjQgRAjgfATQgfATgoAAQgmAAgfgSgAg7gQIAAAWQAAAuAPAZQAPAYAdAAQAdAAAPgYQAQgYAAgtIAAgOQAAgugQgYQgPgYgdAAQg4AAgDBUg");
	this.shape_20.setTransform(290.875,-16.275);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgkCcIAAk3IBJAAIAAE3g");
	this.shape_21.setTransform(268.25,-16.275);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmCcIAAj9IhbAAIAAg6IEEAAIAAA6IhfAAIAAD9g");
	this.shape_22.setTransform(246.95,-16.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ABGCcIgTg6IhmAAIgSA6IhQAAIByk3IBGAAIBzE3gAghAnIBCAAIghhrg");
	this.shape_23.setTransform(217.4,-16.275);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AA3CcIhtjBIAADBIhLAAIAAk3IBLAAIBtDBIAAjBIBLAAIAAE3g");
	this.shape_24.setTransform(186.175,-16.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkCcIAAk3IBJAAIAAE3g");
	this.shape_25.setTransform(163.3,-16.275);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgmCcIAAj9IhbAAIAAg6IEEAAIAAA6IhfAAIAAD9g");
	this.shape_26.setTransform(142,-16.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag8CTQgfgOgPgYQgQgXAAgfIBMAAQgBAZANAMQANAMAcAAQATAAALgIQALgJAAgOQAAgRgMgJQgMgJgcgKQgdgKgTgJQg9gdABg0QAAgaAPgTQAPgUAcgLQAbgLAiAAQAhAAAbAMQAbAMAOAWQAPAWAAAdIhLAAQAAgUgMgKQgLgLgUAAQgTAAgMAJQgLAJAAAOQAAAMAMAKQANAJAfALQAhAKAUAMQAzAcAAAzQAAApgfAYQgeAXg3AAQglAAgegNg");
	this.shape_27.setTransform(113.55,-16.275);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhrCcIAAk3IDWAAIAAA6IiKAAIAABCIB1AAIAAA2Ih1AAIAABLICKAAIAAA6g");
	this.shape_28.setTransform(87.65,-16.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ah5CcIAAk3IBkAAQApAAAgATQAhASATAjQASAiAAAqIAAAOQABAqgTAiQgRAighATQgiAUgnAAgAgvBiIAbAAQAfAAASgXQARgXAAgtIAAgNQAAgtgRgXQgSgXggAAIgaAAg");
	this.shape_29.setTransform(59.95,-16.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("ABdCcIAAhJIAHiUIhLDdIgxAAIhLjdIAHCUIAABJIhLAAIAAk3IBjAAIBEDYIBFjYIBjAAIAAE3g");
	this.shape_30.setTransform(13.475,-16.275);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("ABGCcIgTg6IhmAAIgSA6IhQAAIByk3IBGAAIBzE3gAghAnIBCAAIghhrg");
	this.shape_31.setTransform(-21.45,-16.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhrCcIAAk3IDXAAIAAA6IiMAAIAABCIB2AAIAAA2Ih2AAIAABLICMAAIAAA6g");
	this.shape_32.setTransform(-48.65,-16.275);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AAtCcIg2hvIgpAAIAABvIhLAAIAAk3IB7AAQA2AAAgAZQAfAYAAAtQAAAhgNAVQgNAUgcAOIBBB+IAAADgAgygLIAwAAQAUAAALgMQALgLAAgUQAAgUgLgMQgLgLgUAAIgwAAg");
	this.shape_33.setTransform(-76.275,-16.275);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ah6CcIAAk3IBlAAQAoAAAiATQAgASATAjQASAiABAqIAAAOQAAAqgSAiQgTAiggATQgiAUgnAAgAguBiIAaAAQAfAAARgXQASgXAAgtIAAgNQAAgtgSgXQgRgXggAAIgZAAg");
	this.shape_34.setTransform(-105.8,-16.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AhqCcIAAk3IDVAAIAAA6IiKAAIAABCIB1AAIAAA2Ih1AAIAABLICKAAIAAA6g");
	this.shape_35.setTransform(-156.15,-16.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAtCcIg2hvIgpAAIAABvIhLAAIAAk3IB7AAQA2AAAgAZQAfAYAAAtQAAAhgNAVQgNAUgcAOIBBB+IAAADgAgygLIAwAAQAUAAALgMQALgLAAgUQAAgUgLgMQgLgLgUAAIgwAAg");
	this.shape_36.setTransform(-183.775,-16.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhFCOQgfgTgRgiQgSgiAAgsIAAgQQAAguAQgjQARgjAggTQAfgTAnAAQAoAAAfATQAfASARAjQARAjAAAtIAAANQAAAugRAjQgRAjgfATQgfATgoAAQgmAAgfgSgAg7gQIAAAWQAAAuAPAZQAPAYAdAAQAdAAAPgYQAQgYAAgtIAAgOQAAgugQgYQgPgYgdAAQg4AAgDBUg");
	this.shape_37.setTransform(-214.725,-16.275);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhmCcIAAk3IBLAAIAAD9ICCAAIAAA6g");
	this.shape_38.setTransform(-241.8,-16.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ah6CcIAAk3IB8AAQAjAAAcANQAbANAQAZQAPAYAAAfQAAAtghAbQghAbg5AAIgvAAIAABqgAgvgHIAxAAQAWAAALgLQALgLAAgUQAAgWgLgNQgMgNgUAAIgyAAg");
	this.shape_39.setTransform(-269.225,-16.275);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AA0CcIg0hqIgzBqIhXAAIBZicIhXibIBWAAIAyBoIAzhoIBWAAIhYCbIBaCcg");
	this.shape_40.setTransform(-298.7,-16.275);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AhrCcIAAk3IDXAAIAAA6IiMAAIAABCIB2AAIAAA2Ih2AAIAABLICMAAIAAA6g");
	this.shape_41.setTransform(-324.95,-16.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.cta_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-340,-44.3,680.8,91.3);


(lib.Tween29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(5.15,9.55,1,1,0,0,0,182.2,98.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2696F8").s().p("A5uN3IS94JQBYhwB0g7QBug5B3AAQB4AABvA5QBzA7BYBwIS9YJg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177,-88.7,364.3,196.60000000000002);


(lib.Tween27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(1.2,28.3,1,1,0,0,0,168.6,73.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A21390").s().p("A5DHEIJrsTQBbh0CBAAQCCAABcB0IFiHDQBXBUBugFQBvgFBThcIFUmxQBch0CBAAQCBAABcB0IJqMTg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167.3,-45.2,337,147);


(lib.Tween20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(0.55,12.55,1,1,0,0,0,183.4,101.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#2696F8").s().p("A5uN3IS+4JQBYhwBzg7QBug5B3AAQB4AABvA5QByA7BYBwIS+YJg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.8,-88.7,366.8,202.5);


(lib.Tween11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.Group();
	this.instance.setTransform(31.3,31.3,1,1,0,0,0,36.5,44.4);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0413A0").s().p("AqSHBQgKg1gGg8QgKh4AaghQATgZBcgOQAugIApgCQAKgfAOgiQAchFATgRQAHgGAbgGQAbgFAHgHQARgPAPhBIALg9IBCggQACgYAEgcQAIg4AMgQQAGgJAbgLQAdgNAGgGQAFgGAEgaQADgZAHgFQAcgSBeASQAvAIAqANIA2CBIAbAFQAcAGAHAIQAJAKAGApQAHAqAKAKQAJAJApAIIAPAhQARAiAKAJQAMALAvAPIASBCQAVBHASATQARASBSAVQBPAUAPAXQAXAigJB0QgFA6gJAzg");
	this.shape.setTransform(0.0127,30.8497);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0413A0").s().p("AhOFbIAAjMQgGAGgHAFQgMAJAAgOQAAgkAIh+IAGh4QgjgTgOgDQgIgBgYAAIgVABQgbgRgIgIQgDgEgHgNIgGgNQghABgLgBQgOgBgJgFIgNgKIAAgMIAcAAIACgDIAKgBQAMgBADABIAHAHQAGAFACABQAJADAEgDIAAgCQAJgJAkAGQAnAGAJgDIARgEQAIgCATgCIAggHQAMgDAXgCIAAgdQACgfAEgLQACgEAFgHQAGgHAEgCIALgEIALAEQAEACAGAHQAFAHACAEQAHAQgBA3IANABQAPACAHABIAgAIIANABQAHAAAEACIAUAFQAJADAogGQAjgGAKAJIAAACIAMAAQADgBAFgFQAFgGADgBQAFgCAUADIACADIAbAAIADAHQgIAMgEACQgKAGgTACIgqgBQgKAYgHAGQgEAFgPALIgPAJQgogCgMACQgJACgWAKIgTAKIgBBGQgBBLACAZQABAOgGgDIgFgEIAAEvg");
	this.shape_1.setTransform(-0.65,-41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-75.7,135.5,151.5);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(-6.9,120.5,1,1,0,0,0,7.4,12.6);

	this.instance_1 = new lib.ClipGroup_1_7();
	this.instance_1.setTransform(10.8,118.6,1,1,0,0,0,7.4,12.6);

	this.instance_2 = new lib.ClipGroup_2_6();
	this.instance_2.setTransform(28.5,116.7,1,1,0,0,0,7.4,12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5B1C8A").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhtAMg");
	this.shape.setTransform(-5.7875,119.1625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B1C8A").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhtAMg");
	this.shape_1.setTransform(11.9125,117.2625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B1C8A").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAXgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_2.setTransform(29.6125,115.3875);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2DCCD").s().p("AgRhWIARgCIASCvIgSACg");
	this.shape_3.setTransform(0.15,-135.175);

	this.instance_3 = new lib.ClipGroup_9();
	this.instance_3.setTransform(-22.1,-105.9,1,1,0,0,0,7.4,12.6);

	this.instance_4 = new lib.ClipGroup_1_6();
	this.instance_4.setTransform(-4.4,-107.8,1,1,0,0,0,7.4,12.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B1C8A").s().p("Ag/gyQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPACAXIASCjIhuAMg");
	this.shape_4.setTransform(-20.9934,-107.2375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5B1C8A").s().p("Ag/gyQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPACAXIASCjIhuAMg");
	this.shape_5.setTransform(-3.2934,-109.1375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E2DCCD").s().p("AjlAIIHIgwIADAhInHAwg");
	this.shape_6.setTransform(-14.3,-125.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_7.setTransform(-11,-95.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A1BBE").s().p("AkwAQIJehAIADAhIpeBAg");
	this.shape_8.setTransform(-10.9,-93.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A1BBE").s().p("AjQAGIGegsIADAiImdArg");
	this.shape_9.setTransform(-14.2,-124.775);

	this.instance_5 = new lib.ClipGroup_8();
	this.instance_5.setTransform(-10.3,88.5,1,1,0,0,0,7.4,12.6);

	this.instance_6 = new lib.ClipGroup_1_5();
	this.instance_6.setTransform(7.4,86.6,1,1,0,0,0,7.4,12.6);

	this.instance_7 = new lib.ClipGroup_2_5();
	this.instance_7.setTransform(25.1,84.7,1,1,0,0,0,7.4,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_10.setTransform(9.55,97.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#7A1BBE").s().p("AkxAQIJfhAIADAhIpeBAg");
	this.shape_11.setTransform(9.7,98.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#5B1C8A").s().p("Ag/gyQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_12.setTransform(-9.1934,87.1625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5B1C8A").s().p("Ag/gyQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_13.setTransform(8.5066,85.2625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5B1C8A").s().p("Ag/gzQgDgXAPgSQAOgRAXgDQAWgCASAOQASAOADAXIARCkIhuAMg");
	this.shape_14.setTransform(26.2066,83.4066);

	this.instance_8 = new lib.ClipGroup_7();
	this.instance_8.setTransform(-13.75,56.5,1,1,0,0,0,7.4,12.6);

	this.instance_9 = new lib.ClipGroup_1_4();
	this.instance_9.setTransform(3.95,54.6,1,1,0,0,0,7.4,12.6);

	this.instance_10 = new lib.ClipGroup_2_4();
	this.instance_10.setTransform(21.7,52.7,1,1,0,0,0,7.4,12.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_15.setTransform(6.125,65.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#7A1BBE").s().p("AkwAQIJehAIAEAhIpfBAg");
	this.shape_16.setTransform(6.3,66.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5B1C8A").s().p("Ag/gyQgCgXAOgSQAOgSAXgDQAXgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_17.setTransform(-12.6375,55.1625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCATAOQASAOACAXIARCkIhtAMg");
	this.shape_18.setTransform(5.0625,53.3066);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAXgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_19.setTransform(22.7816,51.4066);

	this.instance_11 = new lib.ClipGroup_6();
	this.instance_11.setTransform(-17.15,24.5,1,1,0,0,0,7.4,12.6);

	this.instance_12 = new lib.ClipGroup_1_3();
	this.instance_12.setTransform(0.55,22.6,1,1,0,0,0,7.4,12.6);

	this.instance_13 = new lib.ClipGroup_2_3();
	this.instance_13.setTransform(18.25,20.7,1,1,0,0,0,7.4,12.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_20.setTransform(2.7,33.375);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7A1BBE").s().p("AkxAQIJfhAIADAhIpeBAg");
	this.shape_21.setTransform(2.85,34.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#5B1C8A").s().p("Ag/gyQgDgXAPgSQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_22.setTransform(-16.0434,23.1875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#5B1C8A").s().p("Ag/gzQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_23.setTransform(1.6566,21.3066);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5B1C8A").s().p("Ag/gzQgDgXAPgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_24.setTransform(19.3566,19.4066);

	this.instance_14 = new lib.ClipGroup_5();
	this.instance_14.setTransform(-20.55,-7.5,1,1,0,0,0,7.4,12.6);

	this.instance_15 = new lib.ClipGroup_1_2();
	this.instance_15.setTransform(-2.85,-9.4,1,1,0,0,0,7.4,12.6);

	this.instance_16 = new lib.ClipGroup_2_2();
	this.instance_16.setTransform(14.85,-11.3,1,1,0,0,0,7.4,12.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_25.setTransform(-0.725,1.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7A1BBE").s().p("AkwAQIJehAIADAhIpeBAg");
	this.shape_26.setTransform(-0.55,2.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAXgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_27.setTransform(-19.4684,-8.7934);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAXgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_28.setTransform(-1.7684,-10.6934);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_29.setTransform(15.9316,-12.5934);

	this.instance_17 = new lib.ClipGroup_4();
	this.instance_17.setTransform(-24,-39.5,1,1,0,0,0,7.4,12.6);

	this.instance_18 = new lib.ClipGroup_1_1();
	this.instance_18.setTransform(-6.3,-41.4,1,1,0,0,0,7.4,12.6);

	this.instance_19 = new lib.ClipGroup_2_1();
	this.instance_19.setTransform(11.4,-43.3,1,1,0,0,0,7.4,12.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_30.setTransform(-4.15,-30.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#7A1BBE").s().p("AkxAQIJfhAIADAhIpeBAg");
	this.shape_31.setTransform(-4,-29.45);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_32.setTransform(-22.8875,-40.7934);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAOgRAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_33.setTransform(-5.1875,-42.6934);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5B1C8A").s().p("Ag/gyQgCgYAOgRQAOgSAXgDQAWgCASAOQASAPADAXIARCjIhuAMg");
	this.shape_34.setTransform(12.5125,-44.5934);

	this.instance_20 = new lib.ClipGroup_3();
	this.instance_20.setTransform(-27.4,-71.5,1,1,0,0,0,7.4,12.6);

	this.instance_21 = new lib.ClipGroup_1_0();
	this.instance_21.setTransform(-9.7,-73.4,1,1,0,0,0,7.4,12.6);

	this.instance_22 = new lib.ClipGroup_2_0();
	this.instance_22.setTransform(8,-75.3,1,1,0,0,0,7.4,12.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E2DCCD").s().p("AlOATIKZhGIAEAhIqZBGg");
	this.shape_35.setTransform(-7.575,-62.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#7A1BBE").s().p("AkxAQIJfhAIADAhIpeBAg");
	this.shape_36.setTransform(-7.4,-61.45);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5B1C8A").s().p("Ag/gzQgCgXAOgSQAPgRAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_37.setTransform(-26.3184,-72.7934);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5B1C8A").s().p("Ag/gyQgCgYAOgRQAPgSAXgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_38.setTransform(-8.6184,-74.6934);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#5B1C8A").s().p("Ag/gyQgCgXAOgSQAOgSAYgDQAWgCASAOQASAPACAXIARCjIhtAMg");
	this.shape_39.setTransform(9.0816,-76.5934);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A67ECF").s().p("AhSjUIB2gNIAvG2Ih2ANg");
	this.shape_40.setTransform(-26.825,-103.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E2DCCD").s().p("AiqjLIEmgfIAvG1IkmAgg");
	this.shape_41.setTransform(-6.15,-105.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A67ECF").s().p("AjoyGIDYgXMAD5AkkIjXAXg");
	this.shape_42.setTransform(-17.9,25.875);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E2DCCD").s().p("AlAx8IGHgqMAD6AkjImGAqg");
	this.shape_43.setTransform(12.425,22.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance_4},{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.5,-144,89,288.1);


(lib.Tween4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C26619").s().p("AjIAEIAAgHIGRAAIAAAHg");
	this.shape.setTransform(-0.075,24.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE089").s().p("AjIAEIAAgHIGRAAIAAAHg");
	this.shape_1.setTransform(-0.075,20.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C26619").s().p("AmHAEIAAgHIMQAAIAAAHg");
	this.shape_2.setTransform(-0.05,89.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEE089").s().p("AmHAEIAAgHIMQAAIAAAHg");
	this.shape_3.setTransform(-0.05,83.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#340434").s().p("AhhAMIAAgXIDDAAIAAAXg");
	this.shape_4.setTransform(-9.8,27.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FD9727").s().p("AhXApIgUhRIDXAAIAABRg");
	this.shape_5.setTransform(-10.8,23);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8B1287").s().p("AhhAMIAAgXIDDAAIAAAXg");
	this.shape_6.setTransform(9.8,27.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FECD2F").s().p("AhrApIAAhRIDXAAIgUBRg");
	this.shape_7.setTransform(10.8,23);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#340434").s().p("AjEAMIAAgWIGJAAIAAAWg");
	this.shape_8.setTransform(-19.675,92.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8B1287").s().p("AjEAMIAAgWIGIAAIAAAWg");
	this.shape_9.setTransform(19.65,92.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FD9727").s().p("Ai6A9IgUh5IGdAAIAAB5g");
	this.shape_10.setTransform(-20.675,86.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FECD2F").s().p("AjOA9IAAh5IGcAAIgUB5g");
	this.shape_11.setTransform(20.65,86.85);

	this.instance = new lib.ClipGroup_11();
	this.instance.setTransform(-1.95,98.95,1,1,0,0,0,26.1,7.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#C26619").ss(1,0,2).p("AAQKZIhWhTIBpgzIhWhTIBmgyIhWhKIBjhDIhUhOIBag+IhOhBIBOgzIhGg5IBCg9Ig5g7IA9g5Ig1gzIA1g7Igtg+IAtgtIgjg+IAjgsIghgkIAdgcIgXgt");
	this.shape_12.setTransform(-6.9814,-47.6089);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C26619").ss(1,0,2).p("AAak/IBTBrIhwAtIBVBXIh1AyIBZBVIh2AuIBWBWIiDApIBdBb");
	this.shape_13.setTransform(-18.9783,56.4245);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#C26619").p("AgaDqIhUiRICdguIhTh8ICSgwIhVhn");
	this.shape_14.setTransform(-36.476,114.8662);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#C26619").p("ADwAiQgbgRgrgRQhXghhTAAQhSAAhYAhIhHAi");
	this.shape_15.setTransform(0.142,104.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FEE089").ss(1,0,2).p("AkYzyIAYAAQAPDWAeG0QAdF7AsERQB2LhEtHuIixAAQjNm2htqLQgijOgVjMQgLhvgEhB");
	this.shape_16.setTransform(28.0633,11.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#C26619").p("AEfmYIgOCiQgUDMgiDOQhvKWjUG5IizAAQEunsB4rgQAtkUAel6QAfm1APjWIAhAA");
	this.shape_17.setTransform(-28.6722,11.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FEE089").ss(1,0,2).p("AgPKZIBWhTIhpgzIBVhTIhlgyIBWhKIhjhDIBUhOIhag+IBOhBIhOgzIBFg5IhBg9IA5g7Ig9g5IA1gzIg1g7IAtg+IgtgtIAjg+IgjgsIAggkIgcgcIAXgt");
	this.shape_18.setTransform(6.5814,-47.6089);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FEE089").ss(1,0,2).p("AgZk/IhTBrIBwAtIhVBXIB0AyIhYBVIB2AuIhWBWICDApIhdBb");
	this.shape_19.setTransform(18.5278,56.425);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#340434").s().p("AgiAFIAAgJIBFAAIAAAJg");
	this.shape_20.setTransform(-3.475,-119.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FEE089").ss(1,0,2).p("AAaDqIBUiRIidguIBTh8IiSgwIBVhn");
	this.shape_21.setTransform(35.9232,114.8668);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDA929").s().p("AgiATIAAglIBFAAIAAAlg");
	this.shape_22.setTransform(-3.475,-121.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8B1287").s().p("AgiAFIAAgJIBFAAIAAAJg");
	this.shape_23.setTransform(3.475,-119.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FECD2F").s().p("AgiATIAAglIBFAAIAAAlg");
	this.shape_24.setTransform(3.475,-121.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FD9727").s().p("AiSiQIElAAIAACaIgCAAQhXAAhLAlQhLAjg2A/g");
	this.shape_25.setTransform(-14.7,102.175);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FECD2F").s().p("AAWAqQhSgqhdgBIAAibIEzAAIAAE5Qg0hJhQgqg");
	this.shape_26.setTransform(15.425,103.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FECD2F").s().p("ABLUqQjJmOhupbQgjjAgVjAQgMhpgEhDIAAw+IA7AAIgVA0IAwKeQAgGCAwEZQCALrFDH7g");
	this.shape_27.setTransform(30.875,10.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FD9727").s().p("AGAUqQgJgfgPgSQi+mNhopIQggi6gUi2QgLhqgDg1QgDBDgMBjQgVC+gjDAQhuJejKGTIjqAAQFEn7CArrQAwkZAgmCIAxqeIgWg0IB1AAIgWA0IAwKeQAhGCAwEZQB/LrFEH7g");
	this.shape_28.setTransform(0,10.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FECD2F").s().p("AgcBpIAAjRIAXCRIAAAPQAZAOAJAjg");
	this.shape_29.setTransform(2.925,-132.175);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FD9727").s().p("Ag6BpQAJgjAbgOIAAgPIAWiRIAXCRIAAAPQAaAOAJAjg");
	this.shape_30.setTransform(0,-132.175);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FD9727").s().p("AhOAfIAAg+ICdAAIAAA+g");
	this.shape_31.setTransform(-7.9,27.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FECD2F").s().p("AhOAfIAAg+ICdAAIAAA+g");
	this.shape_32.setTransform(7.55,27.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C26619").s().p("AjJNWQBVmsBdmrQC5tWAoADQAJIuitJ1QhWE7hYDMg");
	this.shape_33.setTransform(-17.7527,57.3995);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C26619").s().p("ACINWQhYjMhVk7Qitp1AJouQAogDC5NWQBdGrBVGsg");
	this.shape_34.setTransform(18.2027,57.3995);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.7,-142.7,123.5,285.5);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7FBFF").s().p("AgbDaQgygFgwgZQgIgFgBgGQAAgFAGgFQAFgEANgFQAbgLAZAIQBMAaAmgPIAPgFQAGgCACgGQAIgVgfgLQg8gMgdgKQgzgSgPgmQgVg2AghKQAag8ApgpQATgSAWgKQAVgIAUAHQAgANATAaQAKAOAAAWQAAAMgEATQgIAagHA2QgCAKgFAFQgIAGgKgFQgUgJgNgVQgGgLgCgRQgCgWAGgXQACgKANgfQAJgVgGgBQgZgHglA+QgoBBAQAvQAIAZAmAOQAQAGA3ALQAUAEAMAPQAPARgDAWIAAAUQAAANgFAOQgGARgWARQgVAPgcALQgbAKggAAIgUgBg");
	this.shape.setTransform(-210.7816,-33.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#382CBE").s().p("AglAmIABhLIBKAAIAABLg");
	this.shape_1.setTransform(-66.475,11.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#382CBE").s().p("AglAmIAAhLIBLABIAABKg");
	this.shape_2.setTransform(-51.175,11.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_3.setTransform(-35.875,11.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#382CBE").s().p("AglAmIAAhMIBLABIAABMg");
	this.shape_4.setTransform(-20.575,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIgBBLg");
	this.shape_5.setTransform(-5.275,11.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#382CBE").s().p("AglAlIABhLIBKABIAABMg");
	this.shape_6.setTransform(9.975,12.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_7.setTransform(25.275,12.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_8.setTransform(40.575,12.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_9.setTransform(55.875,12.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIgBBLg");
	this.shape_10.setTransform(71.175,12.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#382CBE").s().p("AglAmIABhLIBKAAIAABLg");
	this.shape_11.setTransform(86.425,12.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_12.setTransform(101.725,12.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#382CBE").s().p("AglAlIAAhKIBLAAIAABMg");
	this.shape_13.setTransform(117.025,12.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#382CBE").s().p("AglAmIAAhLIBLAAIAABLg");
	this.shape_14.setTransform(132.325,13.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#382CBE").s().p("AglAlIAAhKIBLABIgBBKg");
	this.shape_15.setTransform(147.625,13.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FC0D1B").s().p("AoeBVIHQjEIBCgIQBPgIBFABQBmABExARIteDrg");
	this.shape_16.setTransform(-188.95,18.4194);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FC0D1B").s().p("AjsGKIkXsZIDlADIMiMcg");
	this.shape_17.setTransform(-197.95,-41.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FC0D1B").s().p("AynCaITNlSIB8gEQCZgFCPABQERABHNAQI/JFwg");
	this.shape_18.setTransform(-5.225,61.7725);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#382CBE").s().p("AjWAkIABhLIEaADQBVAlA9Ang");
	this.shape_19.setTransform(215.75,13.775);

	this.instance = new lib.ClipGroup_12();
	this.instance.setTransform(15.8,44.8,1,1,0,0,0,300.2,75.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFB").s().p("AbRFlMgmYgAVQlfgDlzhtQk5hckHiSQjqiChShqQgngyANgbQANgdBEABMA9/AAzQAwAABqAgQBvAhBtAwQEZB8AEBiQgBB8jtBsQhfArhqAaQhkAZhFAAIgDAAg");
	this.shape_20.setTransform(13.9468,28.4488);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FC0D1B").s().p("Ai1C8IwLmFIGQADIfxGRg");
	this.shape_21.setTransform(15.225,4.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.instance},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-284.4,-81,600.5,201.5);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Obj 1
	this.instance = new lib.Tween12("synched",0);
	this.instance.setTransform(132.1,126.9,0.1598,0.1598,0,0,0,21.3,41.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({regX:21.2,regY:41.5,scaleX:1,scaleY:1,rotation:-14.9983,y:126.85},16).to({rotation:0,x:132.05},5).to({regY:41.6,rotation:-6.9676,y:127},5).to({startPosition:0},23).to({_off:true},1).wait(91));

	// Obj 2
	this.instance_1 = new lib.Tween28("synched",0);
	this.instance_1.setTransform(132.1,144.75,0.2889,0.2889);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1},14).to({startPosition:0},31).to({_off:true},1).wait(91));

	// Obj 3
	this.instance_2 = new lib.Tween16("synched",0);
	this.instance_2.setTransform(154.95,127.1,0.2012,0.2012,0,0,0,0,17.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regY:17.3,scaleX:1,scaleY:1,y:127.05},14).to({startPosition:0},35).to({_off:true},1).wait(91));

	// Obj 4
	this.instance_3 = new lib.Tween31("synched",0);
	this.instance_3.setTransform(80.7,220.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:70.35},10).to({startPosition:0},47).to({_off:true},1).wait(85).to({_off:false},0).to({_off:true},1).wait(5));

	// Obj 5
	this.instance_4 = new lib.Tween29("synched",0);
	this.instance_4.setTransform(352.45,362.6,1,1,0,0,0,0,88.8);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({y:201},14).to({startPosition:0},39).to({_off:true},1).wait(91));

	// Obj 6
	this.instance_5 = new lib.Tween15("synched",0);
	this.instance_5.setTransform(601.75,170.7,0.164,0.164,0,0,0,0,15.6);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1},14).to({startPosition:0},28).to({_off:true},1).wait(91));

	// Obj 7
	this.instance_6 = new lib.Tween17("synched",0);
	this.instance_6.setTransform(631.95,170.7,0.1667,0.1667,0,0,0,0,23.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(20).to({_off:false},0).to({regY:23.6,scaleX:1,scaleY:1,y:170.65},12).to({startPosition:0},27).to({_off:true},1).wait(91));

	// Obj 8
	this.instance_7 = new lib.Tween18("synched",0);
	this.instance_7.setTransform(467.4,154,0.1929,0.1929,0,0,0,-17.6,37.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(14).to({_off:false},0).to({regY:37.5,scaleX:1,scaleY:1,y:154.05},14).to({regY:37.6,rotation:-8.4409,x:467.45,y:154.15},5).to({regY:37.5,rotation:0,x:467.4,y:154.05},5).to({startPosition:0},21).to({_off:true},1).wait(91));

	// Obj 9
	this.instance_8 = new lib.Tween23("synched",0);
	this.instance_8.setTransform(554.1,249.45);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({_off:false},0).to({x:550.35,y:72.45},16).to({startPosition:0},36).to({_off:true},1).wait(91));

	// Obj 10
	this.instance_9 = new lib.Tween27("synched",0);
	this.instance_9.setTransform(557.45,230.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(10).to({_off:false},0).to({y:45.2},14).to({startPosition:0},35).to({_off:true},1).wait(91));

	// Obj 11
	this.instance_10 = new lib.Tween30("synched",0);
	this.instance_10.setTransform(205.75,229.25);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(5).to({_off:false},0).to({x:202.3,y:75.7},16).to({startPosition:0},38).to({_off:true},1).wait(91));

	// Obj 12
	this.instance_11 = new lib.Tween13("synched",0);
	this.instance_11.setTransform(862.3,92.25,0.2105,0.2105,0,0,0,0,10.7);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(28).to({_off:false},0).to({regY:10.6,scaleX:1,scaleY:1,y:93.2},10).to({startPosition:0},21).to({_off:true},1).wait(91));

	// Obj 13
	this.instance_12 = new lib.Tween14("synched",0);
	this.instance_12.setTransform(843.95,108.95,0.2037,0.2037,0,0,0,0,16.2);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(28).to({_off:false},0).to({regY:16.1,scaleX:1,scaleY:1,y:111.1},8).to({startPosition:0},23).to({_off:true},1).wait(91));

	// Obj 14
	this.instance_13 = new lib.Tween19("synched",0);
	this.instance_13.setTransform(1027.8,170.15,0.0797,0.0797,0,0,0,25.1,49.6);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(31).to({_off:false},0).to({regX:25.2,regY:49.3,scaleX:1,scaleY:1,x:1027.75,y:170.1},6,cjs.Ease.sineInOut).to({rotation:10.2058,y:170.05},5,cjs.Ease.sineInOut).to({rotation:0,y:170.1},5,cjs.Ease.sineInOut).wait(1).to({regX:0,regY:0.4,x:1002.55,y:121.2},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:25.2,regY:49.3,x:1027.75,y:170.1},0).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},2).wait(11));

	// Obj 15
	this.instance_14 = new lib.Tween20("synched",0);
	this.instance_14.setTransform(1094.15,273.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(28).to({_off:false},0).to({y:139.15},7).to({y:112.2},1).to({startPosition:0},23).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},6).wait(7));

	// Obj 16
	this.instance_15 = new lib.Tween22("synched",0);
	this.instance_15.setTransform(953.9,222.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(14).to({_off:false},0).to({x:949.75,y:68.9},14).to({startPosition:0},31).to({_off:true},1).wait(91));

	// Obj 17
	this.instance_16 = new lib.Tween32("synched",0);
	this.instance_16.setTransform(674.7,147.05,0.2347,0.2347);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(17).to({_off:false},0).to({scaleX:1,scaleY:1},14).to({startPosition:0},28).to({_off:true},1).wait(91));

	// Obj 18
	this.instance_17 = new lib.Tween24("synched",0);
	this.instance_17.setTransform(845.55,222.5);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(20).to({_off:false},0).to({x:844.95,y:68.9},12).to({startPosition:0},27).to({_off:true},1).wait(91));

	// Obj 19
	this.instance_18 = new lib.Tween25("synched",0);
	this.instance_18.setTransform(694.45,112.45,0.1775,0.1775);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(28).to({_off:false},0).to({scaleX:1,scaleY:1},8).to({startPosition:0},23).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},2).wait(11));

	// Obj 20
	this.instance_19 = new lib.Tween26("synched",0);
	this.instance_19.setTransform(834.35,141.2,0.2281,0.2281);
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(25).to({_off:false},0).to({scaleX:1,scaleY:1},10).to({startPosition:0},24).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},6).wait(7));

	// Obj 21
	this.instance_20 = new lib.Tween21("synched",0);
	this.instance_20.setTransform(1174.9,127.2,0.136,0.136,0,0,0,-18.4,35.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(34).to({_off:false},0).to({regX:-18.3,scaleX:1,scaleY:1,x:1175,y:127.1},6).to({regX:-18.2,regY:35.7,rotation:-8.3032,x:1175.1,y:127.15},6).to({regX:-18.3,regY:35.6,rotation:0,x:1175,y:127.1},7).to({startPosition:0},6).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},4).wait(9));

	// Obj 22
	this.instance_21 = new lib.Tween33("synched",0);
	this.instance_21.setTransform(624.45,226.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_21).to({y:130.7},4).to({startPosition:0},55).to({_off:true},1).wait(78).to({_off:false},0).to({_off:true},2).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1258.9,362.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// wheel
	this.instance = new lib.Tween8("synched",0);
	this.instance.setTransform(33,114.3,0.171,0.171,0,0,0,1.2,37.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,y:83.9},9,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,x:31.8,y:46.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.2,regY:37.5,x:33,y:83.9},0).to({_off:true},1).wait(35));

	// china
	this.instance_1 = new lib.Tween9("synched",0);
	this.instance_1.setTransform(153,183.95,0.171,0.171,0,0,0,2,54.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(22).to({_off:false},0).to({regY:54.5,scaleX:1,scaleY:1,x:152.95,y:156.75},5,cjs.Ease.get(-1)).to({y:169.55},2,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,x:150.95,y:115.05},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:2,regY:54.5,x:152.95,y:169.55},0).to({_off:true},1).wait(28).to({_off:false},0).wait(7));

	// bali
	this.instance_2 = new lib.Tween10("synched",0);
	this.instance_2.setTransform(412.15,174.4,0.171,0.171,0,0,0,1.4,70.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({regX:1.5,scaleX:1,scaleY:1,y:139.15},6,cjs.Ease.get(-1)).to({y:159.95},2,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:16.1,x:410.65,y:105.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.5,regY:70.8,x:412.15,y:159.95},0).to({_off:true},1).wait(28).to({_off:false},0).to({_off:true},6).wait(1));

	// jesus
	this.instance_3 = new lib.Tween11("synched",0);
	this.instance_3.setTransform(564.55,168.15,0.171,0.171,0,0,0,1.8,76.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(36).to({_off:false},0).to({regY:77,scaleX:1,scaleY:1,y:131.35},4,cjs.Ease.get(-1)).to({y:153.75},2,cjs.Ease.get(-1)).wait(1).to({regX:0,regY:0,x:562.75,y:76.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regX:1.8,regY:77,x:564.55,y:153.75},0).to({_off:true},1).wait(28).to({_off:false},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-21.3,631.1,212.10000000000002);


(lib.obj1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// opera house
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(180.65,244.65,0.2369,0.2369,0,0,0,0,42.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).to({regY:42.8,scaleX:1,scaleY:1.2433,x:100.65,y:244.7},6,cjs.Ease.get(-1)).to({scaleY:1,y:244.65},5,cjs.Ease.get(-1)).wait(1).to({regY:0,y:201.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:42.8,y:244.65},0).to({_off:true},1).wait(36));

	// liberty
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.setTransform(228.45,364.5,0.1561,0.1561,0,0,0,0,150.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({scaleX:1,scaleY:1,y:287.65},9,cjs.Ease.get(-1)).to({y:300.45},4,cjs.Ease.get(-1)).wait(1).to({regY:0,y:150.25},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:150.2,y:300.45},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},2).wait(1));

	// clock tower
	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(368.15,390.3,0.2424,0.2424,0,0,0,0,141.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).to({scaleX:1,scaleY:1,y:289.45},8,cjs.Ease.get(-1)).to({y:310.25},4,cjs.Ease.get(-1)).wait(1).to({regY:0,y:168.75},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:141.5,y:310.25},0).to({_off:true},1).wait(33).to({_off:false},0).wait(3));

	// pizza
	this.instance_3 = new lib.Tween5("synched",0);
	this.instance_3.setTransform(728.3,377.95,0.2449,0.2449,0,0,0,0,144.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({scaleX:1,scaleY:1,y:294.75},7,cjs.Ease.get(-1)).to({y:313.95},4,cjs.Ease.get(-1)).wait(1).to({regY:0,y:169.85},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:144.1,y:313.95},0).to({_off:true},1).wait(33).to({_off:false},0).to({_off:true},1).wait(2));

	// eiffel
	this.instance_4 = new lib.Tween4("synched",0);
	this.instance_4.setTransform(917.6,352.2,0.1707,0.1707,0,0,0,1.8,144.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).to({regX:0,regY:142.8,scaleX:1,scaleY:1.1233,y:288.2},5,cjs.Ease.get(-1)).to({scaleY:1},2,cjs.Ease.get(-1)).wait(1).to({regY:0,y:145.4},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({regY:142.8,y:288.2},0).to({_off:true},1).wait(36));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32.5,979.4,422.8);


(lib.cloud_mc = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// clouds
	this.instance = new lib.Tween37("synched",0);
	this.instance.setTransform(1165.6,110.75);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-32.95},854).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1198.5,0,3529.7,221.5);


// stage content:
(lib.ExpandableBannerAdobeAnimateCCTutorial = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,49];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var _stage = this;
		
		_stage.fullscreen_btn.addEventListener('mouseover', fullscreenBtnHandler);
		
		function fullscreenBtnHandler(event) {
			fullscreenHandler();
			_stage.play();
		}
	}
	this.frame_49 = function() {
		this.stop();
		var _stage = this;
		
		_stage.close_btn.addEventListener('click', closeBtnHandler);
		
		function closeBtnHandler(event) {
			closeButtonHandler();
			_stage.play();
		}
		
		_stage.title_mc.cta_btn.addEventListener('click', ctaBtnHandler);
		
		function ctaBtnHandler(event) {
			fullscreenExitHandler();
			_stage.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(11));

	// Buttons
	this.fullscreen_btn = new lib.fullscreen_btn();
	this.fullscreen_btn.name = "fullscreen_btn";
	this.fullscreen_btn.setTransform(150,125,1,1,0,0,0,150,125);
	new cjs.ButtonHelper(this.fullscreen_btn, 0, 1, 2, false, new lib.fullscreen_btn(), 3);

	this.close_btn = new lib.close_btn1();
	this.close_btn.name = "close_btn";
	this.close_btn.setTransform(1164.35,26.3,1,1,0,0,0,20.4,9.9);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.close_btn1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.fullscreen_btn}]}).to({state:[]},1).to({state:[{t:this.close_btn}]},48).to({state:[]},1).wait(10));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	var mask_graphics_1 = new cjs.Graphics().p("A/PU1MAAAgppMA+fAAAMAAAAppg");
	var mask_graphics_2 = new cjs.Graphics().p("EgnDAWJMAAAgsRMBOHAAAMAAAAsRg");
	var mask_graphics_3 = new cjs.Graphics().p("Egu3AXcMAAAgu3MBdvAAAMAAAAu3g");
	var mask_graphics_4 = new cjs.Graphics().p("Eg2rAYvMAAAgxdMBtXAAAMAAAAxdg");
	var mask_graphics_5 = new cjs.Graphics().p("Eg+fAaDMAAAg0FMB8/AAAMAAAA0Fg");
	var mask_graphics_6 = new cjs.Graphics().p("EhGTAbWMAAAg2rMCMnAAAMAAAA2rg");
	var mask_graphics_7 = new cjs.Graphics().p("EhOHAcpMAAAg5RMCcPAAAMAAAA5Rg");
	var mask_graphics_8 = new cjs.Graphics().p("EhV7Ad9MAAAg75MCr3AAAMAAAA75g");
	var mask_graphics_9 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_10 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_11 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_12 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_13 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_14 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_15 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_16 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_17 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_18 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_19 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_20 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_21 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_22 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_23 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_24 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_25 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_26 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_27 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_28 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_29 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_30 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_31 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_32 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_33 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_34 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_35 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_36 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_37 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_38 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_39 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_40 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_41 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_42 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_43 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_44 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_45 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_46 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_47 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_48 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_49 = new cjs.Graphics().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	var mask_graphics_50 = new cjs.Graphics().p("EhWtAeFMAAAg8JMCtbAAAMAAAA8Jg");
	var mask_graphics_51 = new cjs.Graphics().p("EhPrAc6MAAAg5zMCfXAAAMAAAA5zg");
	var mask_graphics_52 = new cjs.Graphics().p("EhIpAbvMAAAg3dMCRTAAAMAAAA3dg");
	var mask_graphics_53 = new cjs.Graphics().p("EhBnAakMAAAg1HMCDPAAAMAAAA1Hg");
	var mask_graphics_54 = new cjs.Graphics().p("Eg6lAZZMAAAgyxMB1LAAAMAAAAyxg");
	var mask_graphics_55 = new cjs.Graphics().p("EgzjAYOMAAAgwbMBnHAAAMAAAAwbg");
	var mask_graphics_56 = new cjs.Graphics().p("EgshAXDMAAAguFMBZDAAAMAAAAuFg");
	var mask_graphics_57 = new cjs.Graphics().p("EglfAV4MAAAgrvMBK/AAAMAAAArvg");
	var mask_graphics_58 = new cjs.Graphics().p("A+dUtMAAAgpZMA87AAAMAAAApZg");
	var mask_graphics_59 = new cjs.Graphics().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:125}).wait(1).to({graphics:mask_graphics_1,x:200,y:133.325}).wait(1).to({graphics:mask_graphics_2,x:250,y:141.675}).wait(1).to({graphics:mask_graphics_3,x:300,y:150}).wait(1).to({graphics:mask_graphics_4,x:350,y:158.325}).wait(1).to({graphics:mask_graphics_5,x:400,y:166.675}).wait(1).to({graphics:mask_graphics_6,x:450,y:175}).wait(1).to({graphics:mask_graphics_7,x:500,y:183.325}).wait(1).to({graphics:mask_graphics_8,x:550,y:191.675}).wait(1).to({graphics:mask_graphics_9,x:600,y:200}).wait(1).to({graphics:mask_graphics_10,x:600,y:200}).wait(1).to({graphics:mask_graphics_11,x:600,y:200}).wait(1).to({graphics:mask_graphics_12,x:600,y:200}).wait(1).to({graphics:mask_graphics_13,x:600,y:200}).wait(1).to({graphics:mask_graphics_14,x:600,y:200}).wait(1).to({graphics:mask_graphics_15,x:600,y:200}).wait(1).to({graphics:mask_graphics_16,x:600,y:200}).wait(1).to({graphics:mask_graphics_17,x:600,y:200}).wait(1).to({graphics:mask_graphics_18,x:600,y:200}).wait(1).to({graphics:mask_graphics_19,x:600,y:200}).wait(1).to({graphics:mask_graphics_20,x:600,y:200}).wait(1).to({graphics:mask_graphics_21,x:600,y:200}).wait(1).to({graphics:mask_graphics_22,x:600,y:200}).wait(1).to({graphics:mask_graphics_23,x:600,y:200}).wait(1).to({graphics:mask_graphics_24,x:600,y:200}).wait(1).to({graphics:mask_graphics_25,x:600,y:200}).wait(1).to({graphics:mask_graphics_26,x:600,y:200}).wait(1).to({graphics:mask_graphics_27,x:600,y:200}).wait(1).to({graphics:mask_graphics_28,x:600,y:200}).wait(1).to({graphics:mask_graphics_29,x:600,y:200}).wait(1).to({graphics:mask_graphics_30,x:600,y:200}).wait(1).to({graphics:mask_graphics_31,x:600,y:200}).wait(1).to({graphics:mask_graphics_32,x:600,y:200}).wait(1).to({graphics:mask_graphics_33,x:600,y:200}).wait(1).to({graphics:mask_graphics_34,x:600,y:200}).wait(1).to({graphics:mask_graphics_35,x:600,y:200}).wait(1).to({graphics:mask_graphics_36,x:600,y:200}).wait(1).to({graphics:mask_graphics_37,x:600,y:200}).wait(1).to({graphics:mask_graphics_38,x:600,y:200}).wait(1).to({graphics:mask_graphics_39,x:600,y:200}).wait(1).to({graphics:mask_graphics_40,x:600,y:200}).wait(1).to({graphics:mask_graphics_41,x:600,y:200}).wait(1).to({graphics:mask_graphics_42,x:600,y:200}).wait(1).to({graphics:mask_graphics_43,x:600,y:200}).wait(1).to({graphics:mask_graphics_44,x:600,y:200}).wait(1).to({graphics:mask_graphics_45,x:600,y:200}).wait(1).to({graphics:mask_graphics_46,x:600,y:200}).wait(1).to({graphics:mask_graphics_47,x:600,y:200}).wait(1).to({graphics:mask_graphics_48,x:600,y:200}).wait(1).to({graphics:mask_graphics_49,x:600,y:200}).wait(1).to({graphics:mask_graphics_50,x:555,y:192.5}).wait(1).to({graphics:mask_graphics_51,x:510,y:185}).wait(1).to({graphics:mask_graphics_52,x:465,y:177.5}).wait(1).to({graphics:mask_graphics_53,x:420,y:170}).wait(1).to({graphics:mask_graphics_54,x:375,y:162.5}).wait(1).to({graphics:mask_graphics_55,x:330,y:155}).wait(1).to({graphics:mask_graphics_56,x:285,y:147.5}).wait(1).to({graphics:mask_graphics_57,x:240,y:140}).wait(1).to({graphics:mask_graphics_58,x:195,y:132.5}).wait(1).to({graphics:mask_graphics_59,x:150,y:125}).wait(1));

	// flight
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(363.65,201.95);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1499.75,y:204.05},49,cjs.Ease.get(0.31)).to({x:-260.25},1,cjs.Ease.get(0.31)).to({x:363.65,y:201.95},9,cjs.Ease.get(1)).wait(1));

	// brand identity
	this.instance_1 = new lib.logo("synched",0);
	this.instance_1.setTransform(148.75,75.95,1,1,0,0,0,70,32.4);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.6923,scaleY:1.6923,x:150.3,y:132.5},17,cjs.Ease.sineInOut).to({startPosition:0},32,cjs.Ease.sineInOut).to({scaleX:1,scaleY:1,x:148.75,y:75.95},10,cjs.Ease.sineInOut).wait(1));

	// message
	this.title_mc = new lib.Tween34();
	this.title_mc.name = "title_mc";
	this.title_mc.setTransform(744,76.55);
	this.title_mc.alpha = 0;

	var maskedShapeInstanceList = [this.title_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.title_mc).wait(17).to({alpha:1},32,cjs.Ease.sineOut).wait(1).to({regX:-0.2,regY:7.3,x:743.8,y:83.85},0).wait(1).to({regX:0,regY:0,x:744,y:76.55},0).wait(9));

	// balloon
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(331.6,156.05);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-40.75},49).wait(11));

	// graphics 1
	this.instance_3 = new lib.obj1("synched",0);
	this.instance_3.setTransform(162.35,111.8);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).wait(54));

	// graphics 2
	this.instance_4 = new lib.Symbol2("synched",0);
	this.instance_4.setTransform(613.7,342.3,1,1,0,0,0,639.1,113);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(60));

	// graphics 3
	this.instance_5 = new lib.Symbol1("synched",0);
	this.instance_5.setTransform(894,235.7,1,1,0,0,0,315.5,83.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).wait(54));

	// clouds
	this.cloud_mc = new lib.cloud_mc();
	this.cloud_mc.name = "cloud_mc";
	this.cloud_mc.setTransform(1228.6,134.05,1,1,0,0,0,1203.8,110.8);

	var maskedShapeInstanceList = [this.cloud_mc];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.cloud_mc).wait(60));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#51D5FD").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAEAEABAFQgBAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape.setTransform(1116.85,299.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAEAEABAFQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_1.setTransform(884.65,319.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFgBQAGABAEAEQAEAEAAAFQAAAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_2.setTransform(695.55,322.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_3.setTransform(252.05,102);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#51D5FD").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAEgGABQgFgBgEgEg");
	this.shape_4.setTransform(903.95,160.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#51D5FD").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAEgGABQgFgBgEgEg");
	this.shape_5.setTransform(681.65,67.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#51D5FD").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_6.setTransform(205.05,189.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#51D5FD").s().p("AgJALQgFgFABgGQgBgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_7.setTransform(397.95,143.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#51D5FD").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgFAFABQAGgBAFAFQADAEAAAFQAAAGgDAFQgFADgGABQgFgBgEgDg");
	this.shape_8.setTransform(423.2,252.65);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_9.setTransform(631.85,167.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFABQAGgBAEAFQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_10.setTransform(1118.325,60.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#51D5FD").s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAEQgEAEgGAAQgFAAgEgEg");
	this.shape_11.setTransform(158.65,96);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#51D5FD").s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_12.setTransform(-13.45,268.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#51D5FD").s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_13.setTransform(49.05,199.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51D5FD").s().p("AgJALQgEgFgBgGQABgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_14.setTransform(182.45,337.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#51D5FD").s().p("AgJALQgEgFAAgGQAAgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_15.setTransform(381.6,306.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#51D5FD").s().p("AgJALQgFgFABgGQgBgFAFgEQAEgFAFABQAGgBAFAFQAEAEgBAFQABAGgEAFQgFADgGAAQgFAAgEgDg");
	this.shape_16.setTransform(522.35,247.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#51D5FD").s().p("AgJALQgFgFABgGQgBgFAFgEQAEgEAFgBQAGABAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_17.setTransform(767.95,201.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#51D5FD").s().p("AgJAKQgEgEgBgGQABgFAEgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAEgGABQgFgBgEgEg");
	this.shape_18.setTransform(929,295);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#51D5FD").s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_19.setTransform(1043.725,251.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#51D5FD").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_20.setTransform(567.75,306.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#51D5FD").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_21.setTransform(130.05,271.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#51D5FD").s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_22.setTransform(276.05,274.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#51D5FD").s().p("AgUAWQgJgKAAgMQAAgMAJgIQAJgJALAAQAMAAAJAJQAJAIAAAMQAAAMgJAKQgJAIgMAAQgLAAgJgIg");
	this.shape_23.setTransform(886.1,251.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#51D5FD").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_24.setTransform(503.35,189.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#51D5FD").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgMAAgIgJg");
	this.shape_25.setTransform(694,240.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#51D5FD").s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_26.setTransform(1095.6,200.175);

	this.instance_6 = new lib.ClipGroup();
	this.instance_6.setTransform(553.85,253.1,1,1,0,0,0,706,253.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#42D2FD").p("AAFAAIgJAA");
	this.shape_27.setTransform(777.05,187.825);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#42D2FD").s().p("AI9DOQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgAIBDOQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgAJ5DNQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgAHFDNQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgAK1DLQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgAGJDLQgBAAAAgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAIAKAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQgBABAAAAIgKAAgALuDHQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAKgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABIAAAAIgDgBgAFWDIIgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgAMqDCQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAKgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABIAAAAIgDgBgAEaDDIgKgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgBAAgADeC+IgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgANmC8QgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAKgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABIAAAAIgDgBgACiC4IgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgAOiC1QgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAIAKgBQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgKABIAAAAIgDgBgABmCxIgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgAPdCtQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABgBAAAAQAAAAABAAIAJgBQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgKABIAAAAIgEgBgAAqCpIgKgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgBAAgAQZCkQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKgCQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgKACIgBAAIgCgBgAgQChIgKgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABIAKACQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgDABIgBAAgARUCYQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABgBQAAAAAAAAIAKgCQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgKACIgBAAIgCgBgAhLCWIgKgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgDABIgBAAgASPCMQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKgCQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgKACIgBAAIgCgBgAiHCLIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAjDB/IgKgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgCAAgATKB+QgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKgCQABgBAAAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBABIgKACIgBAAIgCgBgAj/ByIgKgCQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgDABIgBAAgAUGBvQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAKgDQAAAAABAAQAAgBABABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAAgBABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgKADIgCABIgCgBgAk5BkIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABIgBAAgAVABfQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAJgDQAAAAABAAQAAgBABABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAAgBABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgJADIgCABIgCgBgAlzBXIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAV5BOQgBgBAAAAQgBAAAAgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAIAJgDQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgJADIgBAAIgCAAgAmtBKIgKgCQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABIgBAAgAnnA9IgKgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABIAKACQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgDABIgBAAgAWwA7QAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAIAJgDQAAAAABAAQAAgBABABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAAgBABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgJADIgCABIgCgBgAoiAwIgKgCQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAXpAnQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAJgDQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAABIgKADIgBABIgCgBgApbAjIgKgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABIAKACQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgDABIgBAAgAqWAWIgKgCQAAgBAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAYhARQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAJgEQABAAAAAAQABAAAAgBQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgJAEIgCABIgBgBgArQAJIgKgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABIAKACQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAQgBAAAAABIgDABIgBAAgAsKgDIgKgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgDABIgBAAgAZYgGQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAIAJgEQABAAAAAAQABAAAAAAQABgBAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgJAEIgCABIgBgBgAtEgPIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABIgBAAgAt+gcIgKgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgCAAgAaQgfQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABAAIAKgFQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQgBABAAAAQAAAAgBABIgKAFIgCAAIgCAAgAu4goIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAvyg0IgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgDABIgBAAgAbGg6QgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAJgFQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgJAFIgCABIgBAAgAwshAIgKgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAgBABAAQAAAAABABIAKACQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQgBAAAAABIgDABIgBAAgAxnhMIgKgCQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAQABAAAAABIAKACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgAb6hXQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAIgFQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAIgJAFIgCABIgCAAgAyhhYIgJgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAIAJACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgCAAgAzbhjIgJgCQgBgBAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABABIAJACQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAgBABIgCABIgCAAgA0VhvIgKgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAKACQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgDABIgBAAgActh2QAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAIgFQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABABQAAAAABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAIgJAFIgCABIgCAAgA1Rh6IgKgCQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAIAKACQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBAAIgCABIgCAAgA23iLIgKgCQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAABAAIAKACQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAAAABQgBAAAAAAIgDABIgBAAgA3xiUIgKgBQgBgBAAAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAgBABABIAKABQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABAAgBABQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAIgEACIAAAAgAdgiXQAAgBgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAIgGQAAgBABAAQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAABQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABIgIAGIgDABIgBAAgA4sicIgKgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgBAAgA5nijIgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgA6iiqIgKgBQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAIAKABQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgDABIgBAAgA7divIgKgBQAAgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABgBAAABIAKABQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAIgDACIgBAAgA8Yi0IgKgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAIAKABQAAAAABAAQAAAAABABQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQABAAgBABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgEABIAAAAgA9di3QAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgKAAgA+Yi3QAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAIAKAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAIgKAAgAeQi8QgBgBAAAAQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAIgGQABgBAAAAQABAAAAAAQABAAAAgBQABAAAAABQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBABIgIAGIgDABIAAAAg");
	this.shape_28.setTransform(965.1524,234.4477);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#42D2FD").p("AAEgCIgGAF");
	this.shape_29.setTransform(1163.45,220.85);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#42D2FD").s().p("AUvHAIgUgDQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIATADQABABAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABABAAQAAABgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAIgDACIAAgBgATgGyIgUgFQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAEQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgDABIgBAAgASSGfIgTgFQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIATAFQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABIgCAAIgBAAgARGGLIgTgGQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAABABAAIASAFQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAIgCABIgBAAgAP6F0IgUgGQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABAAAAIAUAGQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAQAAABgBAAIgCABIgCgBgAOnFaIgTgGQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAABABAAIATAGQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCABIgCgBgANbFBIgTgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAHQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCABIgCAAgAMQElIgTgHQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIATAHQAAAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABAAAAIgCABIgCgBgALFEJIgTgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAHQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgCABIgCAAgAJ7DrIgSgIQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAIASAIQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCABIgCgBgAIyDLIgSgIQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIASAIQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCAAIgCgBgAHpCrIgSgIQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAIASAIQAAAAABAAQAAABABAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCABIgCgBgAGhCJIgSgIQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAIASAIQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCAAIgCgBgAFaBmIgSgJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIARAJQABABAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAIgCgBgAETBCIgRgJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIARAJQAAABABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIgCgBgADNAdIgSgKQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABIASAKQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAABgBAAQAAAAAAAAQgBABAAAAIgCAAIgCgBgACGgIIgRgKQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIARAKQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCAAIgCAAgAA7gzIgSgKQAAgBAAAAQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIASAKQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABAAAAQgBAAAAAAIgCAAIgCAAgAgKhaIgSgJQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIARAJQABABAAAAQAAAAABABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAIgBAAIgCgBgAhRh+IgSgJQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAIASAJQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAIgBABIgCgBgAiaihIgSgIQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIASAIQABABAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAABQAAAAgBAAQAAABgBAAIgBAAIgDgBgAjijBIgSgIQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAIASAIQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCAAIgCgBgAkrjfIgTgHQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAQAAABABAAIASAHQABAAAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQABABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAIgCABIgBgBgAl2j7IgTgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIASAHQABAAAAABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQABAAgBABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAIgCABIgBAAgAnAkWIgTgGQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQAAABABAAIATAGQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCABIgCgBgAoMkuIgTgGQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIATAGQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAAAgBAAIgCABIgCAAgApelIIgTgFQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAGQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQABABgBAAQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgCABIgCgBgAqqldIgTgFQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAFQAAAAABABQAAAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAIgCABIgCAAgAr2lxIgUgFQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAIATAFQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAgBABIgCAAIgBAAgAtEmDIgTgEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBQAAAAAAAAQABAAAAAAIATAEQABABAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABIgCABIgCgBgAuRmSIgTgEQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIAUAEQAAAAABAAQAAAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAIgDABIgBAAgAvfmfIgTgDQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABAAIATADQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgDABIgBAAgAwtmqIgUgCQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAQABAAAAAAIAUACQAAABABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQABAAgBABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgEABIAAAAgAx8mxIgUgBQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBQgBAAAAgBQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAgBABAAIAUABQAAABABAAQAAAAABAAQAAAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAAgBABQAAAAAAABQAAAAAAABQAAAAgBAAQAAABAAAAIgDABIgBAAgAzLm1IgUAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIAUAAQABABAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAIgDABIAAAAgA0vm2QAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBAAAAgBQAAAAABgBQAAAAAAAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABgBAAAAIAUAAQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAIgUAAg");
	this.shape_30.setTransform(186.0524,250.4524);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#205BF7").s().p("EhdvAfQMAAAg+fMC7fAAAMAAAA+fg");
	this.shape_31.setTransform(600,200);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.instance_6,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_6},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,200,600,200);
// library properties:
lib.properties = {
	id: '139A5D553B144366BFAC8A4E1AC0D654',
	width: 1200,
	height: 400,
	fps: 24,
	color: "#CCCCCC",
	opacity: 0.00,
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
an.compositions['139A5D553B144366BFAC8A4E1AC0D654'] = {
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


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;