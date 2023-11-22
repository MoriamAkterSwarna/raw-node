
const School = require('./schoolRaise');


//register a listener for bellRing event
// emitter.on('bellRing', (period) =>{
//     console.log(`we need to run fast ${period} ended` )
// }) 
//register multiple parameter
// emitter.on('bellRing', ({period, text}) =>{
//     console.log(`we need to run fast ${period} ${text}` )
// }) 

//raise event
const school = new School();
school.on('bellRing', ({period, text}) =>{
    console.log(`we need to run fast ${period} ${text}` )
})
school.startPeriod()


//raise an event 
// emitter.emit('bellRing', 'second period')

// multiple parameter
// emitter.emit('bellRing', {
//     period:'1st',
//     text:'period ended'
// })

//it won't work
emitter.on('bellRing', () =>{
    console.log("we need to run")
})