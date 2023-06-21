import React from 'react';
import { Layout } from '../common/Layout/style/navbar';
import Navbar from '../common/Layout/Navbar';
import Top from '../common/Layout/Top';
import RecrodList from './RecordList';
import ViewLayout from '../common/Layout/ViewLayout';

export default function View() {
    return (
        <ViewLayout>
            <RecrodList />
        </ViewLayout>
    );
}
