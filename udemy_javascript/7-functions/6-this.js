//=======================================================
// this: The object that is executing current function

// method -> obj
// function -> global (window, global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

video.play();

video.stop = function() {
    console.log(this);
};

video.stop();

// constructor function

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('b');

//=============
const video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this); 
    }
};

video1.showTags();


//=============
const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        const self = this;
        this.tags.forEach(function(tag) {
            console.log(self.title, tag);
        }); 
    }
};

video2.showTags();

// 3 ways of changing this value
//  1. self
//  2. bind
//  3. arrow function
// ================================
// call, apply, bind

const video3 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this)); 
    }
};