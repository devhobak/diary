import React, { useState } from 'react';
import Navbar from '../common/Layout/Navbar';
import Calendar from './calendar/Calendar';

import Top from '../common/Layout/Top';
import { Layout } from '../common/Layout/style/navbar';

export default function Home() {
    return (
        <>
            <Layout>
                <Navbar />
                <Top />
                <Calendar />
            </Layout>
        </>
    );
}
