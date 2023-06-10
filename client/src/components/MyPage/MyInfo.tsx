import React from 'react';
import Navbar from '../common/Layout/Navbar';
import Top from '../common/Layout/Top';
import { Layout } from '../common/Layout/style/navbar';
import RecordInfo from './RecordInfo';

export default function MyInfo() {
    return (
        <Layout>
            <Navbar />
            <Top />
            <RecordInfo />
        </Layout>
    );
}
