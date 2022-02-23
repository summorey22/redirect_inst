const d = new Date();

let day = d.getDay();
let time = d.getHours();

var TimeTable = {
     
    1: [{ 
        10: "https://meet.google.com/toi-rmqs-yis", 
        11: "https://meet.google.com/toi-rmqs-yis", 
        12: "https://meet.google.com/soj-kvpq-ath", 
        13: "https://meet.google.com/soj-kvpq-ath", 
        14: "https://meet.google.com/ffv-hrpb-cab", 
        15: "https://meet.google.com/ffv-hrpb-cab", 
        16: "https://meet.google.com/wec-qmtt-kys", 
        17: "https://meet.google.com/wec-qmtt-kys" }], 
    
    2: [{
        9:"https://meet.google.com/xct-vaqg-nxk", 
        10:"https://meet.google.com/toi-rmqs-yis", 
        11:"https://meet.google.com/upg-xcny-emk", 
        14:"http://meet.google.com/dex-bqvg-yib"}], 
        
    3:[{
        10:"https://meet.google.com/toi-rmqs-yis",
        12:"http://meet.google.com/dex-bqvg-yib",
        13:"https://meet.google.com/hmo-yfzw-nyn"}],
    
    4:[{
        9:"https://meet.google.com/xct-vaqg-nxk",
        10:"http://meet.google.com/dex-bqvg-yib",
        11:"https://meet.google.com/toi-rmqs-yis",
        13:"https://meet.google.com/soj-kvpq-ath",
        14:"https://meet.google.com/uhj-ftyb-nno"}],

    5:[{
        9:"https://meet.google.com/xct-vaqg-nxk",
        10:"http://meet.google.com/dex-bqvg-yib",
        11:"https://meet.google.com/upg-xcny-emk",
        13:"https://meet.google.com/upg-xcny-emk"}],

    }; 

var link = TimeTable[day][0][time];

if(link != null){
    window.location.replace(TimeTable[day][0][time]);
}
