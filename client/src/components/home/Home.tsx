import React, { useState } from 'react';
import Navbar from '../common/Layout/Navbar';
import Calendar from './calendar/Calendar';
import { HomeLayout } from './style/style';
import Top from './Top';

export default function Home() {
    return (
        <>
            <HomeLayout>
                <Navbar />
                <Top />
                <Calendar />
            </HomeLayout>
        </>
    );
}
