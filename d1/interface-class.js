{
    // We then use this to make a class.
    class Snap {
        // Missing the author field, which is allowed as it is optional.
        // Declare an optional constructor.
        constructor(snap) {
            this.prettyPrint = () => {
                return `Snap ${this.title} is located at ${this.url}.`;
            };
            this.albumId = snap.albumId;
            this.id = snap.id;
            this.title = snap.title;
            this.url = snap.url;
            this.thumbnailUrl = snap.thumbnailUrl;
        }
    }
    // In practice place interfaces and classes in separate modules and populate with API data.
    const photos = [
        {
            albumId: 1,
            id: 1,
            title: 'accusamus beatae ad facilis cum similique qui sunt',
            url: 'https://via.placeholder.com/600/92c952',
            thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        },
        {
            albumId: 1,
            id: 2,
            title: 'reprehenderit est deserunt velit ipsam',
            url: 'https://via.placeholder.com/600/771796',
            thumbnailUrl: 'https://via.placeholder.com/150/771796',
        },
        {
            albumId: 1,
            id: 3,
            title: 'officia porro iure quia iusto qui ipsa ut modi',
            url: 'https://via.placeholder.com/600/24f355',
            thumbnailUrl: 'https://via.placeholder.com/150/24f355',
        },
        {
            albumId: 1,
            id: 4,
            title: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
            url: 'https://via.placeholder.com/600/d32776',
            thumbnailUrl: 'https://via.placeholder.com/150/d32776',
        },
    ];
    const firstSnap = new Snap(photos[3]);
    console.log(firstSnap.prettyPrint());
    // Duck typing.
    const newSnap = new Snap({
        albumId: 123,
        id: 321,
        title: 'some snap',
        url: 'http://some_url.com',
        thumbnailUrl: '',
    });
    console.log(newSnap.prettyPrint());
}
