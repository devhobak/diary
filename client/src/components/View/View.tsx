import React from 'react';
import { Layout } from '../common/Layout/style/navbar';
import Navbar from '../common/Layout/Navbar';
import Top from '../common/Layout/Top';
import RecrodList from './RecordList';

export default function View() {
    return (
        <Layout>
            <Navbar />
            <Top />
            <RecrodList />
        </Layout>
    );
}
