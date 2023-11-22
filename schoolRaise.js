
const EventEmitter = require('events')

class School extends EventEmitter {
    startPeriod(){
    console.log('class started')

    //raise event when bell rings 

    this.emit('bellRing', {
    period:'1st',
    text:'period ended'
})

}
 
}

module.exports =School;