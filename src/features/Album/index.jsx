import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            title: 'Thêm Một Ai Cũng Dư Thừa',
            imageUrl:
                'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/7/1/a/d/71ade4533603788e14fe39c608421d97.jpg',
        },
        {
            id: 2,
            title: '#ZINGCHART',
            imageUrl:
                'https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/9/7/c/9/97c960ac271e94fa47c87a12aa7d3be5.jpg',
        },
        {
            id: 3,
            title: 'Thêm Một Ai Cũng Dư Thừa',
            imageUrl:
                'https://photo-playlist-zmp3.zadn.vn/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rPDRPnhYVe305KmYZlOhWnL0ZMFDDsZ2mbIRenXWACD2bvktpA6zbP51oY1Fi2aNGv5OTbrbEqAGmaco3M3fnj3N2R8DTRhJ0y4TPWoZhzC251tdpUDkXfOKt2VE8pk7mHG9fW-bU9O05nWoZNUe15V5pI3PPFiLavNTibpa-vM65TqWdUEk08VKNBM8jpkKKi58OSgs-e65m5mqdk9xWCI06xPEupYHK0B9PjoqgaH2LferpN3wLD37sZGDPBfL5jA8OStmEa53Krtr3V2lr5M7oFIR96u1rHETD5inkfFNrqZtNq&amp;size=thumb/240_240',
        },
    ];
    return (
        <div>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;
