import Link from 'next/link';
import React, {useEffect, useState} from 'react';
import { Dropdown, Avatar, Text, Grid, User } from '@nextui-org/react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    });

  return (
        <div id="nav-container">
            <header className = 'header'> 
                <div className='content'> 
                    <Link href="/">
                        <a className='name'>labeler</a>
                    </Link>

                    {
                        <Link className='name' href="/profile">
                            {/* <a><CgProfile size={30}  className= {classes.btn }/></a> */}
                            <Dropdown>
                                <Dropdown.Trigger style={{ padding: '25px' }}> 
                                    <Avatar
                                        bordered
                                        size="md"
                                        as="button"
                                        color="primary"
                                        src="./eye_logo.jpg"
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Menu color="secondary" aria-label="Actions">
                                    <Dropdown.Item key="new">
                                        Account
                                    </Dropdown.Item>
                                    <Dropdown.Item key="copy">
                                        Sign Out
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Link>

                    }   
                    
                </div> 
            </header>
        </div>
    
  );
};
