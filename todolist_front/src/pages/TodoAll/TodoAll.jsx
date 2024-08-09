import React, { useState } from 'react';
import PageAnimationLayout from '../../components/PageAnimationLayout/PageAnimationLayout';
import MainContainer from '../../components/MainContainer/MainContainer';
import BackButtonTop from '../../components/BackButtonTop/BackButtonTop';

function TodoAll(props) {
    const [ isShow, setShow ] = useState(true);
    return (
        <PageAnimationLayout isShow={isShow} setShow={setShow}>
            <MainContainer>
                <BackButtonTop setShow={setShow} />
            </MainContainer>
        </PageAnimationLayout>
    );
}

export default TodoAll;