/**
 * Created by vaseker on 23.06.14.
 */
function makeShare(_share, elem) {
    new Ya.share({
        element: elem,
        title: _share.og.title,
        description: _share.og.description,
        serviceSpecific: {
            facebook: {
                link: host + _share.url
            },
            odnoklassniki: {
                link: host + _share.url
            }
        }
    });
}
makeShare(shares.main, 'main');
makeShare(shares.mod[0], 'mod1');
makeShare(shares.mod[1], 'mod2');

