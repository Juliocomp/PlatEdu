'use client';


import LogForm from '@/components/logform'
import { useSession } from 'next-auth/react';


export default function UserInfo() {
    const { status, data: session } = useSession();

    
        return <LogForm/>;
    
}