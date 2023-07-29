import React, { useState } from 'react';
import Navbar from '../common/Layout/Navbar';
import Calendar from './calendar/Calendar';

import Top from '../common/Layout/Top';
import { Layout } from '../common/Layout/style/navbar';
import ViewLayout from '../common/Layout/ViewLayout';
import { ToastContainer } from 'react-toastify';
export default function Home() {
    return (
        <ViewLayout>
            <>
                <Calendar />
            </>
        </ViewLayout>
    );
}
