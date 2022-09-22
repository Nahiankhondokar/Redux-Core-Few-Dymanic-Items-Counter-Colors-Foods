let data = {
    users : [],
    info : {
        title : 'soroBindu',
        age : 3,
        devs : [
            {
                name : 'selim',
                skill : 'laravel'
            },
            {
                name  : 'sojib',
                skill : 'mearn'
            }
        ]
    },
    foods : ['beriyani', 'fruits', 'flower']
}


data = {
    ...data,
    info : {
        ...data.info,
        devs : [
            data.info.devs[1] = {
                ...data.info.devs[1],
                name : 'shnewaj sajib'
                
            }
            
        ]
    },
    foods : [
        ...data.foods,
        'low'
    ]
}


console.log(data.info.devs);
