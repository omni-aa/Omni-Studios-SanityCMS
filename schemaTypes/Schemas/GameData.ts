export default {
    name: 'GameData',
    type: 'document',
    title: 'Game Directory Data',
    fields: [
        {
            name: 'gameTitle',
            type: 'string',
            title: 'Title of Existing Game',
        },
        {
            name:'gameImagine',
            type: 'image',
            title: 'Image of Existing Game',
        },
        {
            name:'gameDescription',
            type:'text',
            title: 'Game Description',
        },
    ]
}