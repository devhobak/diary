import React from 'react';
import Navbar from '../common/Navbar';
import Calendar from './calendar/Calendar';
import { HomeLayout } from './style/calendar';
import Top from './Top';

export default function Home() {
    return (
        <HomeLayout>
            <Navbar />
            <Top />
            <Calendar />
        </HomeLayout>
    );
}
