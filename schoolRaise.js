/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable semi */
/* eslint-disable comma-dangle */
/* eslint-disable key-spacing */
/* eslint-disable spaced-comment */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable space-before-blocks */
/* eslint-disable prettier/prettier */
/* eslint-disable no-multiple-empty-lines */

const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod(){
    console.log('class started');

    //raise event when bell rings 

    this.emit('bellRing', {
    period:'1st',
    // eslint-disable-next-line key-spacing
    text:'period ended'
})
}
}

module.exports = School;
