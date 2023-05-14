import React from 'react';
import styled from 'styled-components';
const TopLayout = styled.section`
    grid-area: top;
`;
export default function Top() {
    return (
        <TopLayout>
            <p style={{ fontSize: '1.8rem' }}></p>
        </TopLayout>
    );
}
