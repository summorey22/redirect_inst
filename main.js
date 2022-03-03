const rules = [
    { day: 1, from: 10, to: 12, url: 'https://meet.google.com/toi-rmqs-yis' },
    { day: 1, from: 12, to: 14, url: 'https://meet.google.com/soj-kvpq-ath' },
    { day: 1, from: 14, to: 16, url: 'https://meet.google.com/ffv-hrpb-cab' },
    { day: 1, from: 16, to: 18, url: 'https://meet.google.com/wec-qmtt-kys' },
    { day: 2, from: 9,  to: 10, url: 'https://meet.google.com/xct-vaqg-nxk' },
    { day: 2, from: 10, to: 11, url: 'https://meet.google.com/toi-rmqs-yis' },
    { day: 2, from: 11, to: 12, url: 'https://meet.google.com/upg-xcny-emk' },
    { day: 2, from: 14, to: 15, url: 'https://meet.google.com/dex-bqvg-yib' },
    { day: 3, from: 10, to: 11, url: 'https://meet.google.com/toi-rmqs-yis' },
    { day: 3, from: 12, to: 13, url: 'https://meet.google.com/dex-bqvg-yib' },
    { day: 3, from: 13, to: 14, url: 'https://meet.google.com/hmo-yfzw-nyn' },
    { day: 4, from: 9,  to: 10, url: 'https://meet.google.com/xct-vaqg-nxk' },
    { day: 4, from: 10, to: 11, url: 'https://meet.google.com/dex-bqvg-yib' },
    { day: 4, from: 11, to: 12, url: 'https://meet.google.com/toi-rmqs-yis' },
    { day: 4, from: 13, to: 14, url: 'https://meet.google.com/soj-kvpq-ath' },
    { day: 4, from: 14, to: 15, url: 'https://meet.google.com/uhj-ftyb-nno' },
    { day: 5, from: 9,  to: 10, url: 'https://meet.google.com/xct-vaqg-nxk' },
    { day: 5, from: 10, to: 11, url: 'https://meet.google.com/dex-bqvg-yib' },
    { day: 5, from: 11, to: 12, url: 'https://meet.google.com/upg-xcny-emk' },
    { day: 5, from: 14, to: 15, url: 'https://meet.google.com/upg-xcny-emk' },
    { url: './nolecture.html' }
];//

function getRedirectUrl() {
    const now = new Date();
    const today = now.getDay();
    const hours = now.getHours();

    const first = rules.find(item => (item.day === undefined || item.day === today) && (item.from === undefined || item.from <= hours) && (item.to === undefined || item.to > hours));
    
    return first.url;
}

window.location.href = getRedirectUrl();
//1/