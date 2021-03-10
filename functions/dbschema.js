let db ={
    users: [
        {
            userId: 'dh23ggj5h32g543j5gf43',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2011-10-05T14:48:00.000Z',
            imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, ON'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'this is the scream body',
            createdAt: '2011-10-05T14:48:00.000Z',
            linkCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {
            userHandle: 'user',
            screamId: 'kdjsfgdksuufhgkdsufky',
            body: 'nice one mate!',
            createdAt: '2011-10-05T14:48:00.000Z'
        }
    ]
};

const userDetails ={
    //Redux data
    credentials: {
        userId: 'dh23ggj5h32g543j5gf43',
            email: 'user@gmail.com',
            handle: 'user',
            createdAt: '2011-10-05T14:48:00.000Z',
            imageUrl: 'image/dsfsdkfghskdfgs/dgfdhfgdh',
            bio: 'Hello, my name is user, nice to meet you',
            website: 'https://user.com',
            location: 'London, ON'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'hh705oWfWucVzGbHH2pa'
        },
        {
            userHandle: 'user',
            screamId: '3IOnFoQexRcofs50hBXO'
        }
    ]
}