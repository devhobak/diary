import React from 'react';

import Navbar from '../common/Layout/Navbar';
import Top from '../common/Layout/Top';
import { Layout } from '../common/Layout/style/navbar';
import InputSection from './InputSection';

export default function Write() {
    return (
        <Layout>
            <Navbar />
            <Top />
            <InputSection />
        </Layout>
    );
}
