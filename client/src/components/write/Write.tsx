import React from 'react';

import Navbar from '../common/Layout/Navbar';
import Top from '../common/Layout/Top';
import { Layout } from '../common/Layout/style/navbar';
import InputSection from './InputSection';
import ViewLayout from '../common/Layout/ViewLayout';

export default function Write() {
    return (
        <ViewLayout>
            <InputSection />
        </ViewLayout>
    );
}
